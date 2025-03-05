// components/Works/Works.tsx
import React, { useState } from 'react';
import useTodos from '../../hooks/useTodos';
import TodoModal from '../Modal/TodoModal';
import TodoList from '../TodoList/TodoList';
import AddTodoButton from '../TodoList/AddTodoButton';
import ModalButton from '../Buttons/ModalButton';
import {ITodo} from '../../interfaces/ITodo' // Импортируем общий интерфейс
import styles from './Works.module.css';

const Works: React.FC = () => {
    const { todos, addTodo, editTodo } = useTodos();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedTodo, setSelectedTodo] = useState<ITodo | null>(null);
    const [isEditMode, setIsEditMode] = useState(false);

    const handleViewDetails = (todo: ITodo) => {
        setSelectedTodo(todo);
        setIsEditMode(true);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedTodo(null);
        setIsEditMode(false);
    };

    const handleSubmit = (todo: ITodo) => {
        if (isEditMode) {
            editTodo(todo);
        } else {
            addTodo({ ...todo, completed: false });
        }
    };

    return (
        <div className={styles.works}>
            <h1>Список задач</h1>
            <AddTodoButton onClick={() => setIsModalOpen(true)} />
            <TodoList
                todos={todos}
                onToggleComplete={async (id, completed) => {
                    const todoToUpdate = todos.find(todo => todo.id === id);
                    if (todoToUpdate) {
                        await editTodo({ ...todoToUpdate, completed });
                    }
                }}
                onViewDetails={handleViewDetails}
            />
            <TodoModal
                isOpen={isModalOpen}
                onClose={handleCloseModal}
                onSubmit={handleSubmit}
                initialData={selectedTodo || ({} as ITodo)}
                isEditMode={isEditMode}
            />
        </div>
    );
};

export default Works;