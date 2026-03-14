import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { GlassCard } from '../components/ui/GlassCard';
import { useStore } from '../store/useStore';
import { mockStudentData } from '../data/mockData';
import { CalendarClock, AlertTriangle } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const Attendance = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Simulate loading data
    setTimeout(() => {
      setData(mockStudentData.attendance);
    }, 400);
  }, []);

  if (!data) return <div className="p-8 text-center text-slate-500">Loading attendance data...</div>;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="pb-8"
    >
      <div className="mb-8">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-900">Attendance Tracker</h1>
        <p className="text-slate-500 mt-1">Detailed view of subject-wise and overall attendance percentage.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <GlassCard className="col-span-1 border-t-4 border-t-primary flex flex-col justify-center items-center py-8">
          <CalendarClock className="w-12 h-12 text-primary mb-4" />
          <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wide">Overall Attendance</h3>
          <div className="relative w-32 h-32 mt-4 flex items-center justify-center">
            {/* Simple CSS Circular Progress */}
            <svg className="w-32 h-32 transform -rotate-90">
              <circle cx="64" cy="64" r="56" stroke="currentColor" strokeWidth="12" fill="transparent" className="text-slate-100" />
              <circle 
                cx="64" cy="64" r="56" 
                stroke="currentColor" 
                strokeWidth="12" 
                fill="transparent" 
                strokeDasharray="351.8" 
                strokeDashoffset={351.8 - (351.8 * data.overall) / 100} 
                className={`transition-all duration-1000 ${data.overall >= 75 ? 'text-primary' : 'text-red-500'}`} 
              />
            </svg>
            <span className="absolute text-3xl font-bold text-slate-800">{data.overall}%</span>
          </div>
          <p className="text-slate-500 text-sm mt-4 text-center px-4">
            {data.overall >= 75 ? "Excellent! You are maintaining good attendance." : "Warning: Your attendance is below the 75% minimum requirement."}
          </p>
        </GlassCard>

        <GlassCard className="col-span-1 md:col-span-2">
          <h3 className="text-lg font-bold text-slate-800 mb-6 flex items-center gap-2">
            Semester-wise History
          </h3>
          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data.history} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                <XAxis dataKey="semester" axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 12}} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 12}} domain={[0, 100]} />
                <Tooltip 
                  cursor={{fill: '#f1f5f9'}} 
                  contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }} 
                />
                <Bar dataKey="percentage" radius={[4, 4, 0, 0]} maxBarSize={40}>
                  {data.history.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.percentage >= 75 ? '#1e3a8a' : '#ef4444'} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </GlassCard>
      </div>

      <h3 className="text-xl font-bold text-slate-900 mb-4">Subject-wise Details</h3>
      
      {data.subjects.some(sub => sub.warning) && (
        <div className="bg-red-50 border border-red-200 rounded-xl p-4 mb-6 flex items-start gap-4 shadow-sm">
          <AlertTriangle className="w-6 h-6 text-red-500 shrink-0 mt-0.5" />
          <div>
            <h4 className="font-semibold text-red-800">Low Attendance Warning</h4>
            <p className="text-red-600 text-sm mt-1">One or more subjects have attendance below the 75% threshold. Please improve attendance to avoid being debarred from examinations.</p>
          </div>
        </div>
      )}

      <div className="space-y-4">
        {data.subjects.map((sub, idx) => (
          <GlassCard key={idx} className="p-4 sm:p-5">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-1">
                  <h4 className="font-bold text-slate-800 text-lg">{sub.name}</h4>
                  <span className="bg-slate-100 text-slate-600 text-xs font-semibold px-2 py-1 rounded">
                    {sub.code}
                  </span>
                  {sub.warning && <span className="bg-red-100 text-red-600 text-xs font-semibold px-2 py-1 rounded-full flex items-center gap-1"><AlertTriangle className="w-3 h-3"/> Low</span>}
                </div>
                <p className="text-slate-500 text-sm">
                  Classes Attended: <strong className="text-slate-700">{sub.classesAttended}</strong> / {sub.totalClasses}
                </p>
              </div>
              
              <div className="w-full md:w-1/3 flex items-center gap-4">
                <div className="flex-1 bg-slate-100 h-3 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${sub.percentage}%` }}
                    transition={{ duration: 1, delay: 0.2 + (idx * 0.1) }}
                    className={`h-full rounded-full ${sub.percentage >= 75 ? 'bg-primary' : 'bg-red-500'}`}
                  ></motion.div>
                </div>
                <span className={`font-bold w-12 text-right ${sub.percentage >= 75 ? 'text-primary' : 'text-red-500'}`}>
                  {sub.percentage}%
                </span>
              </div>
            </div>
          </GlassCard>
        ))}
      </div>
    </motion.div>
  );
};

export default Attendance;
