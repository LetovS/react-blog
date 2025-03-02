import  React from 'react';
import Slider from '../Slider/Slider.js';
import { SliderProvider } from '../../context/SliderContext/SliderContext';

export interface Slide {
    image: string;
    title: string;
    description: string;
}

const Works: React.FC = () => {
    const slides: Slide[] = [
        {
            image: 'https://images.unsplash.com/photo-1740341459122-cc16499650bc?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            title: 'Санкт-Петербург',
            description: 'Описание для проекта 1',
        },
        {
            image: 'https://images.unsplash.com/photo-1736618626127-e833113e7b88?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            title: 'Санторини',
            description: 'Описание для проекта 2',
        },
        {
            image: 'https://images.unsplash.com/photo-1738102449463-638de653a808?q=80&w=1848&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            title: 'Двйвинг',
            description: 'Описание для проекта 3',
        },
    ];

    return (
        <div>
            <h1>Мои работы</h1>
            <SliderProvider>
                <Slider slides={slides} />
            </SliderProvider>
        </div>
    );
};

export default Works;