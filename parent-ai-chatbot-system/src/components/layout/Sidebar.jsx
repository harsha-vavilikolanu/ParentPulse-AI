import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  LayoutDashboard, 
  CalendarCheck, 
  GraduationCap, 
  TrendingUp, 
  Wallet, 
  BellRing, 
  Users, 
  Lightbulb,
  BotMessageSquare
} from 'lucide-react';
import { useStore } from '../../store/useStore';
import clsx from 'clsx';

const Sidebar = () => {
  const { closeSidebar } = useStore();

  const navItems = [
    { name: 'Overview', path: '/dashboard', icon: <LayoutDashboard className="w-5 h-5" /> },
    { name: 'Attendance', path: '/attendance', icon: <CalendarCheck className="w-5 h-5" /> },
    { name: 'Academic Status', path: '/academic-status', icon: <GraduationCap className="w-5 h-5" /> },
    { name: 'Performance', path: '/performance', icon: <TrendingUp className="w-5 h-5" /> },
    { name: 'Finance', path: '/finance', icon: <Wallet className="w-5 h-5" /> },
    { name: 'Notifications', path: '/notifications', icon: <BellRing className="w-5 h-5" /> },
    { name: 'Faculty Contacts', path: '/contacts', icon: <Users className="w-5 h-5" /> },
    { name: 'Insights', path: '/insights', icon: <Lightbulb className="w-5 h-5" /> },
    { name: 'AI Assistant', path: '/chatbot', icon: <BotMessageSquare className="w-5 h-5 text-accent" /> },
  ];

  return (
    <div className="flex flex-col h-full bg-primary/95 text-white p-4">
      <div className="mb-8 px-2 hidden md:block">
        <h2 className="text-xl font-bold text-white tracking-wide">Menu</h2>
        <div className="h-1 w-10 bg-accent mt-2 rounded"></div>
      </div>
      
      <nav className="flex-1 space-y-2 overflow-y-auto pr-2 pb-20">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            onClick={closeSidebar}
            className={({ isActive }) => clsx(
              "flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 font-medium",
              isActive 
                ? "bg-white/20 text-white shadow-inner border border-white/10" 
                : "text-slate-300 hover:bg-white/10 hover:text-white"
            )}
          >
            {item.icon}
            <span>{item.name}</span>
          </NavLink>
        ))}
      </nav>
      
      <div className="mt-auto pt-4 border-t border-white/10 text-xs text-center text-slate-400">
        <p>&copy; {new Date().getFullYear()} Vignan University</p>
      </div>
    </div>
  );
};

export default Sidebar;
