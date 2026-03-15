import React from 'react';
import { motion } from 'framer-motion';
import { useStore } from '../store/useStore';
import DashboardCards from '../components/DashboardCards';
import AcademicSummary from '../components/AcademicSummary';

const Dashboard = () => {
  const { user, studentData } = useStore();

  if (!studentData) {
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
        <p className="text-slate-500 mt-1">Welcome back, {user?.name}. Here is an overview of {studentData.name}'s academic progress.</p>
      </div>

      {/* Quick Stats Cards */}
      <DashboardCards data={studentData} />

      {/* Academic Summary & Notifications */}
      <AcademicSummary data={studentData} />

    </motion.div>
  );
};

export default Dashboard;
