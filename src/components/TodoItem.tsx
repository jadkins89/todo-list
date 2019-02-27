import { inject, observer } from 'mob-react';
import { ItodoStore } from '../stores/todoStore';
import '../App.css';

interface TodoItemProps {
    todoStore?: ItodoStore,
    key: number,
    todo: {id: number, title: string, completed}
}

@inject('todoStore')
@observer
class TodoItem extends Component<TodoItemProps> {
    render() {
        return(
            <div>
                <div className="todo-item">
                    Hi!
                </div>
            </div>
        );
    }
};

export default TodoItem;
