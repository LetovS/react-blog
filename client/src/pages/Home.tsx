import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Form from '../components/Form/Form'; // Форма регистрации
import LoginForm from '../components/Form/LoginForm'; // Форма логина
import Modal from '../components/Modal/Modal'; // Универсальное модальное окно
import styles from './Home.module.css';

const Home: React.FC = () => {
    const [isLogin, setIsLogin] = useState(true); // Состояние для переключения между формами
    const [isModalOpen, setIsModalOpen] = useState(false); // Состояние для открытия/закрытия модального окна
    const [modalContent, setModalContent] = useState<React.ReactNode>(null); // Контент модального окна

    const openModal = (content: React.ReactNode) => {
        setModalContent(content);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

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
                    onClick={() => openModal(<Form />)}
                    className={!isLogin ? styles.activeButton : styles.button}
                >
                    Регистрация
                </button>
                <button
                    onClick={() => openModal(<LoginForm />)}
                    className={isLogin ? styles.activeButton : styles.button}
                >
                    Вход
                </button>
            </motion.div>

            {/* Модальное окно */}
            {isModalOpen && (
                <Modal onClose={closeModal}>
                    {modalContent}
                </Modal>
            )}
        </motion.div>
    );
};

export default Home;