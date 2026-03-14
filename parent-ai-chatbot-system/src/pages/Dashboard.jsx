import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useStore } from '../store/useStore';
import { mockStudentData } from '../data/mockData';
import { GlassCard } from '../components/ui/GlassCard';
import DashboardCards from '../components/DashboardCards';
import AcademicSummary from '../components/AcademicSummary';
import { MapPin, Mail, Calendar, User } from 'lucide-react';

const Dashboard = () => {
  const { user } = useStore();
  const [data, setData] = useState(null);

  useEffect(() => {
    // Simulate data fetching
    setTimeout(() => {
      setData(mockStudentData);
    }, 500);
  }, []);

  if (!data) {
    return (
      <div className="flex items-center justify-center h-[60vh]">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="pb-8"
    >
      <div className="mb-8">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-900">Dashboard Overview</h1>
        <p className="text-slate-500 mt-1">Welcome back, {user?.name}. Here is an overview of {data.profile.name}'s academic progress.</p>
      </div>

      {/* Student Profile Overview Card */}
      <GlassCard className="mb-8 bg-gradient-to-r from-primary to-primary/90 text-white border-none shadow-xl">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6 relative">
          
          <img 
            src={data.profile.photo} 
            alt="Student" 
            className="w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-white/20 shadow-lg object-cover"
          />
          
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">{data.profile.name}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-4 text-sm text-slate-100 font-medium">
              <div className="flex flex-col gap-1">
                <span className="text-white/60 text-xs uppercase tracking-wider">Reg No</span>
                <span className="flex items-center justify-center md:justify-start gap-2"><User className="w-4 h-4"/>{data.profile.regNo}</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-white/60 text-xs uppercase tracking-wider">Course</span>
                <span className="flex items-center justify-center md:justify-start gap-2"><MapPin className="w-4 h-4"/>{data.profile.course}</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-white/60 text-xs uppercase tracking-wider">Year/Sem</span>
                <span className="flex items-center justify-center md:justify-start gap-2"><Calendar className="w-4 h-4"/>{data.profile.year}, {data.profile.semester}</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-white/60 text-xs uppercase tracking-wider">Email</span>
                <span className="flex items-center justify-center md:justify-start gap-2"><Mail className="w-4 h-4"/>{data.profile.email}</span>
              </div>
            </div>
          </div>
          
          <div className="absolute top-0 right-0 hidden lg:block opacity-20">
            <svg width="150" height="150" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M0 100C0 44.7715 44.7715 0 100 0V100H0Z" fill="currentColor"/>
            </svg>
          </div>
        </div>
      </GlassCard>

      {/* Quick Stats Cards */}
      <DashboardCards data={data} />

      {/* Academic Summary & Notifications */}
      <AcademicSummary data={data} />

    </motion.div>
  );
};

export default Dashboard;
