import React, { useState } from 'react';
import { Users, BookOpen, Bell, Search, Edit } from 'lucide-react';
import { mockStudentData } from '../data/mockStudentData';

const AdminPanel = () => {
  const [activeTab, setActiveTab] = useState('students');
  const [searchTerm, setSearchTerm] = useState('');
  
  const students = Object.values(mockStudentData);
  const filteredStudents = students.filter(s => 
    s.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    s.regNo.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={{ minHeight: '100vh', background: 'var(--background-light-gray)' }}>
      {/* Admin Header */}
      <header style={{ background: 'var(--primary-dark-blue)', color: 'white', padding: '20px 48px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div style={{ background: 'var(--accent-gold)', color: 'var(--primary-dark-blue)', padding: '8px', borderRadius: '8px', fontWeight: 'bold' }}>VU Admin</div>
          <h1 style={{ fontSize: '1.2rem', margin: 0 }}>Vignan Portal Administration</h1>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <span style={{ fontSize: '0.9rem' }}>Admin User</span>
          <div style={{ width: '40px', height: '40px', background: 'white', color: 'var(--primary-dark-blue)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>A</div>
        </div>
      </header>

      <div style={{ display: 'flex', height: 'calc(100vh - 80px)' }}>
        {/* Admin Sidebar */}
        <aside style={{ width: '250px', background: 'white', borderRight: '1px solid #e2e8f0', padding: '24px 0' }}>
          <nav style={{ display: 'flex', flexDirection: 'column' }}>
            <button 
              style={{ padding: '16px 24px', display: 'flex', alignItems: 'center', gap: '12px', textAlign: 'left', background: activeTab === 'students' ? 'rgba(94, 178, 241, 0.1)' : 'transparent', color: activeTab === 'students' ? 'var(--primary-dark-blue)' : 'var(--text-muted)', borderRight: activeTab === 'students' ? '4px solid var(--accent-sky-blue)' : 'none', fontWeight: activeTab === 'students' ? 600 : 400 }}
              onClick={() => setActiveTab('students')}
            >
              <Users size={20} /> Manage Students
            </button>
            <button 
              style={{ padding: '16px 24px', display: 'flex', alignItems: 'center', gap: '12px', textAlign: 'left', background: activeTab === 'academic' ? 'rgba(94, 178, 241, 0.1)' : 'transparent', color: activeTab === 'academic' ? 'var(--primary-dark-blue)' : 'var(--text-muted)', borderRight: activeTab === 'academic' ? '4px solid var(--accent-sky-blue)' : 'none', fontWeight: activeTab === 'academic' ? 600 : 400 }}
              onClick={() => setActiveTab('academic')}
            >
              <BookOpen size={20} /> Update Academics
            </button>
            <button 
              style={{ padding: '16px 24px', display: 'flex', alignItems: 'center', gap: '12px', textAlign: 'left', background: activeTab === 'notifications' ? 'rgba(94, 178, 241, 0.1)' : 'transparent', color: activeTab === 'notifications' ? 'var(--primary-dark-blue)' : 'var(--text-muted)', borderRight: activeTab === 'notifications' ? '4px solid var(--accent-sky-blue)' : 'none', fontWeight: activeTab === 'notifications' ? 600 : 400 }}
              onClick={() => setActiveTab('notifications')}
            >
              <Bell size={20} /> Global Announcements
            </button>
          </nav>
        </aside>

        {/* Admin Content */}
        <main style={{ flex: 1, padding: '32px', overflowY: 'auto' }}>
          {activeTab === 'students' && (
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
                <h2 style={{ color: 'var(--primary-dark-blue)' }}>Student Records</h2>
                <button className="btn-primary">Add New Student</button>
              </div>

              <div className="glass-panel" style={{ background: 'white', padding: '24px', borderRadius: '12px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', background: '#f8fafc', padding: '12px 16px', borderRadius: '8px', marginBottom: '24px', width: '300px', border: '1px solid #e2e8f0' }}>
                  <Search size={20} color="var(--text-muted)" />
                  <input 
                    type="text" 
                    placeholder="Search by name or reg no..." 
                    style={{ border: 'none', background: 'transparent', outline: 'none', width: '100%' }}
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>

                <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                  <thead>
                    <tr style={{ borderBottom: '2px solid #e2e8f0' }}>
                      <th style={{ padding: '12px', color: 'var(--text-muted)' }}>Reg No</th>
                      <th style={{ padding: '12px', color: 'var(--text-muted)' }}>Name</th>
                      <th style={{ padding: '12px', color: 'var(--text-muted)' }}>Branch</th>
                      <th style={{ padding: '12px', color: 'var(--text-muted)' }}>Overall Attendance</th>
                      <th style={{ padding: '12px', color: 'var(--text-muted)' }}>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredStudents.map((student, idx) => (
                      <tr key={idx} style={{ borderBottom: '1px solid #f1f5f9' }}>
                        <td style={{ padding: '16px 12px', fontWeight: 500, color: 'var(--primary-dark-blue)' }}>{student.regNo}</td>
                        <td style={{ padding: '16px 12px' }}>{student.name}</td>
                        <td style={{ padding: '16px 12px' }}>{student.branch}</td>
                        <td style={{ padding: '16px 12px' }}>
                          <span style={{ color: student.attendance.overall < 75 ? 'var(--danger-red)' : 'var(--success-green)', fontWeight: 500 }}>
                            {student.attendance.overall}%
                          </span>
                        </td>
                        <td style={{ padding: '16px 12px' }}>
                          <button style={{ color: 'var(--accent-sky-blue)', padding: '8px', borderRadius: '4px', background: 'rgba(94, 178, 241, 0.1)' }}>
                            <Edit size={16} />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab !== 'students' && (
            <div style={{ padding: '48px', textAlign: 'center', color: 'var(--text-muted)' }}>
              <h2>This section is under development.</h2>
              <p>Integration with university ERP system pending.</p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default AdminPanel;
