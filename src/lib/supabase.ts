
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

// Create a fallback client if credentials are not available
export const supabase = createClient(
  supabaseUrl || 'https://ldmvaiqcsmfcsxujpwfd.supabase.co', 
  supabaseAnonKey || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxkbXZhaXFjc21mY3N4dWpwd2ZkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg5NzA3NjcsImV4cCI6MjA2NDU0Njc2N30._SyHTRmtmJ3KH_kT80pjRKAi3aMxmZ9DY44fRm-ROJg'
);
