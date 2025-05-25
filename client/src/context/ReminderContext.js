import React, { createContext, useState, useEffect } from 'react';

export const ReminderContext = createContext();

export const ReminderProvider = ({ children }) => {
  const [reminders, setReminders] = useState([]);

 
  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      setReminders((prev) =>
        prev.filter((r) => new Date(r.time).getTime() > now)
      );
    }, 10000); 
    return () => clearInterval(interval);
  }, []);

  const addReminder = (reminder) => {
    if (!reminder || !reminder.time || isNaN(new Date(reminder.time).getTime())) {
      console.warn('Invalid reminder:', reminder);
      return;
    }
    setReminders((prev) => [...prev, reminder]);
  };

  const deleteReminder = (id) => {
    setReminders((prev) => prev.filter((r) => r.id !== id));
  };

  return (
    <ReminderContext.Provider value={{ reminders, addReminder, deleteReminder }}>
      {children}
    </ReminderContext.Provider>
  );
};
