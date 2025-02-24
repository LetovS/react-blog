import { useContext } from 'react';
import { SliderContext } from './SliderContext';
import Slide from './Slide';
import Dots from './Dots';
import styles from './Slider.module.css';
import PropTypes from "prop-types";

const getDirection = (currentSlide, nextSlide) => {
    if (nextSlide > currentSlide) {
        return 'right'; // Движение вправо
    } else if (nextSlide < currentSlide) {
        return 'left'; // Движение влево
    }
    return null; // Направление не изменилось
};

const Slider = ({ slides }) => {
    const { currentSlide, setCurrentSlide, setAutoplay } = useContext(SliderContext);
    const totalSlides = slides.length;

    const handleSlideChange = (index) => {
        const direction = getDirection(currentSlide, index, totalSlides);
        console.log(`Направление: ${direction}`); // Логируем направление (опционально)
        setCurrentSlide(index);
        setAutoplay(false); // Отключаем автопрокрутку при ручном переключении
    };

    return (
        <div className={styles.slider}>
            <div
                className={styles.slides}
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
                {slides.map((slide, index) => (
                    <Slide key={index} slide={slide} />
                ))}
            </div>
            <Dots totalSlides={totalSlides} onChangeSlide={handleSlideChange} />
        </div>
    );
};

// Валидация пропсов
Slider.propTypes = {
    slides: PropTypes.arrayOf(PropTypes.object).isRequired, // или PropTypes.arrayOf(PropTypes.string), если слайды — строки
};


export default Slider;