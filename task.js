// src/components/Task.js
import React from 'react';

const Task = ({ task }) => {
  return (
    <li>
      <label>
        <input type="checkbox" checked={task.completed} />
        {task.name}
      </label>
    </li>
  );
};

export default Task;
