import { useContext } from 'react';
import { SliderContext } from '../../context/SliderContext/SliderContext.jsx';
import styles from './Slider.module.css';
import PropTypes from 'prop-types';

const Dots = ({ totalSlides, onChangeSlide }) => {
    const { currentSlide, setAutoplay } = useContext(SliderContext);

    const handleDotClick = (index) => {
        onChangeSlide(index); // Вызываем функцию для смены слайда
        setAutoplay(false); // Отключаем автопрокрутку
    };

    return (
        <div className={styles.dots}>
            {Array.from({ length: totalSlides }).map((_, index) => (
                <button
                    key={index}
                    className={`${styles.dot} ${index === currentSlide ? styles.active : ''}`}
                    onClick={() => handleDotClick(index)}
                />
            ))}
        </div>
    );
};

Dots.propTypes = {
    totalSlides: PropTypes.number.isRequired, // totalSlides должно быть числом
    onChangeSlide: PropTypes.func.isRequired, // Функция для смены слайда
};

export default Dots;