import React from 'react';
import { Menu, User, Moon, Sun } from 'lucide-react';
import NotificationBell from './NotificationBell';
import { useNavigate } from 'react-router-dom';

const Navbar = ({ toggleSidebar, studentData }) => {
  const navigate = useNavigate();

  return (
    <header className="dashboard-nav">
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        <button 
          onClick={toggleSidebar} 
          style={{ display: window.innerWidth <= 1024 ? 'block' : 'none', color: 'var(--primary-dark-blue)' }}
        >
          <Menu size={24} />
        </button>
        <h1 className="dashboard-title">Overview</h1>
      </div>

      <div className="nav-actions">
        {/* Placeholder for Dark Mode Toggle */}
        <button className="notification-wrapper" aria-label="Toggle Theme">
          <Moon size={20} />
        </button>

        {studentData && <NotificationBell regNo={studentData.regNo} />}

        <div className="user-profile" onClick={() => navigate('/settings')}>
          <div style={{ textAlign: 'right', display: window.innerWidth > 768 ? 'block' : 'none' }}>
            <div style={{ fontSize: '0.9rem', fontWeight: 'bold', color: 'var(--primary-dark-blue)' }}>
              Parent of {studentData?.name || 'Student'}
            </div>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
              {studentData?.regNo || 'Reg No'}
            </div>
          </div>
          <div className="avatar">
            <User size={20} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
