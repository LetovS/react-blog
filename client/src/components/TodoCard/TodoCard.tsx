import React, { useState } from 'react';
import styles from './TodoCard.module.css';

// Определяем тип для задачи
export interface ITodo {
    id: number;
    title: string;
    completed: boolean;
}

// Определяем тип для пропсов компонента TodoCard
export interface ITodoListProps {
    todo: ITodo; // Задача
    onToggleComplete: (id: number, completed: boolean) => void; // Функция для переключения статуса задачи
    onViewDetails: (todo: ITodo) => void; // Функция для просмотра деталей задачи
}

const TodoCard: React.FC<ITodoListProps> = ({ todo, onToggleComplete, onViewDetails }) => {
    const [isCompleted, setIsCompleted] = useState(todo.completed);

    // Обработчик изменения статуса задачи
    const handleCheckboxChange = async () => {
        const updatedCompletedStatus = !isCompleted;
        setIsCompleted(updatedCompletedStatus);
        await onToggleComplete(todo.id, updatedCompletedStatus);
    };

    return (
        <div className={styles.todoCard}>
            <h3>{todo.title}</h3>
            <div className={styles.actions}>
                <button onClick={() => onViewDetails(todo)} className={styles.detailsButton}>
                    Детали
                </button>
                <input
                    type="checkbox"
                    checked={isCompleted}
                    onChange={handleCheckboxChange}
                    className={styles.checkbox}
                />
            </div>
        </div>
    );
};

export default TodoCard;