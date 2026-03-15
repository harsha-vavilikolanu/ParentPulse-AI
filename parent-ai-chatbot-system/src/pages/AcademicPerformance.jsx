import React from 'react';
import { motion } from 'framer-motion';
import { GlassCard } from '../components/ui/GlassCard';
import { useStore } from '../store/useStore';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Award, TrendingUp } from 'lucide-react';

const AcademicPerformance = () => {
  const { studentData } = useStore();

  if (!studentData) return <div className="p-8 text-center text-slate-500">Loading performance data...</div>;

  const data = studentData.performance;
  const historyData = data.semesters.map(s => ({ semester: s.sem, sgpa: s.gpa }));

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="pb-8"
    >
      <div className="mb-8">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-900">Academic Performance</h1>
        <p className="text-slate-500 mt-1">Track CGPA and semester progression.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
        <GlassCard className="lg:col-span-1 bg-gradient-to-br from-primary to-primary/80  text-white border-none flex flex-col justify-center relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-10">
            <Award className="w-32 h-32" />
          </div>
          <div className="relative z-10">
            <h3 className="text-lg font-medium text-white/80 mb-2 tracking-wide">Current CGPA</h3>
            <div className="flex items-baseline gap-2">
              <span className="text-6xl font-black">{data.cgpa}</span>
              <span className="text-xl font-medium text-white/70">/ 10</span>
            </div>
            <div className="mt-6 flex items-center gap-2 text-sm font-medium text-emerald-300 bg-black/20 w-fit px-3 py-1.5 rounded-full">
              <TrendingUp className="w-4 h-4" />
              Top 15% of Batch
            </div>
          </div>
        </GlassCard>

        <GlassCard className="lg:col-span-2">
          <h3 className="text-lg font-bold text-slate-800 mb-6 flex items-center gap-2">
            Historical SGPA Trend
          </h3>
          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={historyData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorSgpa" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#1e3a8a" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#1e3a8a" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                <XAxis dataKey="semester" axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 12}} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 12}} domain={[0, 10]} />
                <Tooltip 
                  contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }} 
                />
                <Area type="monotone" dataKey="sgpa" stroke="#1e3a8a" strokeWidth={3} fillOpacity={1} fill="url(#colorSgpa)" activeDot={{ r: 6, fill: '#d4af37', stroke: '#fff', strokeWidth: 2 }} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </GlassCard>
      </div>
    </motion.div>
  );
};

export default AcademicPerformance;
