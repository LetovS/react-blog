import styles from './ThemeWrapper.module.css';
import  propTypes from 'prop-types';

const ThemeWrapper = ({ isDarkTheme, children }) => {
    return (
        <div className={isDarkTheme ? styles.dark : styles.light}>
            {children}
        </div>
    );
};
ThemeWrapper.propTypes = {
    isDarkTheme: propTypes.bool.isRequired,
    children: propTypes.node.isRequired
}
export default ThemeWrapper;