import React, { useState, useEffect } from 'react';

function Reminder() {
  const [task, setTask] = useState('');
  const [datetime, setDatetime] = useState('');
  const [reminders, setReminders] = useState([]);

 
  const addReminder = () => {
    if (task && datetime) {
      const reminderTime = new Date(datetime);
      const now = new Date();

      if (reminderTime > now) {
        const id = Date.now();
        const newReminder = {
          id,
          task,
          time: reminderTime,
          triggered: false,
        };
        setReminders([...reminders, newReminder]);
        setTask('');
        setDatetime('');
      } else {
        alert('Please select a future date and time.');
      }
    }
  };

  
  const deleteReminder = (id) => {
    setReminders(reminders.filter((r) => r.id !== id));
  };

 
  useEffect(() => {
    const interval = setInterval(() => {
      setReminders((prevReminders) =>
        prevReminders.map((r) => {
          const now = new Date();
          if (!r.triggered && now >= new Date(r.time)) {
            alert(`⏰ Reminder: ${r.task}`);
            return { ...r, triggered: true };
          }
          return r;
        })
      );
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const getCountdown = (targetTime) => {
    const now = new Date();
    const diff = new Date(targetTime) - now;
    if (diff <= 0) return '⏰ Time Reached';
    const totalSeconds = Math.floor(diff / 1000);
    const hrs = Math.floor(totalSeconds / 3600);
    const mins = Math.floor((totalSeconds % 3600) / 60);
    const secs = totalSeconds % 60;
    return `${hrs}h ${mins}m ${secs}s`;
  };

  return (
    <div style={{ padding: '2rem', maxWidth: '600px', margin: 'auto' }}>
      <h2>Set a Task Reminder</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <input
          type="text"
          placeholder="Enter task..."
          value={task}
          onChange={(e) => setTask(e.target.value)}
          style={{ padding: '0.5rem' }}
        />
        <input
          type="datetime-local"
          value={datetime}
          onChange={(e) => setDatetime(e.target.value)}
          style={{ padding: '0.5rem' }}
        />
        <button
          onClick={addReminder}
          style={{
            padding: '0.6rem',
            backgroundColor: '#007BFF',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
        >
          ➕ Set Reminder
        </button>
      </div>

      <div style={{ marginTop: '2rem' }}>
        <h3>📋 Your Reminders</h3>
        {reminders.length === 0 ? (
          <p>No reminders set yet.</p>
        ) : (
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {reminders.map((r) => (
              <li
                key={r.id}
                style={{
                  marginBottom: '1rem',
                  padding: '1rem',
                  background: '#f1f5f9',
                  borderRadius: '8px',
                  position: 'relative',
                }}
              >
                <strong>{r.task}</strong> <br />
                <span>⏳ {getCountdown(r.time)}</span> <br />
                <small>⏰ At: {new Date(r.time).toLocaleString()}</small>
                <button
                  onClick={() => deleteReminder(r.id)}
                  style={{
                    position: 'absolute',
                    right: '1rem',
                    top: '1rem',
                    background: '#dc2626',
                    color: 'white',
                    border: 'none',
                    padding: '0.4rem 0.6rem',
                    borderRadius: '5px',
                    cursor: 'pointer',
                  }}
                >
                  ❌ Delete
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default Reminder;
