import React from 'react';
import { GlassCard } from '../components/ui/GlassCard';
import { BookOpen, AlertCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const AcademicSummary = ({ data }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
      <GlassCard>
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-bold text-slate-800 flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-primary" />
            Recent Assessment Marks
          </h3>
          <Link to="/performance" className="text-sm text-primary hover:underline font-medium">View All</Link>
        </div>
        
        <div className="space-y-4">
          {data.performance.recentMarks.map((mark, i) => (
            <div key={i} className="flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-slate-50 rounded-xl border border-slate-100">
              <div className="font-medium text-slate-700 mb-2 sm:mb-0">{mark.subject}</div>
              <div className="flex items-center gap-6">
                 <div className="text-sm">
                  <span className="text-slate-500 mr-2">Mid 1:</span>
                  <span className="font-semibold text-slate-800">{mark.midterm1}/30</span>
                </div>
                <div className="text-sm">
                  <span className="text-slate-500 mr-2">Mid 2:</span>
                  <span className="font-semibold text-slate-800">{mark.midterm2}/30</span>
                </div>
                <div className="text-sm font-bold text-primary bg-primary/10 px-3 py-1 rounded-lg">
                  Total: {mark.total}/{mark.max}
                </div>
              </div>
            </div>
          ))}
        </div>
      </GlassCard>

      <GlassCard>
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-bold text-slate-800 flex items-center gap-2">
            <AlertCircle className="w-5 h-5 text-primary" />
            Recent Notifications
          </h3>
          <Link to="/notifications" className="text-sm text-primary hover:underline font-medium">View All</Link>
        </div>
        
        <div className="space-y-4">
          {data.notifications.slice(0, 3).map((notif, i) => (
            <div key={i} className="flex gap-4 p-4 hover:bg-slate-50 rounded-xl transition-colors border border-transparent hover:border-slate-100 cursor-pointer">
              <div className="w-2 h-2 mt-2 rounded-full bg-accent shrink-0"></div>
              <div>
                <h4 className="font-medium text-slate-800 mb-1">{notif.title}</h4>
                <p className="text-sm text-slate-600 mb-2">{notif.description}</p>
                <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">{notif.date}</span>
              </div>
            </div>
          ))}
        </div>
      </GlassCard>
    </div>
  );
};

export default AcademicSummary;
