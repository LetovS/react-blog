import { Link } from "react-router-dom";
import './Menu.css';

export default function Menu() {
    const MENU = [
        { title: "На главную", to: "/" },
        { title: "Работы", to: "/works" },
        { title: "Отзывы", to: "/testimonials" },
        { title: "Блог", to: "/blog" },
    ];
    return (
        <nav className="nav">
            <ul className="menu">
                {MENU.map(({title, to}, i) => (
                    <li key={`${i}-menu-item`} className="menu-item">
                        <Link to={to}>{title}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}