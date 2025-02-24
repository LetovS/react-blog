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
        // Если пользователь найден, возвращаем true
        res.status(200).json({ success: true, message: 'Авторизация успешна' });
    } else {
        // Если пользователь не найден, возвращаем false
        res.status(401).json({ success: false, message: 'Неверный email или пароль' });
    }
});

// Запуск сервера
app.listen(PORT, () => {
    console.log(`Сервер запущен на http://localhost:${PORT}`);
});