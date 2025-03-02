// components/Works/Works.tsx
import React, { useState } from 'react';
import useTodos from '../../hooks/useTodos';
import TodoModal from '../Modal/TodoModal';
import TodoList from '../TodoList/TodoList';
import AddTodoButton from '../TodoList/AddTodoButton';
import ModalButton from '../Buttons/ModalButton';
import {ITodo} from '../TodoCard/TodoCard'
import styles from './Works.module.css';

const Works: React.FC = () => {
    const { todos, addTodo, editTodo } = useTodos();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedTodo, setSelectedTodo] = useState<ITodo | null>(null);
    const [isEditMode, setIsEditMode] = useState(false);

    // Обработчик просмотра деталей задачи
    const handleViewDetails = (todo: ITodo) => {
        setSelectedTodo(todo);
        setIsEditMode(true);
        setIsModalOpen(true);
    };

    // Обработчик закрытия модального окна
    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedTodo(null);
        setIsEditMode(false);
    };

    // Обработчик отправки формы (создание или редактирование)
    const handleSubmit = (todo: ITodo) => {
        if (isEditMode) {
            editTodo(todo); // Редактируем задачу
        } else {
            addTodo(todo); // Создаём новую задачу
        }
    };

    return (
        <div className={styles.works}>
            <h1>Список задач</h1>

            {/* Кнопка "Добавить задачу" */}
            <AddTodoButton onClick={() => setIsModalOpen(true)} />

            {/* Список задач */}
            <TodoList
                todos={todos}
                onToggleComplete={async (id, completed) => {
                    await editTodo({ ...todos.find(todo => todo.id === id)!, completed });
                }}
                onViewDetails={handleViewDetails}
            />

            {/* Модальное окно для добавления/редактирования задачи */}
            <TodoModal
                isOpen={isModalOpen}
                onClose={handleCloseModal}
                onSubmit={handleSubmit}
                initialData={selectedTodo}
                isEditMode={isEditMode}
            />

            <ModalButton />
        </div>
    );
};

export default Works;