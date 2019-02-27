import React, { Component, ChangeEvent } from 'react';
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
        const { todoStore, key, todo, index } = this.props;
        return(
            <div>
                <div key={key} className="todo-item">
                    <div className="todo-item-left">
                        <input type="checkbox" onChange={(event: ChangeEvent<HTMLInputElement>) => todoStore!.checkTodo(todo, index)} checked={todo.completed}/>
                        <div className="todo-item-label" style={{textDecoration: `${todo.completed ? 'line-through' : ''}`, color: `${todo.completed ? 'lightgrey' : ''}`}}>
                            {todo.title}
                        </div>
                    </div>
                    <DeleteTwoToneIcon onClick={(event: ChangeEvent<HTMLInputElement>) => todoStore!.deleteTodo(index)} />
                </div>
            </div>
        );
    }
};

export default TodoItem;
