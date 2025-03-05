import { useState } from 'react';
import { motion } from 'framer-motion';
import Form from '../components/Form/Form.tsx'; // Импортируем форму регистрации
import LoginForm from '../components/Form/LoginForm.tsx'; // Импортируем форму логина
import styles from './Home.module.css'; // Предположим, что стили находятся в Home.module.css

const Home = () => {
    const [isLogin, setIsLogin] = useState(false); // Состояние для переключения между формами

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
                {isLogin ? 'Войдите в свой аккаунт' : 'Начните своё путешествие с регистрации.'}
            </motion.p>

            {/* Кнопки для переключения между формами */}
            <motion.div
                className={styles.buttons}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
            >
                <button
                    onClick={() => setIsLogin(false)}
                    className={!isLogin ? styles.activeButton : styles.button}
                >
                    Регистрация
                </button>
                <button
                    onClick={() => setIsLogin(true)}
                    className={isLogin ? styles.activeButton : styles.button}
                >
                    Вход
                </button>
            </motion.div>

            {/* Отображение формы в зависимости от состояния */}
            <motion.div
                key={isLogin ? 'login' : 'register'} // Анимация при переключении
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                {isLogin ? <LoginForm /> : <Form />}
            </motion.div>
        </motion.div>
    );
};

export default Home;