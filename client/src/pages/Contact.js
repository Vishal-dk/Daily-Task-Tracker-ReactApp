import React from 'react';
import './AboutContact.css';

function Contact() {
  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <p>
        We'd love to hear from you! Whether it’s feedback, bug reports, or suggestions—
        feel free to reach out.
      </p>

      <div className="contact-details">
        <h2>Reach Us At</h2>
        <p>📧 Email: support@taskmanagerapp.com</p>
        <p>📞 Phone: +91 9884460886</p>
        <p>📍 Address: 123 Productivity Lane, Focus City, Workland</p>
      </div>

      <div className="contact-form">
        <h2>Send Us a Message</h2>
        <form onSubmit={(e) => e.preventDefault()}>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message..." rows="4" required></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
