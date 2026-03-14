import React from 'react';
import { Home, BarChart2, BookOpen, CreditCard, Users, Settings, LogOut } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { authService } from '../services/authService';

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    authService.logout();
    navigate('/login');
  };

  const navItems = [
    { label: 'Dashboard', path: '/dashboard', icon: <Home /> },
    { label: 'Academic Performance', path: '/performance', icon: <BarChart2 /> },
    { label: 'Attendance', path: '/attendance', icon: <BookOpen /> },
    { label: 'Fee Status', path: '/fees', icon: <CreditCard /> },
    { label: 'Faculty Contacts', path: '/faculty', icon: <Users /> },
    { label: 'AI Assistant', path: '/chatbot', icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 8V4H8"/><rect width="16" height="12" x="4" y="8" rx="2"/><path d="M2 14h2"/><path d="M20 14h2"/><path d="M15 13v2"/><path d="M9 13v2"/></svg> },
    { label: 'Settings', path: '/settings', icon: <Settings /> },
  ];

  return (
    <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
      <div className="sidebar-header">
        {/* Placeholder for Vignan Logo in Sidebar */}
        <div style={{ width: '40px', height: '40px', background: 'var(--accent-gold)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', color: 'var(--primary-dark-blue)' }}>
          VU
        </div>
        <span className="sidebar-title">Parent Portal</span>
      </div>

      <nav className="sidebar-nav">
        {navItems.map((item) => (
          <Link 
            key={item.path} 
            to={item.path} 
            className={`nav-item ${location.pathname === item.path ? 'active' : ''}`}
            onClick={() => { if(window.innerWidth <= 1024) toggleSidebar() }}
          >
            {item.icon}
            <span>{item.label}</span>
          </Link>
        ))}
      </nav>

      <div style={{ padding: '24px', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
        <button 
          onClick={handleLogout}
          className="nav-item" 
          style={{ width: '100%', border: 'none', background: 'none', cursor: 'pointer' }}
        >
          <LogOut />
          <span>Logout</span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
