
import React, { createContext, useContext, useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import type { User as SupabaseUser } from '@supabase/supabase-js';

interface User {
  id: string;
  email: string;
  name: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  signup: (email: string, password: string, name: string) => Promise<void>;
  logout: () => void;
  resetPassword: (email: string) => Promise<void>;
  loading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log('AuthProvider: Initializing auth state...');
    
    // Get initial session
    supabase.auth.getSession().then(({ data: { session }, error }) => {
      console.log('AuthProvider: Initial session check', { session, error });
      
      if (session?.user) {
        console.log('AuthProvider: User found in session', session.user);
        setUser({
          id: session.user.id,
          email: session.user.email || '',
          name: session.user.user_metadata?.name || session.user.email?.split('@')[0] || ''
        });
      } else {
        console.log('AuthProvider: No user in session');
      }
      setLoading(false);
    });

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        console.log('AuthProvider: Auth state changed', { event, session });
        
        if (session?.user) {
          console.log('AuthProvider: Setting user from auth change', session.user);
          setUser({
            id: session.user.id,
            email: session.user.email || '',
            name: session.user.user_metadata?.name || session.user.email?.split('@')[0] || ''
          });
        } else {
          console.log('AuthProvider: Clearing user from auth change');
          setUser(null);
        }
        setLoading(false);
      }
    );

    return () => subscription.unsubscribe();
  }, []);

  const login = async (email: string, password: string) => {
    console.log('AuthProvider: Attempting login for', email);
    
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    
    console.log('AuthProvider: Login response', { data, error });
    
    if (error) {
      console.error('AuthProvider: Login error', error);
      throw new Error(error.message);
    }
    
    if (data.user) {
      console.log('AuthProvider: Login successful', data.user);
    }
  };

  const signup = async (email: string, password: string, name: string) => {
    console.log('AuthProvider: Attempting signup for', email);
    
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          name: name,
        },
      },
    });
    
    console.log('AuthProvider: Signup response', { data, error });
    
    if (error) {
      console.error('AuthProvider: Signup error', error);
      throw new Error(error.message);
    }
    
    if (data.user && !data.user.email_confirmed_at) {
      console.log('AuthProvider: Signup successful but email confirmation required');
      throw new Error('Please check your email and click the confirmation link before logging in.');
    }
  };

  const logout = async () => {
    console.log('AuthProvider: Logging out...');
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.error('AuthProvider: Logout error', error);
    }
  };

  const resetPassword = async (email: string) => {
    console.log('AuthProvider: Resetting password for', email);
    
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/reset-password`,
    });
    
    if (error) {
      console.error('AuthProvider: Reset password error', error);
      throw new Error(error.message);
    }
  };

  return (
    <AuthContext.Provider value={{
      user,
      login,
      signup,
      logout,
      resetPassword,
      loading
    }}>
      {children}
    </AuthContext.Provider>
  );
};
