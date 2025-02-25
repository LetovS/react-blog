import styles from './TodoDetailsModal.module.css';
import PropTypes from 'prop-types';

const TodoDetailsModal = ({ todo, onClose }) => {
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

// Определяем PropTypes для пропсов
TodoDetailsModal.propTypes = {
    todo: PropTypes.shape({
        title: PropTypes.string.isRequired,
        startTime: PropTypes.string.isRequired,
        endTime: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        result: PropTypes.string.isRequired,
    }),
    onClose: PropTypes.func.isRequired, // onClose должен быть функцией
};

export default TodoDetailsModal;