import { useState } from 'react';
import styles from './TodoCard.module.css';
import PropTypes from 'prop-types';

const TodoCard = ({ todo, onToggleComplete, onViewDetails }) => {
    const [isCompleted, setIsCompleted] = useState(todo.completed);

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

TodoCard.propTypes = {
    todo: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        completed: PropTypes.bool.isRequired,
    }).isRequired,
    onToggleComplete: PropTypes.func.isRequired, // onToggleComplete должен быть функцией
    onViewDetails: PropTypes.func.isRequired, // onViewDetails должен быть функцией
};

export default TodoCard;