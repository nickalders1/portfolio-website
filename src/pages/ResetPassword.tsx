
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { useToast } from '../hooks/use-toast';
import CustomCursor from '../components/CustomCursor';

const ResetPassword = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [emailSent, setEmailSent] = useState(false);
  const { resetPassword } = useAuth();
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await resetPassword(email);
      setEmailSent(true);
      toast({
        title: "Reset email sent!",
        description: "Check your email for password reset instructions.",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "There was an error sending the reset email. Please try again.",
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
              Reset Password
            </h1>
            <p className="text-gray-400 text-lg">
              Enter your email to receive reset instructions
            </p>
          </div>

          {!emailSent ? (
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

              <Button
                type="submit"
                disabled={loading}
                className="w-full bg-white text-black hover:bg-gray-200 font-medium py-3"
                data-cursor-hover
              >
                {loading ? 'Sending...' : 'Send Reset Email'}
              </Button>
            </form>
          ) : (
            <div className="text-center space-y-6">
              <div className="bg-gray-900 border border-gray-700 rounded-lg p-6">
                <p className="text-white">
                  We've sent password reset instructions to <strong>{email}</strong>
                </p>
                <p className="text-gray-400 mt-2">
                  Check your email and follow the link to reset your password.
                </p>
              </div>
            </div>
          )}

          <div className="text-center">
            <Link 
              to="/login" 
              className="text-gray-400 hover:text-white transition-colors duration-300"
              data-cursor-hover
            >
              ← Back to Sign In
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
