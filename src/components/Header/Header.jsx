import './Header.css';
import BurgerMenu from "../BurgerMenu/BurgerMenu.jsx";
import useWindowSize from "../../hooks/useWindowSize.js";
import Menu from "../Menu/Menu.jsx";
import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext/ThemeContext.jsx'; // Импортируем ThemeContext

const Header = () => {
    const { width } = useWindowSize();
    const { theme, toggleTheme } = useContext(ThemeContext); // Получаем тему и функцию для её переключения

    return (
        <header className={`header ${theme}`}>
            {/* Логотип слева */}
            <div className="logo">
                <img src="../../../public/blog-icon.svg" alt="Логотип" />
            </div>

            {/* Меню справа */}
            {width < 768 ? <BurgerMenu /> : <Menu />}

            {/* Слайдер для смены темы */}
            <div className="theme-switcher">
                <label className="switch">
                    <input type="checkbox" checked={theme === 'dark'} onChange={toggleTheme} />
                    <span className="slider round"></span>
                </label>
            </div>
        </header>
    );
};

export default Header;