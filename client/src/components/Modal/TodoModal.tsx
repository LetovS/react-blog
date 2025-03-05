import React, { useState, useEffect } from 'react';
import styles from './TodoModal.module.css';
import {ITodo} from '../../interfaces/ITodo'


// Определяем тип для пропсов компонента TodoModal
interface ITodoModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSubmit: (todo: ITodo) => void;
    initialData: ITodo | null;
    isEditMode?: boolean;
}

const TodoModal: React.FC<ITodoModalProps> = ({ isOpen, onClose, onSubmit, initialData, isEditMode = false }) => {

    const [todo, setTodo] = useState<ITodo>({
        id: -1,
        title: '',
        startTime: '',
        endTime: '',
        description: '',
        result: '',
        completed: false,
    });

    // Если переданы начальные данные, заполняем форму
    useEffect(() => {
        if (initialData) {
            setTodo(initialData);
        } else {
            setTodo({
                id: -1,
                title: '',
                startTime: '',
                endTime: '',
                description: '',
                result: '',
                completed: false,
            });
        }
    }, [initialData]);

    // Обработчик изменения полей формы
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setTodo({ ...todo, [name]: value });
    };

    // Обработчик отправки формы
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(todo); // Передаём данные задачи в родительский компонент
        onClose(); // Закрываем модальное окно
    };

    // Если модальное окно закрыто, ничего не рендерим
    if (!isOpen) return null;

    return (
        <div className={styles.modalOverlay}>
            <div className={styles.modalContent}>
                <h2>{isEditMode ? 'Редактировать задачу' : 'Добавить задачу'}</h2>
                <form onSubmit={handleSubmit}>
                    <div className={styles.formGroup}>
                        <label>Название задачи</label>
                        <input
                            type="text"
                            name="title"
                            value={todo.title}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <label>Время начала</label>
                        <input
                            type="text"
                            name="startTime"
                            value={todo.startTime}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <label>Время завершения</label>
                        <input
                            type="text"
                            name="endTime"
                            value={todo.endTime}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <label>Описание</label>
                        <textarea
                            name="description"
                            value={todo.description}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <label>Результат</label>
                        <input
                            type="text"
                            name="result"
                            value={todo.result}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div className={styles.buttons}>
                        <button type="submit" className={styles.submitButton}>
                            {isEditMode ? 'Сохранить' : 'Добавить'}
                        </button>
                        <button type="button" onClick={onClose} className={styles.cancelButton}>
                            Отмена
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default TodoModal;