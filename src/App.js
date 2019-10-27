import React from 'react';
import logo from './logo.svg';
import './App.css';
import TodoMain from './components/todo-main';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <TodoMain />
      </header>
      
    </div>
  );
}

export default App;
