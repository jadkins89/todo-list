import React, { Component } from 'react';
import { ItodoStore } from '../stores/todoStore';
import { inject, observer } from 'mobx-react';
import '../App.css';

interface TodoRemainingProps {
    todoStore?: ItodoStore
}

@inject('todoStore')
@observer
class TodosRemaining extends Component<TodoRemainingProps> {
    render() {
        return (
            <div>
                Tasks Left: {this.props.todoStore!.remaining}
            </div>
        );
    }
};

export default TodosRemaining;
