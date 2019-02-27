import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { ItodoStore } from './stores/todoStore';
import TodoItem from "./components/TodoItem";
import TodosRemaining from "./components/TodosRemaining";
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
            {
                todos.map((todo, index) =>
                <TodoItem key={todo.id} todo={todo} index={index} />
            )}
        </div>
        <div className="remaining-container">
            <TodosRemaining />
        </div>
      </div>
    );
  }
}

export default App;
