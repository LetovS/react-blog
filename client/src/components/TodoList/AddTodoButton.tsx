import React from 'react';
import styles from './AddTodoButton.module.css';
import {IButtonClick} from "../../interfaces/IButtonClick";

const AddTodoButton: React.FC<IButtonClick> = ({ onClick }) => {
    return (
        <button onClick={onClick} className={styles.addButton}>
            Добавить задачу
        </button>
    );
};

export default AddTodoButton;