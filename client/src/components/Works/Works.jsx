import { useState, useEffect } from 'react';
import TodoCard from '../TodoCard/TodoCard.jsx';
import TodoModal from '../Modal/TodoModal.jsx';
import styles from './Works.module.css';

const Works = () => {
    const [todos, setTodos] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedTodo, setSelectedTodo] = useState(null); // Выбранная задача для редактирования
    const [isEditMode, setIsEditMode] = useState(false); // Режим редактирования

    // Загрузка списка задач
    useEffect(() => {
        const fetchTodos = async () => {
            try {
                const response = await fetch('http://localhost:5000/todo-list');
                if (!response.ok) {
                    throw new Error('Ошибка при загрузке задач');
                }
                const data = await response.json();
                setTodos(data);
            } catch (error) {
                console.error('Ошибка при загрузке задач:', error);
            }
        };

        fetchTodos();
    }, []);

    // Обработчик добавления задачи
    const handleAddTodo = async (newTodo) => {
        try {
            const response = await fetch('http://localhost:5000/todo', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newTodo),
            });

            if (response.ok) {
                const createdTodo = await response.json();
                setTodos([...todos, createdTodo]); // Добавляем новую задачу в список
            } else {
                console.error('Ошибка при создании задачи');
            }
        } catch (error) {
            console.error('Ошибка при отправке данных:', error);
        }
    };

    // Обработчик редактирования задачи
    const handleEditTodo = async (updatedTodo) => {
        try {
            const response = await fetch(`http://localhost:5000/todo/${updatedTodo.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updatedTodo),
            });

            if (response.ok) {
                const updatedData = await response.json();
                setTodos(todos.map(todo => (todo.id === updatedData.id ? updatedData : todo))); // Обновляем задачу в списке
            } else {
                console.error('Ошибка при редактировании задачи');
            }
        } catch (error) {
            console.error('Ошибка при отправке данных:', error);
        }
    };

    // Обработчик просмотра деталей задачи
    const handleViewDetails = (todo) => {
        setSelectedTodo(todo); // Устанавливаем выбранную задачу
        setIsEditMode(true); // Включаем режим редактирования
        setIsModalOpen(true); // Открываем модальное окно
    };

    // Обработчик закрытия модального окна
    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedTodo(null);
        setIsEditMode(false);
    };

    // Обработчик отправки формы (создание или редактирование)
    const handleSubmit = (todo) => {
        if (isEditMode) {
            handleEditTodo(todo); // Редактируем задачу
        } else {
            handleAddTodo(todo); // Создаём новую задачу
        }
    };

    return (
        <div className={styles.works}>
            <h1>Список задач</h1>

            {/* Кнопка "Добавить задачу" */}
            <button onClick={() => setIsModalOpen(true)} className={styles.addButton}>
                Добавить задачу
            </button>

            {/* Список задач */}
            <div className={styles.todoList}>
                {todos.map((todo) => (
                    <TodoCard
                        key={todo.id}
                        todo={todo}
                        onViewDetails={handleViewDetails} // Передаём функцию для просмотра деталей
                    />
                ))}
            </div>

            {/* Модальное окно для добавления/редактирования задачи */}
            <TodoModal
                isOpen={isModalOpen}
                onClose={handleCloseModal}
                onSubmit={handleSubmit}
                initialData={selectedTodo} // Передаём данные выбранной задачи
                isEditMode={isEditMode} // Режим редактирования
            />
        </div>
    );
};

export default Works;