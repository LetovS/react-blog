import React from 'react';
import styles from './Slider.module.css';

// Определяем тип для слайда
export interface ISlide {
    image: string;
    title: string;
    description: string;
}

// Определяем тип для пропсов компонента Slide
export interface ISlideProps {
    slide: ISlide;
}

const Slide: React.FC<ISlideProps> = ({ slide }) => {
    return (
        <div className={styles.slide}>
            <div className={styles.imageContainer}>
                <img
                    src={slide.image}
                    alt={slide.title}
                    loading="lazy"
                    className={styles.image}
                />
            </div>
            <div className={styles.caption}>
                <h3>{slide.title}</h3>
                <p>{slide.description}</p>
            </div>
        </div>
    );
};

export default Slide;