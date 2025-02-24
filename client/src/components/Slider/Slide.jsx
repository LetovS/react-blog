import styles from './Slider.module.css';
import PropTypes from "prop-types";

const Slide = ({ slide }) => {
    return (
        <div className={styles.slide}>
            <div className={styles.imageContainer}>
                <img src={slide.image} alt={slide.title} loading="lazy" className={styles.image} />
            </div>
            <div className={styles.caption}>
                <h3>{slide.title}</h3>
                <p>{slide.description}</p>
            </div>
        </div>
    );
};

Slide.propTypes = {
    slide: PropTypes.arrayOf(PropTypes.object).isRequired, // или PropTypes.arrayOf(PropTypes.string), если слайды — строки
};

export default Slide;