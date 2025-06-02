
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { useToast } from '../hooks/use-toast';
import CustomCursor from '../components/CustomCursor';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await login(email, password);
      toast({
        title: "Welcome back!",
        description: "You've been successfully logged in.",
      });
      navigate('/');
    } catch (error) {
      toast({
        title: "Login failed",
        description: "Please check your credentials and try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white font-body overflow-x-hidden">
      <CustomCursor />
      
      <div className="min-h-screen flex items-center justify-center px-6 lg:px-12">
        <div className="max-w-md w-full space-y-8">
          <div className="text-center">
            <Link 
              to="/" 
              className="text-2xl font-display font-bold mb-8 inline-block"
              data-cursor-hover
            >
              Portfolio
            </Link>
            <h1 className="text-fluid-3xl font-display font-light mb-4">
              Welcome Back
            </h1>
            <p className="text-gray-400 text-lg">
              Sign in to your account to continue
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Label htmlFor="email" className="text-white mb-2 block">
                Email Address
              </Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="bg-gray-900 border-gray-700 text-white placeholder-gray-400 focus:border-white"
              />
            </div>

            <div>
              <Label htmlFor="password" className="text-white mb-2 block">
                Password
              </Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                required
                className="bg-gray-900 border-gray-700 text-white placeholder-gray-400 focus:border-white"
              />
            </div>

            <div className="flex items-center justify-between">
              <Link 
                to="/reset-password" 
                className="text-gray-400 hover:text-white transition-colors duration-300"
                data-cursor-hover
              >
                Forgot password?
              </Link>
            </div>

            <Button
              type="submit"
              disabled={loading}
              className="w-full bg-white text-black hover:bg-gray-200 font-medium py-3"
              data-cursor-hover
            >
              {loading ? 'Signing in...' : 'Sign In'}
            </Button>
          </form>

          <div className="text-center">
            <p className="text-gray-400">
              Don't have an account?{' '}
              <Link 
                to="/signup" 
                className="text-white hover:underline"
                data-cursor-hover
              >
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
