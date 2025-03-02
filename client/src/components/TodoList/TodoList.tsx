import React from 'react';
import TodoCard, {ITodo} from '../TodoCard/TodoCard';
import styles from './TodoList.module.css';


interface ITodoListProps {
    todos: ITodo[];
    onToggleComplete: (id: number, completed: boolean) => void;
    onViewDetails: (todo: ITodo) => void;
}

const TodoList: React.FC<ITodoListProps> = ({ todos, onToggleComplete, onViewDetails }) => {
    return (
        <div className={styles.todoList}>
            {todos.map((todo) => (
                <TodoCard
                    key={todo.id}
                    todo={todo}
                    onToggleComplete={onToggleComplete}
                    onViewDetails={onViewDetails}
                />
            ))}
        </div>
    );
};

export default TodoList;