import React from 'react';
import styles from './TodoDetailsModal.module.css';
import {ITodo} from '../../interfaces/ITodo'

// Определяем интерфейс для пропсов компонента
interface TodoDetailsModalProps {
    todo: ITodo | null; // todo может быть null
    onClose: () => void; // onClose — функция без аргументов и возвращаемого значения
}

const TodoDetailsModal: React.FC<TodoDetailsModalProps> = ({ todo, onClose }) => {
    // Если todo равен null, не рендерим компонент
    if (!todo) return null;

    return (
        <div className={styles.modalOverlay}>
            <div className={styles.modalContent}>
                <h2>{todo.title}</h2>
                <p><strong>Время:</strong> {todo.startTime} - {todo.endTime}</p>
                <p><strong>Описание:</strong> {todo.description}</p>
                <p><strong>Результат:</strong> {todo.result}</p>
                <button onClick={onClose} className={styles.closeButton}>
                    Закрыть
                </button>
            </div>
        </div>
    );
};

export default TodoDetailsModal;