import React, { useContext } from 'react';
import { Routes, Route, Navigate, NavLink } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import ForgotPassword from './pages/ForgotPassword';
import About from './pages/About';
import Contact from './pages/Contact';
import Personal from './pages/Personal';
import Study from './pages/Study';
import Work from './pages/Work';
import Reminder from './pages/Reminder';
import { AuthContext } from './context/AuthContext';

function App() {
  const { user } = useContext(AuthContext);

  return (
    <>
      
      <nav style={navStyle}>
        {user ? (
          <>
            <NavLink to="/dashboard" style={linkStyle} className={({ isActive }) => isActive ? 'active' : ''}>Dashboard</NavLink>
            <NavLink to="/about" style={linkStyle} className={({ isActive }) => isActive ? 'active' : ''}>About</NavLink>
            <NavLink to="/contact" style={linkStyle} className={({ isActive }) => isActive ? 'active' : ''}>Contact</NavLink>
          </>
        ) : (
          <>
            <NavLink to="/" style={linkStyle} className={({ isActive }) => isActive ? 'active' : ''}>Login</NavLink>
            <NavLink to="/register" style={linkStyle} className={({ isActive }) => isActive ? 'active' : ''}>Register</NavLink>
            <NavLink to="/about" style={linkStyle} className={({ isActive }) => isActive ? 'active' : ''}>About</NavLink>
            <NavLink to="/contact" style={linkStyle} className={({ isActive }) => isActive ? 'active' : ''}>Contact</NavLink>
          </>
        )}
      </nav>

      {/* Routes */}
      <Routes>
        <Route path="/" element={!user ? <Login /> : <Navigate to="/dashboard" />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/dashboard" element={user ? <Dashboard /> : <Navigate to="/" />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/personal" element={<Personal />} />
        <Route path="/study" element={<Study />} />
        <Route path="/work" element={<Work />} />
        <Route path="/reminder" element={<Reminder />} />
      </Routes>
    </>
  );
}


const navStyle = {
  padding: '1rem',
  borderBottom: '1px solid #ccc',
  display: 'flex',
  gap: '1.5rem',
  backgroundColor: '#f9fafb',
  position: 'sticky',
  top: 0,
  zIndex: 1000,
  flexWrap: 'wrap',
};

const linkStyle = {
  textDecoration: 'none',
  color: '#2563eb',
  fontWeight: '600',
};

export default App;
