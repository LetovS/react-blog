import { useState } from 'react';
import styles from './TodoForm.module.css';

const TodoForm = ({ onSubmit }) => {
    const [newTodo, setNewTodo] = useState({
        title: '',
        startTime: '',
        endTime: '',
        description: '',
        result: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewTodo({ ...newTodo, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(newTodo);
        setNewTodo({ title: '', startTime: '', endTime: '', description: '', result: '' }); // Очищаем форму
    };

    return (
        <form onSubmit={handleSubmit} className={styles.todoForm}>
            <input
                type="text"
                name="title"
                placeholder="Название задачи"
                value={newTodo.title}
                onChange={handleInputChange}
                required
            />
            <input
                type="text"
                name="startTime"
                placeholder="Время начала (например, 10:00)"
                value={newTodo.startTime}
                onChange={handleInputChange}
                required
            />
            <input
                type="text"
                name="endTime"
                placeholder="Время завершения (например, 11:00)"
                value={newTodo.endTime}
                onChange={handleInputChange}
                required
            />
            <textarea
                name="description"
                placeholder="Описание задачи"
                value={newTodo.description}
                onChange={handleInputChange}
                required
            />
            <input
                type="text"
                name="result"
                placeholder="Результат выполнения"
                value={newTodo.result}
                onChange={handleInputChange}
                required
            />
            <button type="submit" className={styles.submitButton}>
                Добавить
            </button>
        </form>
    );
};

export default TodoForm;