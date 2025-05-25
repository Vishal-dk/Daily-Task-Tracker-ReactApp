import React, { useState } from 'react';
import './Register.css'; 

function Register() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    phone: '',
    age: '',
    gender: '',
    address: '',
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    alert(`Mock registration for ${formData.username} (${formData.email})`);
    
  };

  return (
    <div className="register-container">
      <div className="register-form-wrapper">
        <form onSubmit={handleRegister} className="register-form">
          <h2 className="form-title">Create Your Account</h2>

          <input
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
            required
            className="input-field"
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="input-field"
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
            className="input-field"
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className="input-field"
          />

          <input
            type="number"
            name="age"
            placeholder="Age"
            min="1"
            max="120"
            value={formData.age}
            onChange={handleChange}
            className="input-field"
          />

          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            className="input-field"
            required
          >
            <option value="" disabled>Select Gender</option>
            <option value="female">Female</option>
            <option value="male">Male</option>
            <option value="other">Other</option>
            <option value="prefer_not_say">Prefer not to say</option>
          </select>

          <textarea
            name="address"
            placeholder="Address"
            value={formData.address}
            onChange={handleChange}
            rows="3"
            className="input-field"
          />

          <button type="submit" className="register-button">Register</button>
        </form>
      </div>
    </div>
  );
}

export default Register;
