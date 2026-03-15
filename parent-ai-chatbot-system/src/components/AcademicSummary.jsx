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
            Semester Performance
          </h3>
          <Link to="/performance" className="text-sm text-primary hover:underline font-medium">View All</Link>
        </div>
        
        <div className="space-y-4">
          {data.performance.semesters.map((sem, i) => (
            <div key={i} className="flex items-center justify-between p-4 bg-slate-50 rounded-xl border border-slate-100">
              <div className="font-medium text-slate-700">{sem.sem}</div>
              <div className="text-sm font-bold text-primary bg-primary/10 px-3 py-1 rounded-lg">
                GPA: {sem.gpa}
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
              <div className={`w-2 h-2 mt-2 rounded-full ${notif.type === 'success' ? 'bg-emerald-500' : notif.type === 'warning' ? 'bg-amber-500' : notif.type === 'alert' ? 'bg-red-500' : 'bg-sky-500'} shrink-0`}></div>
              <div>
                <p className="text-sm text-slate-600 mb-2">{notif.text}</p>
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
