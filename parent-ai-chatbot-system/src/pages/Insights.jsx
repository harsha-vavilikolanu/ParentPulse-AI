import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { GlassCard } from '../components/ui/GlassCard';
import { mockStudentData } from '../data/mockData';
import { Lightbulb, TrendingUp, AlertCircle, ArrowUpCircle, Sparkles } from 'lucide-react';

const Insights = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setData(mockStudentData.insights);
    }, 400);
  }, []);

  if (!data) return <div className="p-8 text-center text-slate-500">Loading AI Insights...</div>;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="pb-8"
    >
      <div className="mb-8">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-900 flex items-center gap-3">
          <Sparkles className="w-7 h-7 text-accent" />
          AI Performance Insights
        </h1>
        <p className="text-slate-500 mt-2">Machine learning generated insights based on historical academic data.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <GlassCard className="border-t-4 border-t-emerald-500">
          <h3 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-emerald-500" />
            Areas of Strength
          </h3>
          <ul className="space-y-3">
            {data.strongSubjects.map((subject, idx) => (
              <li key={idx} className="flex items-center gap-3 p-3 bg-emerald-50 rounded-lg text-emerald-800 font-medium">
                <ArrowUpCircle className="w-5 h-5 text-emerald-600" />
                {subject}
              </li>
            ))}
          </ul>
        </GlassCard>

        <GlassCard className="border-t-4 border-t-red-500">
          <h3 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
            <AlertCircle className="w-5 h-5 text-red-500" />
            Areas for Improvement
          </h3>
          <ul className="space-y-3">
            {data.weakSubjects.map((subject, idx) => (
              <li key={idx} className="flex items-center gap-3 p-3 bg-red-50 rounded-lg text-red-800 font-medium">
                <AlertCircle className="w-5 h-5 text-red-600" />
                {subject}
              </li>
            ))}
          </ul>
        </GlassCard>
      </div>

      <GlassCard className="bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
        <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
          <Lightbulb className="w-6 h-6 text-accent" />
          Recommended Actions
        </h3>
        <div className="space-y-4">
          {data.suggestions.map((suggestion, idx) => (
            <div key={idx} className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold shrink-0 mt-0.5">
                {idx + 1}
              </div>
              <p className="text-slate-700 leading-relaxed text-lg">{suggestion}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-8 text-center border-t border-slate-200/50 pt-6">
          <p className="text-sm text-slate-500 mb-4">Want more specific advice or have questions about these insights?</p>
          <button className="btn-primary px-6 py-3 shadow-lg flex items-center mx-auto gap-2">
            <Sparkles className="w-4 h-4" /> Ask AI Chatbot Now
          </button>
        </div>
      </GlassCard>
    </motion.div>
  );
};

export default Insights;
