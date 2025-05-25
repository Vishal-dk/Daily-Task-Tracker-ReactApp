import React, { useState } from 'react';
import './ForgotPassword.css';

function ForgotPassword() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Password reset link sent to ${email}`);
  };

  return (
    <div className="forgot-container">
     
      <div className="help-bg-text">Don't worry</div>

      <div className="forgot-box">
        <h2>Reset Your Password</h2>

        <p className="help-text">We are here to help you</p>

        <form onSubmit={handleSubmit} className="forgot-form">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="forgot-input"
          />
          <button type="submit" className="forgot-button">Send Reset Link</button>
        </form>

        <p>
          Remembered your password? <a href="/">Login here</a>
        </p>
      </div>
    </div>
  );
}

export default ForgotPassword;
