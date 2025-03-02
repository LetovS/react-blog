import React, { useContext } from 'react';
import { SliderContext, ISliderContext } from '../../context/SliderContext/SliderContext';
import Dots from './Dots';
import styles from './Slider.module.css';
import Slide from './Slide';
import { ISlide } from './Slide'; // Импортируем только ISlide, так как ISlideProps не используется

// Определяем тип для пропсов компонента Slider
interface ISliderProps {
    slides: ISlide[]; // Массив слайдов
}

const Slider: React.FC<ISliderProps> = ({ slides }) => {
    const { currentSlide, setCurrentSlide, setAutoplay } = useContext(SliderContext) as ISliderContext;
    const totalSlides = slides.length;

    // Обработчик изменения слайда
    const handleSlideChange = (index: number) => {
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

export default Slider;