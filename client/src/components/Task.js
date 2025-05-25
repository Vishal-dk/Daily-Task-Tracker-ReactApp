import React from 'react';

function Task({ task, onToggle, onDelete }) {
  return (
    <li style={{
      marginTop: '1rem',
      textDecoration: task.completed ? 'line-through' : 'none',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }}>
      <div>
        <strong>[{task.category}]</strong> {task.text}
      </div>
      <div>
        <button onClick={() => onToggle(task.id)}>
          {task.completed ? 'Undo' : 'Done'}
        </button>
        <button onClick={() => onDelete(task.id)} style={{ marginLeft: '0.5rem' }}>
          Delete
        </button>
      </div>
    </li>
  );
}

export default Task;
