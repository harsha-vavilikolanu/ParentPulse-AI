import React from 'react';
import { Menu, Bell, User, LogOut } from 'lucide-react';
import { useStore } from '../../store/useStore';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const { toggleSidebar, user, logout } = useStore();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <header className="sticky top-0 z-30 w-full h-16 glass-card rounded-none border-x-0 border-t-0 flex items-center justify-between px-4 md:px-6">
      <div className="flex items-center gap-4">
        <button 
          onClick={toggleSidebar}
          className="p-2 md:hidden rounded-lg hover:bg-slate-100 text-slate-600 transition-colors"
        >
          <Menu className="w-6 h-6" />
        </button>
        <div className="flex items-center gap-2">
          {/* Logo Placeholder */}
          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white font-bold text-sm">
            VU
          </div>
          <span className="font-bold text-xl text-primary hidden sm:block">
            Vignan Parent Portal
          </span>
        </div>
      </div>

      <div className="flex items-center gap-4">
        {user && (
          <>
            <button className="p-2 rounded-full hover:bg-slate-100 text-slate-600 transition-colors relative">
              <Bell className="w-5 h-5" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
            </button>
            <div className="hidden md:flex flex-col items-end mr-2">
              <span className="text-sm font-semibold text-slate-800">{user.name}</span>
              <span className="text-xs text-slate-500">Parent of {user.studentRegNo}</span>
            </div>
            <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center text-white">
              <User className="w-5 h-5" />
            </div>
            <button 
              onClick={handleLogout}
              className="p-2 rounded-full hover:bg-red-50 text-red-600 transition-colors ml-2 hidden sm:flex items-center gap-2"
              title="Logout"
            >
              <LogOut className="w-5 h-5" />
            </button>
          </>
        )}
      </div>
    </header>
  );
};

export default Navbar;
