import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { ItodoStore } from './stores/todoStore';
import './App.css';

interface AppProps {
    todoStore?: ItodoStore;
}

@inject('todoStore')
@observer
class App extends Component<AppProps> {
  render() {
      const { todoInput, addTodo, todos } = this.props.todoStore!;
    return (
      <div className="App">
        <div className="todo-container">
            <input className="todo-input" type="text" placeholder="What needs to be done?" ref={todoInput} onKeyUp={addTodo} />

        </div>
      </div>
    );
  }
}

export default App;
