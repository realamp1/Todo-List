// src/components/Todo.js
import React from 'react';

function Todo({ todo, toggleComplete, removeTodo }) {
  return (
    <div style={{ textDecoration: todo.completed ? 'line-through' : '' }}>
      {todo.task}
      <button onClick={() => toggleComplete(todo.id)}>Complete</button>
      <button onClick={() => removeTodo(todo.id)}>Delete</button>
    </div>
  );
}

export default Todo;
