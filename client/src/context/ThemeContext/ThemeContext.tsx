import React, { createContext, useState } from 'react';
import { IProviderProps } from '../../interfaces/IProviderProps';

// Определяем интерфейс для темы
interface ITheme {
    theme: 'light' | 'dark';
}

// Определяем тип для значений контекста
export interface IThemeContext {
    theme: ITheme['theme']; // Используем тип из интерфейса ITheme
    toggleTheme: () => void; // Функция для переключения темы
}

// Создаем контекст с начальным значением
export const ThemeContext = createContext<IThemeContext>({
    theme: 'light', // Начальное значение темы
    toggleTheme: () => {}, // Заглушка для функции
});

export const ThemeProvider: React.FC<IProviderProps> = ({ children }) => {
    const [theme, setTheme] = useState<ITheme['theme']>('light'); // По умолчанию светлая тема

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};