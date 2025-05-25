import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Task from '../components/Task';
import { AuthContext } from '../context/AuthContext';
import { ReminderContext } from '../context/ReminderContext';

import './Dashboard.css';

function Dashboard() {
  const { logout, user } = useContext(AuthContext);
  const { reminders, deleteReminder } = useContext(ReminderContext);

  const [tasks, setTasks] = useState([]);
  const [text, setText] = useState('');
  const [category, setCategory] = useState('personal');
  const [history, setHistory] = useState([]);
  const [timers, setTimers] = useState({});

  
  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const updatedTimers = {};
      reminders.forEach((r) => {
        const distance = new Date(r.time).getTime() - now;
        if (distance > 0) {
          const mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
          const secs = Math.floor((distance % (1000 * 60)) / 1000);
          updatedTimers[r.id] = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
        } else {
          updatedTimers[r.id] = '⏰ Time Up!';
        }
      });
      setTimers(updatedTimers);
    }, 1000);
    return () => clearInterval(interval);
  }, [reminders]);

  const addTask = () => {
    if (text.trim()) {
      const newTask = {
        id: Date.now(),
        text,
        completed: false,
        category,
        createdAt: new Date().toLocaleString(), 
      };
      setTasks([...tasks, newTask]);
      setText('');
    }
  };

  const toggleTask = (id) => {
    const updatedTasks = tasks.map((t) =>
      t.id === id ? { ...t, completed: !t.completed } : t
    );
    setTasks(updatedTasks);

    const toggledTask = tasks.find((t) => t.id === id);
    if (toggledTask && !toggledTask.completed) {
      const timestamp = new Date().toLocaleString();
      setHistory((prevHistory) => [
        ...prevHistory,
        {
          ...toggledTask,
          completed: true,
          completedAt: timestamp,
        },
      ]);
    }
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  const completedTasks = tasks.filter((t) => t.completed).length;
  const pendingTasks = tasks.filter((t) => !t.completed).length;

  return (
    <>
      <nav className="navbar">
        <div className="navbar-left">
          <span className="logo">TaskTracker</span>
        </div>
        <ul className="navbar-links">
          <li><Link to="/dashboard">Dashboard</Link></li>
        </ul>
      </nav>

      <div className="dashboard-container">
        <div className="overlay"></div>

        <div className="dashboard-summary">
          <div className="summary-card completed">
            <h3>Currently Completed</h3>
            <p>{completedTasks}</p>
          </div>
          <div className="summary-card pending">
            <h3>Pending</h3>
            <p>{pendingTasks}</p>
          </div>
        </div>

        <div className="task-category-links">
          <span>Click to See About Tasks:</span>
          <Link to="/personal" className="category-link">🔵 Personal</Link>
          <Link to="/work" className="category-link">🟡 Work</Link>
          <Link to="/study" className="category-link">🟢 Study</Link>
          <Link to="/reminder" className="set-reminder-button">⏰ Want to Set Reminder?</Link>
        </div>

        <div className="dashboard-content">
          <div className="dashboard-card">
            <div className="dashboard-header">
              <h2>Welcome, {user.username}</h2>
              <button onClick={logout} className="logout-button">Logout</button>
            </div>

            <div className="task-input-section">
              <input
                type="text"
                placeholder="Add a new task..."
                value={text}
                onChange={(e) => setText(e.target.value)}
                className="task-input"
              />
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="task-select"
              >
                <option value="personal">Personal</option>
                <option value="work">Work</option>
                <option value="study">Study</option>
              </select>
              <button onClick={addTask} className="add-task-button">Add</button>
            </div>

            <ul className="task-list">
              {tasks.map((task) => (
                <Task
                  key={task.id}
                  task={task}
                  onToggle={toggleTask}
                  onDelete={deleteTask}
                />
              ))}
            </ul>
          </div>

         
          {reminders.length > 0 && (
            <div className="reminder-dashboard-section">
              <h3 className="reminder-title">⏰ Active Reminders</h3>
              <div className="reminder-list">
                {reminders.map((reminder) => (
                  <div className="reminder-box" key={reminder.id}>
                    <strong>{reminder.text}</strong>
                    <p>Ends In: <span>{timers[reminder.id] || 'Loading...'}</span></p>
                    <button
                      className="delete-reminder"
                      onClick={() => deleteReminder(reminder.id)}
                      title="Delete Reminder"
                    >
                      ❌
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="history-panel">
            <h3>Completed Task History</h3>
            <ul className="history-list">
              {history.map((task, index) => (
                <li key={index}>
                  ✅ [{task.category}] {task.text}
                  <br />
                  <small style={{ color: '#6b7280' }}>
                    Completed on: {task.completedAt}
                  </small>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
