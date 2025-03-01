import { createContext, useState } from 'react';
import PropTypes from "prop-types";

export const SliderContext = createContext();

export const SliderProvider = ({ children }) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [direction, setDirection] = useState('right'); // Направление смены слайдов
    const [autoplay, setAutoplay] = useState(true); // Автопрокрутка

    return (
        <SliderContext.Provider value={{ currentSlide, setCurrentSlide, direction, setDirection, autoplay, setAutoplay }}>
            {children}
        </SliderContext.Provider>
    );
};

SliderProvider.propTypes = {
    children: PropTypes.node.isRequired,
};