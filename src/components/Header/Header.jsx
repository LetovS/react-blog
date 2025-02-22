import './Header.css';
import { Link } from 'react-router-dom'; // Импортируем Link

const Header = () => {
    const MENU = [
        { title: 'На главную', to: '/' },
        { title: 'Работы', to: '/works' },
        { title: 'Отзывы', to: '/testimonials' },
        { title: 'Блог', to: '/blog' }
    ];

    return (
        <header className="header">
            {/* Логотип слева */}
            <div className="logo">
                <img src="../../../public/blog-icon.svg" alt="Логотип" />
            </div>

            {/* Меню справа */}
            <nav className="nav">
                <ul className="menu">
                    {MENU.map(({ title, to }, i) => (
                        <li key={`${i}-menu-item`} className="menu-item">
                            <Link to={to}>{title}</Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
};

export default Header;