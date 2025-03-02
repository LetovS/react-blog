import React from 'react';
import './BurgerMenu.css';
import {Link} from 'react-router-dom';

// Определяем тип для пунктов меню
interface MenuItem {
    label: string; // Название пункта меню
    path: string;  // Ссылка
}

// Массив пунктов меню
const menuItems: MenuItem[] = [
    { label: 'Главная', path: '/' },
    { label: 'Мои работы', path: '/works' },
    { label: 'Отзывы', path: '/testimonials' },
    { label: 'Блог', path: '/blog' },
    { label: 'Галерея', path: '/gallery' },
];

const BurgerMenu: React.FC = () => {
    return (
        <div className="burger-menu">
            <div className="burger-icon">☰</div>
            <nav className="burger-nav">
                {menuItems.map((item, index) => (
                    <Link key={index} to={item.path}>
                        {item.label}
                    </Link>
                ))}
            </nav>
        </div>
    );
};

export default BurgerMenu;