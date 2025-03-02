import React, { useContext } from 'react';
import { SliderContext, ISliderContext } from '../../context/SliderContext/SliderContext';
import styles from './Slider.module.css';

// Определяем тип для пропсов компонента Dots
interface IDotsProps {
    totalSlides: number; // Количество слайдов
    onChangeSlide: (index: number) => void; // Функция для смены слайда
}

const Dots: React.FC<IDotsProps> = ({ totalSlides, onChangeSlide }) => {
    const { currentSlide, setAutoplay } = useContext(SliderContext) as ISliderContext;

    // Обработчик клика по точке
    const handleDotClick = (index: number) => {
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

export default Dots;