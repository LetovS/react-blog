import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './TodoModal.module.css';

const TodoModal = ({ isOpen, onClose, onSubmit, initialData, isEditMode }) => {
    const [todo, setTodo] = useState({
        title: '',
        startTime: '',
        endTime: '',
        description: '',
        result: '',
    });

    // Если переданы начальные данные, заполняем форму
    useEffect(() => {
        if (initialData) {
            setTodo(initialData);
        } else {
            setTodo({
                title: '',
                startTime: '',
                endTime: '',
                description: '',
                result: '',
            });
        }
    }, [initialData]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setTodo({ ...todo, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(todo); // Передаём данные задачи в родительский компонент
        onClose(); // Закрываем модальное окно
    };

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

// Определяем PropTypes для пропсов
TodoModal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
    initialData: PropTypes.shape({
        id: PropTypes.number,
        title: PropTypes.string,
        startTime: PropTypes.string,
        endTime: PropTypes.string,
        description: PropTypes.string,
        result: PropTypes.string,
    }),
    isEditMode: PropTypes.bool,
};

TodoModal.defaultProps = {
    initialData: null,
    isEditMode: false,
};

export default TodoModal;