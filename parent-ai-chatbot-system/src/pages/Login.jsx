import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Shield, Fingerprint, Activity, Smartphone, User, Loader2 } from 'lucide-react';
import { useStore } from '../store/useStore';
import { GlassCard } from '../components/ui/GlassCard';

const Login = () => {
  const [regNo, setRegNo] = useState('');
  const [phone, setPhone] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  
  const navigate = useNavigate();
  const login = useStore((state) => state.login);

  const handleSendOTP = (e) => {
    e.preventDefault();
    setError('');
    
    if (!regNo || !phone) {
      setError('Please fill in both fields');
      return;
    }

    // Mock validation logic
    if (regNo.length < 8 || phone.length < 10) {
      setError('Invalid Registration Number or Phone Number.');
      return;
    }

    setLoading(true);
    // Simulate API call for OTP
    setTimeout(() => {
      setLoading(false);
      setOtpSent(true);
    }, 1200);
  };

  const handleVerifyOTP = (e) => {
    e.preventDefault();
    setError('');

    if (otp !== '1234') { // Mock OTP validation (use 1234)
      setError('Invalid OTP. Please try again. (Hint: use 1234)');
      return;
    }

    setLoading(true);
    
    // Simulate verification API call
    setTimeout(() => {
      login(regNo, phone);
      navigate('/dashboard');
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col md:flex-row font-sans">
      
      {/* Left side: Branding & Info */}
      <div className="hidden md:flex md:w-1/2 bg-primary relative overflow-hidden p-12 flex-col justify-between">
        
        {/* Subtle mesh background effect - CSS based */}
        <div className="absolute inset-0 opacity-20 pointer-events-none" 
             style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}>
        </div>

        <div className="relative z-10 flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-primary font-bold text-xl shadow-lg">
            VU
          </div>
          <span className="font-bold text-2xl text-white">Vignan University</span>
        </div>

        <div className="relative z-10 my-auto text-white max-w-lg">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Shield className="w-16 h-16 text-accent mb-8" />
            <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-6">
              Secure Parent Portal Access
            </h1>
            <p className="text-lg text-slate-300 mb-8 leading-relaxed">
              Verify your identity to access real-time academic insights, performance tracking, and direct communication regarding your child's progress.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-slate-200">
                <Shield className="w-5 h-5 text-accent" />
                <span>End-to-End Encrypted Sessions</span>
              </div>
              <div className="flex items-center gap-3 text-slate-200">
                <Fingerprint className="w-5 h-5 text-accent" />
                <span>Multi-factor Authentication</span>
              </div>
              <div className="flex items-center gap-3 text-slate-200">
                <Activity className="w-5 h-5 text-accent" />
                <span>Real-time Monitoring</span>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="relative z-10 text-slate-400 text-sm">
          &copy; {new Date().getFullYear()} Vignan's Foundation for Science, Technology & Research.
        </div>
      </div>

      {/* Right side: Login Form */}
      <div className="flex-1 flex items-center justify-center p-6 md:p-12 relative">
        <div className="absolute top-6 right-6 md:hidden">
          <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold text-lg">
            VU
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-md"
        >
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-slate-900 mb-3">Parent Verification</h2>
            <p className="text-slate-600">Please enter your registered details to continue.</p>
          </div>

          <GlassCard className="bg-white/100 border-slate-200 shadow-xl p-8">
            {error && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-600 rounded-lg text-sm text-center">
                {error}
              </div>
            )}

            {!otpSent ? (
               <form onSubmit={handleSendOTP} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Student Registration Number</label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <input 
                      type="text" 
                      value={regNo}
                      onChange={(e) => setRegNo(e.target.value.toUpperCase())}
                      className="input-field pl-12"
                      placeholder="e.g. 21BCE10234"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Parent Registered Phone</label>
                  <div className="relative">
                    <Smartphone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <input 
                      type="tel" 
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="input-field pl-12"
                      placeholder="e.g. 9876543210"
                      required
                    />
                  </div>
                </div>

                <div className="pt-2">
                  <button 
                    type="submit" 
                    className="btn-primary w-full py-3.5 flex items-center justify-center gap-2 text-lg"
                    disabled={loading}
                  >
                    {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : 'Send OTP'}
                  </button>
                </div>
              </form>
            ) : (
              <motion.form 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                onSubmit={handleVerifyOTP} 
                className="space-y-6"
              >
                <div className="bg-slate-50 p-4 rounded-xl mb-6 text-sm text-center text-slate-600 border border-slate-200">
                  OTP sent to <strong>+91 {phone}</strong>
                  <button 
                    type="button" 
                    onClick={() => { setOtpSent(false); setOtp(''); }}
                    className="block w-full text-primary mt-2 hover:underline font-medium"
                  >
                    Change Number
                  </button>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Enter OTP</label>
                  <div className="relative">
                    <Shield className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <input 
                      type="text" 
                      value={otp}
                      onChange={(e) => setOtp(e.target.value)}
                      className="input-field text-center text-2xl tracking-[0.5em] font-semibold pl-12 pb-2.5 pt-3"
                      maxLength={4}
                      placeholder="••••"
                      autoFocus
                      required
                    />
                  </div>
                  <p className="text-xs text-slate-500 mt-2 text-center">For demo purposes, use 1234</p>
                </div>

                <div className="pt-2">
                  <button 
                    type="submit" 
                    className="btn-primary w-full py-3.5 flex items-center justify-center gap-2 text-lg"
                    disabled={loading}
                  >
                     {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : 'Verify & Login'}
                  </button>
                </div>
              </motion.form>
            )}
          </GlassCard>

          <p className="text-center text-sm text-slate-500 mt-8">
            Having trouble logging in? <a href="#" className="text-primary hover:underline font-medium">Contact University Support</a>
          </p>
        </motion.div>
      </div>

    </div>
  );
};

export default Login;
