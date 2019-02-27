import React, { Component, ChangeEvent, MouseEvent } from 'react';
import { inject, observer } from 'mobx-react';
import { ItodoStore } from '../stores/todoStore';
import Checkbox from '@material-ui/core/Checkbox';
import DeleteTwoToneIcon from '@material-ui/icons/DeleteTwoTone';
import '../App.css';

const styles = {
    delete: {
        "cursor": 'pointer',
        "fontSize": '24px'
    },
    check: {
        "padding": '0px',
        "fontSize": '19px'
    }
};

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
                        <Checkbox onChange={(event: ChangeEvent<HTMLInputElement>) => todoStore!.checkTodo(todo, index)} checked={todo.completed} color={'primary'}
                        style={styles.check}
                        />
                        <div className="todo-item-label" style={{textDecoration: `${todo.completed ? 'line-through' : ''}`, color: `${todo.completed ? 'lightgrey' : ''}`}}>
                            {todo.title}
                        </div>
                    </div>
                    <DeleteTwoToneIcon
                    onClick={(event: MouseEvent<SVGSVGElement>) => todoStore!.deleteTodo(index)}
                    style={styles.delete}/>
                </div>
            </div>
        );
    }
};

export default TodoItem;
