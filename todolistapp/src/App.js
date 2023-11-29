import React, { useState, useEffect } from 'react';
import './App.css';
import Form from './componets/Form';
import TodoList from './componets/TodoList';


function App() {
  //State 
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('all');
  const [filteredTodos, setFilteredTodos] = useState([]);

// Run ONCE when the app start
useEffect(() => {
  getLocalTodos();
},[]);

  //Fuction/Events
useEffect(() => {
filterHandler();
saveLocalTodos();

},[todos, status]);

const filterHandler = () => {
  switch (status) {
    case 'completed':
      setFilteredTodos(todos.filter((todo) => todo.completed === true));
      break;
    case 'uncompleted':
      setFilteredTodos(todos.filter((todo) => todo.completed === false));
      break;
    default:
      setFilteredTodos(todos);
      break;
  }
};

const saveLocalTodos = () => {
 
    localStorage.setItem('todos', JSON.stringify([]));

};
const getLocalTodos = () => {
  if (localStorage.getItem('todos') === null) {
    localStorage.setItem('todos', JSON.stringify([]));
  } else {
    let todoLocal = JSON.parse(localStorage.getItem('todos'));
    setTodos(todoLocal);
  }
};







  return (
    <div className="App">
      <header>
        <h1>My To-do List</h1>
      </header>
      <Form inputText={inputText} 
      todos={todos} 
      setTodos={setTodos} 
      setInputText={setInputText}
      setStatus={setStatus}
      
      />
      <TodoList filteredTodos={filteredTodos} setTodos={setTodos} todos={todos} />
      
    </div>
  );
}

export default App;
