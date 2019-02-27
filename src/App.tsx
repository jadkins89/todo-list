import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { ItodoStore } from './stores/todoStore';
import TodoItem from "./components/TodoItem";
import TodosRemaining from "./components/TodosRemaining";
import TodoInput from "./components/TodoInput";
import './App.css';

interface AppProps {
    todoStore?: ItodoStore;
}

@inject('todoStore')
@observer
class App extends Component<AppProps> {
  render() {
      const { todos } = this.props.todoStore!;
      const url: string = "https://www.rockymtnrefl.com/DeadHorsePointcd310631086.jpg";
    return (
      <div className="App">
        <div className="todo-container">
            <div className="image-box">
                <img className="image" src={url} />
                <div className="text-centered">Stuff To Get Done
                </div>
            </div>
            <TodoInput />
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
