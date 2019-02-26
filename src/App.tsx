import React, { Component } from 'react';
import { ItodoStore } from './stores/todoStore';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="todo-container">
            <input className="todo-input" type="text" placeholder="What needs to be done?" />
        </div>
      </div>
    );
  }
}

export default App;
