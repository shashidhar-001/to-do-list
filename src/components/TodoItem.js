import React from 'react';
import { doc, updateDoc, deleteDoc } from 'firebase/firestore';
import { db } from '../firebase/config';

function TodoItem({ todo }) {
  const toggleComplete = async () => {
    await updateDoc(doc(db, 'todos', todo.id), {
      completed: !todo.completed
    });
  };

  const deleteTodo = async () => {
    await deleteDoc(doc(db, 'todos', todo.id));
  };

  return (
    <div className="todo-item">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={toggleComplete}
      />
      <span className={todo.completed ? 'completed' : ''}>
        {todo.text}
      </span>
      <button onClick={deleteTodo}>Delete</button>
    </div>
  );
}

export default TodoItem;