import PropTypes from 'prop-types'; // Импортируем prop-types
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import Main from '../Main/Main.jsx';
import useWindowSize from '../../hooks/useWindowSize.js';
import './Layout.css';

const Layout = ({ children }) => {
    const { width } = useWindowSize(); // Получаем ширину окна

    return (
        <div className="layout">
            <Header />
            {width < 768 ? <BurgerMenu /> : (
                <div></div>
            )}
            <main className="main-content">{children}</main>
            <Footer />
        </div>
    );
};

// Валидация пропсов
Layout.propTypes = {
    children: PropTypes.node.isRequired, // children должен быть React-нодой (элементом, строкой, числом и т.д.)
};

export default Layout;