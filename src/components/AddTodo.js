import React, { useState } from 'react';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebase/config';

function AddTodo() {
  const [input, setInput] = useState('');

  const addTodo = async (e) => {
    e.preventDefault();
    if (input.trim() === '') return;

    await addDoc(collection(db, 'todos'), {
      text: input,
      completed: false,
      timestamp: serverTimestamp()
    });

    setInput('');
  };

  return (
    <form onSubmit={addTodo} className="add-todo">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add a new task..."
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default AddTodo;