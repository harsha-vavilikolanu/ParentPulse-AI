import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { GlassCard } from '../components/ui/GlassCard';
import { mockStudentData } from '../data/mockData';
import { Bell, FileText, IndianRupee, AlertTriangle, CalendarRange, Clock } from 'lucide-react';

const Notifications = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setData(mockStudentData.notifications);
    }, 400);
  }, []);

  if (!data) return <div className="p-8 text-center text-slate-500">Loading notifications...</div>;

  const getIcon = (type) => {
    switch(type) {
      case 'exam': return <FileText className="w-5 h-5 text-indigo-600" />;
      case 'fee': return <IndianRupee className="w-5 h-5 text-amber-600" />;
      case 'attendance': return <AlertTriangle className="w-5 h-5 text-red-600" />;
      case 'academic': return <CalendarRange className="w-5 h-5 text-primary" />;
      default: return <Bell className="w-5 h-5 text-slate-600" />;
    }
  };

  const getBgColor = (type) => {
    switch(type) {
      case 'exam': return 'bg-indigo-100';
      case 'fee': return 'bg-amber-100';
      case 'attendance': return 'bg-red-100';
      case 'academic': return 'bg-blue-100';
      default: return 'bg-slate-100';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="pb-8 max-w-4xl mx-auto"
    >
      <div className="mb-8 flex items-end justify-between border-b border-slate-200 pb-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-slate-900 flex items-center gap-3">
            <Bell className="w-7 h-7 text-primary" />
            University Notifications
          </h1>
          <p className="text-slate-500 mt-2">Stay updated with academic alerts, exams, and fee reminders.</p>
        </div>
        <button className="text-sm font-medium text-primary hover:underline hidden md:block">Mark all as read</button>
      </div>

      <div className="space-y-4">
        {data.map((notif, idx) => (
          <GlassCard key={idx} className="p-0 overflow-hidden hover:shadow-lg transition-shadow">
            <div className="flex items-start p-5 sm:p-6 relative">
              {idx === 0 && <div className="absolute top-0 right-0 w-2 h-2 rounded-full bg-red-500 m-4"></div>}
              
              <div className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 mr-5 ${getBgColor(notif.type)}`}>
                {getIcon(notif.type)}
              </div>
              
              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-1 gap-2 sm:gap-0">
                  <h3 className="text-lg font-bold text-slate-800">{notif.title}</h3>
                  <span className="flex items-center text-xs font-semibold text-slate-400 bg-slate-100 px-2.5 py-1 rounded-md shrink-0">
                    <Clock className="w-3 h-3 mr-1" />
                    {notif.date}
                  </span>
                </div>
                
                <p className="text-slate-600 leading-relaxed max-w-2xl">{notif.description}</p>
                
                {notif.type === 'fee' && (
                  <button className="mt-4 text-sm font-semibold text-primary bg-primary/5 hover:bg-primary/10 px-4 py-2 rounded-lg transition-colors">
                    Pay Now
                  </button>
                )}
                {notif.type === 'exam' && (
                  <button className="mt-4 text-sm font-semibold text-primary bg-primary/5 hover:bg-primary/10 px-4 py-2 rounded-lg transition-colors">
                    View Timetable
                  </button>
                )}
              </div>
            </div>
          </GlassCard>
        ))}
      </div>
    </motion.div>
  );
};

export default Notifications;
