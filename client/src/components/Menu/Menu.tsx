import { Link } from 'react-router-dom';
import React, { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext/ThemeContext';
import './Menu.css';

// Определяем тип для контекста
interface IThemeContext {
    theme: string; // Тип для темы (можно уточнить до 'light' | 'dark', если темы фиксированы)
}

// Определяем тип для пункта меню
interface IMenuItem {
    title: string;
    to: string;
}

const Menu: React.FC = () => {
    const { theme } = useContext(ThemeContext) as IThemeContext; // Типизируем контекст

    // Массив пунктов меню
    const MENU: IMenuItem[] = [
        { title: 'На главную', to: '/' },
        { title: 'Работы', to: '/works' },
        { title: 'Отзывы', to: '/testimonials' },
        { title: 'Блог', to: '/blog' },
        { title: 'Галерея', to: '/gallery' },
    ];

    return (
        <nav className="nav">
            <ul className={`menu ${theme}`}>
                {MENU.map(({ title, to }, i) => (
                    <li key={`${i}-menu-item`} className="menu-item">
                        <Link to={to}>{title}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Menu;