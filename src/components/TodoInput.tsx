import React, { Component } from 'react';
import { ItodoStore } from '../stores/todoStore';
import { inject, observer } from 'mobx-react';
import '../App.css';

interface TodoInputProps {
    todoStore?: ItodoStore;
}

@inject('todoStore')
@observer
class TodoInput extends Component<TodoInputProps> {
    render() {
        const { todoInput, addTodo } = this.props.todoStore!;
    return (
        <input className="todo-input" type="text" placeholder="What things need doing?" ref={todoInput} onKeyUp={addTodo} />
    )}
};

export default TodoInput;
