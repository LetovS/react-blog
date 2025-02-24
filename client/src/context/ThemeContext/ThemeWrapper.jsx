import styles from './ThemeWrapper.module.css';

const ThemeWrapper = ({ isDarkTheme, children }) => {
    return (
        <div className={isDarkTheme ? styles.dark : styles.light}>
            {children}
        </div>
    );
};

export default ThemeWrapper;