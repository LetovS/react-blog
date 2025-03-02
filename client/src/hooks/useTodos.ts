import { useState, useEffect } from 'react';

interface ITodo {
    id: number;
    title: string;
    completed: boolean;
}

const useTodos = () => {
    const [todos, setTodos] = useState<ITodo[]>([]);

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

    // Добавление задачи
    const addTodo = async (newTodo: ITodo) => {
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
                setTodos([...todos, createdTodo]);
            } else {
                console.error('Ошибка при создании задачи');
            }
        } catch (error) {
            console.error('Ошибка при отправке данных:', error);
        }
    };

    // Редактирование задачи
    const editTodo = async (updatedTodo: ITodo) => {
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
                setTodos(todos.map(todo => (todo.id === updatedData.id ? updatedData : todo)));
            } else {
                console.error('Ошибка при редактировании задачи');
            }
        } catch (error) {
            console.error('Ошибка при отправке данных:', error);
        }
    };

    return { todos, addTodo, editTodo };
};

export default useTodos;