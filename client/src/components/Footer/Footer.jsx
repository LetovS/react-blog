import { useContext } from 'react';
import { useNavigate } from 'react-router-dom'; // Импортируем useNavigate для перенаправления
import { ThemeContext } from '../../context/ThemeContext/ThemeContext.jsx'; // Импортируем ThemeContext
import './Footer.css';

const Footer = () => {
    const { theme } = useContext(ThemeContext); // Получаем текущую тему
    const navigate = useNavigate(); // Хук для навигации

    // Функция для выхода и удаления токена
    const handleLogout = () => {
        localStorage.removeItem('token'); // Удаляем токен из локального хранилища
        navigate('/'); // Перенаправляем пользователя на страницу входа
    };

    return (
        <footer className={`footer ${theme}`}>
            <p>© 2025 Мое React Приложение</p>
            <button onClick={handleLogout}>Выйти</button> {/* Кнопка для выхода */}
        </footer>
    );
};

export default Footer;