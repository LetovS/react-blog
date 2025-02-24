import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext/ThemeContext.jsx'; // Импортируем ThemeContext
import './Footer.css';

const Footer = () => {
    const { theme } = useContext(ThemeContext); // Получаем текущую тему

    return (
        <footer className={`footer ${theme}`}>
            <p>© 2025 Мое React Приложение</p>
        </footer>
    );
};

export default Footer;