import React from 'react';
import './AboutContact.css';

function About() {
  return (
    <div className="about-container">
      <h1>About Our Task Manager</h1>
      <p>
        Our platform is built to simplify your daily planning and improve productivity.
        Whether you're managing personal goals, professional tasks, or study plans,
        this app provides a clear and beautiful interface to keep you organized.
      </p>

      <div className="features-section">
        <h2>Features</h2>
        <ul>
          <li>✅ Task creation with categories (Personal, Work, Study)</li>
          <li>✅ Real-time task tracking and status updates</li>
          <li>✅ Completed task history with timestamps</li>
          <li>✅ Simple and clean dashboard UI</li>
          <li>✅ Secure login and session management</li>
        </ul>
      </div>

      <div className="mission-section">
        <h2>Our Mission</h2>
        <p>
          We aim to empower individuals with simple tools to help them
          organize their life, achieve goals, and manage time effectively.
        </p>
      </div>
    </div>
  );
}

export default About;
