import React from 'react';
import { motion } from 'framer-motion';
import { GlassCard } from '../components/ui/GlassCard';
import { useStore } from '../store/useStore';
import { AlertCircle, CheckCircle2 } from 'lucide-react';

const AcademicStatus = () => {
  const { studentData } = useStore();

  if (!studentData) return <div className="p-8 text-center text-slate-500">Loading status...</div>;

  const data = studentData.performance;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="pb-8"
    >
      <div className="mb-8">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-900">Academic Status</h1>
        <p className="text-slate-500 mt-1">Review backlog status and overall progress.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <GlassCard className="flex flex-col items-center justify-center p-6 text-center">
          <div className="p-3 bg-red-50 rounded-full mb-4">
            <AlertCircle className="w-8 h-8 text-red-500" />
          </div>
          <h3 className="text-4xl font-black text-slate-800 mb-1">{data.backlogs}</h3>
          <p className="text-slate-500 font-medium font-sm">Active Backlogs</p>
        </GlassCard>
      </div>

      <div>
        <GlassCard>
          <h3 className="text-xl font-bold text-slate-900 mb-6">Active Backlog Details</h3>
          {data.backlogSubjects.length > 0 ? (
            <div className="space-y-4">
              {data.backlogSubjects.map((subject, idx) => (
                <div key={idx} className="flex items-center justify-between p-4 bg-slate-50 rounded-xl border border-slate-200">
                  <div>
                    <h4 className="font-bold text-slate-800">{subject}</h4>
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
    </motion.div>
  );
};

export default AcademicStatus;
