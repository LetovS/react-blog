import { Link } from "react-router-dom";
import { useContext } from 'react';
import { ThemeContext } from "../../context/ThemeContext/ThemeContext.jsx";
import './Menu.css';

export default function Menu() {
    const { theme } = useContext(ThemeContext); // Получаем текущую тему

    const MENU = [
        { title: "На главную", to: "/" },
        { title: "Работы", to: "/works" },
        { title: "Отзывы", to: "/testimonials" },
        { title: "Блог", to: "/blog" },
        { title: "Галерея", to: "/gallery" },
    ];

    return (
        <nav className="nav">
            <ul className={`menu ${theme}`}> {/* Добавляем класс текущей темы */}
                {MENU.map(({ title, to }, i) => (
                    <li key={`${i}-menu-item`} className="menu-item">
                        <Link to={to}>{title}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}