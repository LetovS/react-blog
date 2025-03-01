import './BurgerMenu.css';

const BurgerMenu = () => {
    return (
        <div className="burger-menu">
            <div className="burger-icon">☰</div>
            <nav className="burger-nav">
                <a href="/">Главная</a>
                <a href="/works">Мои работы</a>
                <a href="/testimonials">Отзывы</a>
                <a href="/blog">Блог</a>
                <a href="/gallery">Галерея</a>
            </nav>
        </div>
    );
};

export default BurgerMenu;