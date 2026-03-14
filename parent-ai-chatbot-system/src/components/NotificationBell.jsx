import React, { useState, useEffect } from 'react';
import { Bell } from 'lucide-react';
import { mockStudentData } from '../data/mockStudentData';

const NotificationBell = ({ regNo }) => {
  const [notifications, setNotifications] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  
  useEffect(() => {
    // In a real app, this would be an API call
    const student = mockStudentData[regNo] || Object.values(mockStudentData)[0];
    if (student && student.notifications) {
      setNotifications(student.notifications);
    }
  }, [regNo]);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const getAlertColor = (type) => {
    switch(type) {
      case 'danger': return 'var(--danger-red)';
      case 'warning': return 'var(--warning-orange)';
      case 'alert': return 'var(--accent-gold)';
      default: return 'var(--accent-sky-blue)';
    }
  };

  return (
    <div style={{ position: 'relative' }}>
      <button 
        className="notification-wrapper" 
        onClick={toggleDropdown}
        aria-label="Notifications"
      >
        <Bell size={24} />
        {notifications.length > 0 && (
          <span className="notification-badge">{notifications.length}</span>
        )}
      </button>

      {isOpen && (
        <div style={{
          position: 'absolute',
          top: '120%',
          right: 0,
          width: '320px',
          backgroundColor: 'white',
          borderRadius: '12px',
          boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
          zIndex: 1000,
          border: '1px solid #e2e8f0',
          overflow: 'hidden'
        }}>
          <div style={{ padding: '16px', borderBottom: '1px solid #e2e8f0', fontWeight: 'bold', color: 'var(--primary-dark-blue)' }}>
            Notifications
          </div>
          <div style={{ maxHeight: '300px', overflowY: 'auto' }}>
            {notifications.length === 0 ? (
              <div style={{ padding: '24px', textAlign: 'center', color: 'var(--text-muted)' }}>
                No new notifications
              </div>
            ) : (
              notifications.map(note => (
                <div key={note.id} style={{ 
                  padding: '16px', 
                  borderBottom: '1px solid #f1f5f9',
                  borderLeft: `4px solid ${getAlertColor(note.type)}`,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '4px'
                }}>
                  <span style={{ fontSize: '0.9rem', color: 'var(--text-main)' }}>{note.text}</span>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{note.date}</span>
                </div>
              ))
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default NotificationBell;
