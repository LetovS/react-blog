const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors()); // Разрешаем запросы с других доменов
app.use(bodyParser.json()); // Парсим JSON-тело запроса
// Кэш (имитация базы данных)
const usersCache = [
    { email: 'demo@demo.com', password: '123456' },
];


class Todo {
    constructor(id, title, startTime, endTime, description, result) {
        this.id = id;
        this.title = title;
        this.startTime = startTime;
        this.endTime = endTime;
        this.description = description;
        this.result = result;
    }
}



const todos = [
    new Todo(1, "Do something nice for someone you care about", "10:00", "11:00", "Помочь другу", "Выполнено"),
    new Todo(2, "Memorize a poem", "12:00", "13:00", "Выучить стихотворение", "В процессе"),
    // Добавьте остальные задачи
];


app.get('/todo-list', (req, res) => {
    console.log('Запрос на /todo-list получен'); // Лог для отладки
    res.status(200).json(todos); // Возвращаем список дел в формате JSON
});

app.get('/todo-list/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const todo = todos.find(t => t.id === id);

    if (todo) {
        res.status(200).json(todo);
    } else {
        res.status(404).json({ message: 'Задача не найдена' });
    }
});

app.post('/todo', (req, res) => {
    const { title, startTime, endTime, description, result } = req.body;

    if (!title || !startTime || !endTime || !description || !result) {
        return res.status(400).json({ message: 'Все поля обязательны' });
    }

    const newTodo = new Todo(
        todos.length + 1, // Генерация нового ID
        title,
        startTime,
        endTime,
        description,
        result
    );

    todos.push(newTodo);
    res.status(201).json(newTodo);
});


app.put('/todo/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const updatedTodo = req.body;

    const index = todos.findIndex(todo => todo.id === id);

    if (index === -1) {
        return res.status(404).json({ message: 'Задача не найдена' });
    }

    todos[index] = { ...todos[index], ...updatedTodo }; // Обновляем задачу
    res.status(200).json(todos[index]); // Возвращаем обновлённую задачу
});

// Роут для регистрации
app.post('/register', (req, res) => {
    const { name, email, password } = req.body;

    // Проверка, существует ли пользователь с таким email
    const userExists = usersCache.some((user) => user.email === email);
    if (userExists) {
        return res.status(400).json({ message: 'Пользователь с таким email уже существует' });
    }

    // Сохраняем пользователя в кэш
    usersCache.push({ name, email, password });

    // Возвращаем успешный ответ
    res.status(200).json({ message: 'Регистрация прошла успешно!' });
});

// Роут для авторизации
app.post('/login', (req, res) => {
    const { email, password } = req.body;

    // Поиск пользователя в кэше
    const user = usersCache.find((user) => user.email === email && user.password === password);

    if (user) {
        // Если пользователь найден, возвращаем токен
        const token = 'test-token-123'; // Тестовый токен
        res.status(200).json({ success: true, token, message: 'Авторизация успешна' });
    } else {
        // Если пользователь не найден, возвращаем ошибку
        res.status(401).json({ success: false, message: 'Неверный email или пароль' });
    }
});

// Запуск сервера
app.listen(PORT, () => {
    console.log(`Сервер запущен на http://localhost:${PORT}`);
});


