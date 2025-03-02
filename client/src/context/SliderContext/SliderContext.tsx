import React, { createContext, useState } from 'react';
import {IProviderProps} from "../../interfaces/IProviderProps";

// Определяем тип для контекста
export interface ISliderContext {
    currentSlide: number;
    setCurrentSlide: (slide: number) => void;
    direction: string;
    setDirection: (direction: string) => void;
    autoplay: boolean;
    setAutoplay: (autoplay: boolean) => void;
}

// Создаем контекст с начальным значением
export const SliderContext = createContext<ISliderContext | undefined>(undefined);

export const SliderProvider: React.FC<IProviderProps> = ({ children }) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [direction, setDirection] = useState('right'); // Направление смены слайдов
    const [autoplay, setAutoplay] = useState(true); // Автопрокрутка

    return (
        <SliderContext.Provider value={{ currentSlide, setCurrentSlide, direction, setDirection, autoplay, setAutoplay }}>
            {children}
        </SliderContext.Provider>
    );
};