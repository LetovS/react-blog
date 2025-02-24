
import { motion } from 'framer-motion';
import Form from '../components/Form/Form.jsx';
import styles from './Home.module.css';

const Home = () => {
    return (
        <motion.div
            className={styles.home}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            <motion.h1
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
            >
                Добро пожаловать на наш сайт!
            </motion.h1>
            <motion.p
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
            >
                Начните своё путешествие с регистрации.
            </motion.p>
            <Form />
        </motion.div>
    );
};

export default Home;