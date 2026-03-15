import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck, BarChart3, Bot, CalendarClock } from 'lucide-react';
import Footer from '../components/layout/Footer';
import { HeroCanvas } from '../components/ui/HeroCanvas';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans overflow-x-hidden">
      {/* Navbar for Landing */}
      <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 md:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
             <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold text-lg">
              <img src="/src/assets/vignanlogo.png" alt="Vignan Logo" className="w-10 h-10 rounded-full object-cover" />
            </div>
            <span className="font-bold text-2xl text-primary tracking-tight">Vignan University</span>
          </div>
          <button 
            onClick={() => navigate('/login')}
            className="btn-primary px-6 py-2.5 rounded-full"
          >
            Parent Login
          </button>
        </div>
      </header>


      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-4 flex-1 flex items-center justify-center min-h-[90vh]">
        <HeroCanvas />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-7xl font-extrabold text-slate-900 tracking-tight leading-tight mb-6"
          >
            Stay Connected to Your <br />
            <span className="text-primary">Child's Academic Journey</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-slate-600 mb-10 max-w-2xl mx-auto"
          >
            Real-time insights, performance tracking, and direct communication through our intelligent admin portal.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <button 
              onClick={() => navigate('/login')}
              className="btn-primary text-lg px-8 py-4 rounded-full inline-flex items-center gap-2 group"
            >
              Access Portal
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Comprehensive Academic Oversight</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">Everything you need to support your child's education at Vignan University, all in one secure place.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <BarChart3 className="w-8 h-8 text-primary" />, title: "Performance", desc: "Track grades, CGPA, and subject-wise performance in real-time." },
              { icon: <CalendarClock className="w-8 h-8 text-primary" />, title: "Attendance", desc: "Monitor daily attendance and receive automated alerts for shortfalls." },
              { icon: <Bot className="w-8 h-8 text-primary" />, title: "AI Chatbot", desc: "Ask questions and get instant answers about your child's data." },
              { icon: <ShieldCheck className="w-8 h-8 text-primary" />, title: "Secure Access", desc: "Bank-grade security with OTP verification and encrypted sessions." }
            ].map((feature, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-slate-50 border border-slate-100 p-8 rounded-2xl hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
