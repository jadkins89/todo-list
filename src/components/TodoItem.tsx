import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { ItodoStore } from '../stores/todoStore';
import DeleteTwoToneIcon from '@material-ui/icons/DeleteTwoTone';
import '../App.css';

interface TodoItemProps {
    todoStore?: ItodoStore,
    key: number,
    todo: {id: number, title: string, completed: boolean}
    index: number;
}

@inject('todoStore')
@observer
class TodoItem extends Component<TodoItemProps> {
    render() {
        return(
            <div>
                <div key={key} className="todo-item">
                    <div className="todo-item-left">
                        <input type="checkbox" onChange={} checked={todo.completed}/>
                        <div className="todo-item-label" style={{textDecoration: `${todo.completed ? 'line-through' : ''}`, color: `${todo.completed ? 'lightgrey' : ''}`}}>
                            {todo.title}
                        </div>
                    </div>
                    <DeleteTwoToneIcon onClick={} />
                </div>
            </div>
        );
    }
};

export default TodoItem;
