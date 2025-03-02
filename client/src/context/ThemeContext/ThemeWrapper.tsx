import React from 'react';
import styles from './ThemeWrapper.module.css';

// Определяем тип для пропсов
interface ThemeWrapperProps {
    isDarkTheme: boolean;
    children: React.ReactNode;
}

const ThemeWrapper: React.FC<ThemeWrapperProps> = ({ isDarkTheme, children }) => {
    return (
        <div className={isDarkTheme ? styles.dark : styles.light}>
            {children}
        </div>
    );
};
export default ThemeWrapper;