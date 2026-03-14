import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { GlassCard } from '../components/ui/GlassCard';
import { mockStudentData } from '../data/mockData';
import { AlertCircle, CheckCircle2, RotateCcw, HelpCircle } from 'lucide-react';

const AcademicStatus = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setData(mockStudentData.academicStatus);
    }, 400);
  }, []);

  if (!data) return <div className="p-8 text-center text-slate-500">Loading status...</div>;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="pb-8"
    >
      <div className="mb-8">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-900">Academic Status</h1>
        <p className="text-slate-500 mt-1">Review backlog status, completed credits, and overall progress.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <GlassCard className="flex flex-col items-center justify-center p-6 text-center">
          <div className="p-3 bg-red-50 rounded-full mb-4">
            <AlertCircle className="w-8 h-8 text-red-500" />
          </div>
          <h3 className="text-4xl font-black text-slate-800 mb-1">{data.backlogs.active}</h3>
          <p className="text-slate-500 font-medium font-sm">Active Backlogs</p>
        </GlassCard>

        <GlassCard className="flex flex-col items-center justify-center p-6 text-center">
          <div className="p-3 bg-emerald-50 rounded-full mb-4">
            <CheckCircle2 className="w-8 h-8 text-emerald-600" />
          </div>
          <h3 className="text-4xl font-black text-slate-800 mb-1">{data.backlogs.cleared}</h3>
          <p className="text-slate-500 font-medium font-sm">Cleared Backlogs</p>
        </GlassCard>

        <GlassCard className="flex flex-col items-center justify-center p-6 text-center">
          <div className="p-3 bg-amber-50 rounded-full mb-4">
            <RotateCcw className="w-8 h-8 text-amber-500" />
          </div>
          <h3 className="text-4xl font-black text-slate-800 mb-1">{data.repeatedSubjects}</h3>
          <p className="text-slate-500 font-medium font-sm">Repeated Subjects</p>
        </GlassCard>

        <GlassCard className="flex flex-col items-center justify-center p-6 text-center">
          <div className="p-3 bg-indigo-50 rounded-full mb-4">
            <HelpCircle className="w-8 h-8 text-indigo-500" />
          </div>
          <h3 className="text-4xl font-black text-slate-800 mb-1">{data.incompleteSubjects}</h3>
          <p className="text-slate-500 font-medium font-sm">Incomplete Subjects</p>
        </GlassCard>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <GlassCard>
            <h3 className="text-xl font-bold text-slate-900 mb-6">Active Backlog Details</h3>
            {data.activeBacklogDetails.length > 0 ? (
              <div className="space-y-4">
                {data.activeBacklogDetails.map((subject, idx) => (
                  <div key={idx} className="flex items-center justify-between p-4 bg-slate-50 rounded-xl border border-slate-200">
                    <div>
                      <h4 className="font-bold text-slate-800">{subject.name}</h4>
                      <p className="text-sm text-slate-500">Code: <span className="font-semibold">{subject.code}</span> • Failed in: <span className="font-semibold">{subject.semester}</span></p>
                    </div>
                    <button className="btn-outline px-4 py-2 text-sm bg-white">
                      Register Remit
                    </button>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center p-12 bg-emerald-50 rounded-xl border border-emerald-100">
                <CheckCircle2 className="w-12 h-12 text-emerald-500 mx-auto mb-3" />
                <h4 className="text-lg font-bold text-emerald-800">All Clear!</h4>
                <p className="text-emerald-600">No active backlogs to display.</p>
              </div>
            )}
          </GlassCard>
        </div>

        <div className="lg:col-span-1">
          <GlassCard className="h-full flex flex-col justify-center text-center">
            <h3 className="text-lg font-bold text-slate-800 mb-8">Degree Progress</h3>
            
            <div className="relative w-48 h-48 mx-auto flex items-center justify-center">
              <svg className="w-48 h-48 transform -rotate-90">
                <circle cx="96" cy="96" r="80" stroke="currentColor" strokeWidth="16" fill="transparent" className="text-slate-100" />
                <circle 
                  cx="96" cy="96" r="80" 
                  stroke="currentColor" 
                  strokeWidth="16" 
                  fill="transparent" 
                  strokeDasharray="502.6" 
                  strokeDashoffset={502.6 - (502.6 * data.courseCompletion) / 100} 
                  className="text-primary transition-all duration-1000" 
                  strokeLinecap="round"
                />
              </svg>
              <div className="absolute flex flex-col items-center justify-center">
                <span className="text-4xl font-extrabold text-slate-800">{data.courseCompletion}%</span>
                <span className="text-xs font-semibold text-slate-500 uppercase tracking-widest mt-1">Completed</span>
              </div>
            </div>
            
            <p className="text-slate-500 text-sm mt-8 px-4">
              Estimated graduation in May 2025. Keep up the good work!
            </p>
          </GlassCard>
        </div>
      </div>
    </motion.div>
  );
};

export default AcademicStatus;
