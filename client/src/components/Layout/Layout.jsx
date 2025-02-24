import PropTypes from 'prop-types'; // Импортируем prop-types
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './Layout.css';

const Layout = ({ children }) => {
    return (
        <div className="layout">
            <Header />
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