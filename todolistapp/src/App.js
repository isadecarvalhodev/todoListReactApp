import React, { useState } from 'react';
import './App.css';
import Form from './componets/Form';
import TodoList from './componets/TodoList';


function App() {
  const [inputText, setInputText] = useState("");
  
  return (
    <div className="App">
      <header>
        <h1>My Todo List</h1>
      </header>
      <Form/>
      <TodoList />
      
    </div>
  );
}

export default App;
