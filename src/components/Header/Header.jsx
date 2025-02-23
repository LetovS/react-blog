import './Header.css';
import BurgerMenu from "../BurgerMenu/BurgerMenu.jsx";
import useWindowSize from "../../hooks/useWindowSize.js";
import Menu from "../Menu/Menu.jsx"; // Импортируем Link

const Header = () => {
    const { width } = useWindowSize(); // Получаем ширину окна
    return (
        <header className="header">
            {/* Логотип слева */}
            <div className="logo">
                <img src="../../../public/blog-icon.svg" alt="Логотип" />
            </div>

            {/* Меню справа */}
            {width < 768 ? <BurgerMenu /> : (
                <Menu/>
            )}

        </header>
    );
};

export default Header;