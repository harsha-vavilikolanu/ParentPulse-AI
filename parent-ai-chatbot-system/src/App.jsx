import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useStore } from './store/useStore';
import MainLayout from './components/layout/MainLayout';

// Public Pages
import Home from './pages/Home';
import Login from './pages/Login';

// Dashboard & Modules
import Dashboard from './pages/Dashboard';
import Attendance from './pages/Attendance';
import AcademicStatus from './pages/AcademicStatus';
import AcademicPerformance from './pages/AcademicPerformance';
import Finance from './pages/Finance';
import Notifications from './pages/Notifications';
import FacultyContacts from './pages/FacultyContacts';
import Insights from './pages/Insights';
import ChatbotPage from './pages/ChatbotPage';

// Protected Route Wrapper
const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useStore();
  if (!isAuthenticated) return <Navigate to="/login" replace />;
  return <MainLayout>{children}</MainLayout>;
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />

        {/* Protected Dashboard Routes */}
        <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
        <Route path="/attendance" element={<ProtectedRoute><Attendance /></ProtectedRoute>} />
        <Route path="/academic-status" element={<ProtectedRoute><AcademicStatus /></ProtectedRoute>} />
        <Route path="/performance" element={<ProtectedRoute><AcademicPerformance /></ProtectedRoute>} />
        <Route path="/finance" element={<ProtectedRoute><Finance /></ProtectedRoute>} />
        <Route path="/notifications" element={<ProtectedRoute><Notifications /></ProtectedRoute>} />
        <Route path="/contacts" element={<ProtectedRoute><FacultyContacts /></ProtectedRoute>} />
        <Route path="/insights" element={<ProtectedRoute><Insights /></ProtectedRoute>} />
        <Route path="/chatbot" element={<ProtectedRoute><ChatbotPage /></ProtectedRoute>} />

        {/* Catch all */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
