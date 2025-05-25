import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { ReminderProvider } from './context/ReminderContext'; 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <ReminderProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ReminderProvider>
    </AuthProvider>
  </React.StrictMode>
);
