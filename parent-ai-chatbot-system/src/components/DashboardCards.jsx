import React from 'react';
import { GlassCard } from '../components/ui/GlassCard';
import { ArrowUpRight, TrendingUp, CalendarClock, AlertCircle } from 'lucide-react';

const DashboardCards = ({ data }) => {
  const cards = [
    {
      title: "Current CGPA",
      value: data.performance.cgpa,
      subtitle: "Out of 10.0",
      icon: <TrendingUp className="w-6 h-6 text-accent" />,
      color: "bg-primary/5",
      trend: "+0.1 from last sem",
      trendPositive: true
    },
    {
      title: "Overall Attendance",
      value: `${data.attendance.overall}%`,
      subtitle: "Minimum required: 75%",
      icon: <CalendarClock className="w-6 h-6 text-emerald-600" />,
      color: "bg-emerald-50",
      trend: "Above average",
      trendPositive: true
    },
    {
      title: "Active Backlogs",
      value: data.performance.backlogs,
      subtitle: "",
      icon: <AlertCircle className="w-6 h-6 text-red-500" />,
      color: "bg-red-50",
      trend: "Action required",
      trendPositive: false
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
      {cards.map((card, index) => (
        <GlassCard key={index} className={`border-l-4 ${card.trendPositive ? 'border-l-accent' : 'border-l-red-500'}`}>
          <div className="flex justify-between items-start mb-4">
            <div>
              <p className="text-slate-500 text-sm font-medium">{card.title}</p>
              <h3 className="text-3xl font-bold text-slate-800 mt-1">{card.value}</h3>
            </div>
            <div className={`p-3 rounded-xl ${card.color}`}>
              {card.icon}
            </div>
          </div>
          <div className="flex items-center justify-between mt-4 text-sm">
            <span className="text-slate-500">{card.subtitle}</span>
            <span className={`flex items-center gap-1 font-medium ${card.trendPositive ? 'text-emerald-600' : 'text-red-500'}`}>
              <ArrowUpRight className="w-4 h-4" />
              {card.trend}
            </span>
          </div>
        </GlassCard>
      ))}
    </div>
  );
};

export default DashboardCards;
