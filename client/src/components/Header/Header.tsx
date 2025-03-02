import './Header.css';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import useWindowSize from '../../hooks/useWindowSize';
import Menu from '../Menu/Menu';
import React, { useContext } from 'react';
import { ThemeContext, IThemeContext } from '../../context/ThemeContext/ThemeContext';

const Header: React.FC = () => {
    const { width } = useWindowSize();
    const { theme, toggleTheme } = useContext(ThemeContext) as IThemeContext; // Типизируем контекст

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
                    <input
                        type="checkbox"
                        checked={theme === 'dark'}
                        onChange={toggleTheme}
                    />
                    <span className="slider round"></span>
                </label>
            </div>
        </header>
    );
};

export default Header;