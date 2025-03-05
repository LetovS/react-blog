import { useForm, SubmitHandler  } from 'react-hook-form';
import { useNavigate } from 'react-router-dom'; // Для перенаправления
import styles from './Form.module.css';
import React, {useState} from "react";
import {IFormData} from "../../interfaces/IFormData";


const Form: React.FC = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<IFormData>();

    const [apiError, setApiError] = useState('');
    const navigate = useNavigate(); // Хук для навигации

    const onSubmit: SubmitHandler<IFormData> = async (data) => {
        try {
            // Отправляем данные на сервер
            const response = await fetch('http://localhost:5000/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            const result = await response.json();

            if (response.ok) {
                navigate('/works'); // Перенаправляем на страницу /works
            } else {
                setApiError(result.message); // Ошибка регистрации
            }
        } catch (error) {
            console.error('Ошибка при отправке данных:', error);
            setApiError('Произошла ошибка при регистрации');
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
            <div className={styles.formGroup}>
                <label>Имя</label>
                <input
                    {...register('name', {
                        required: 'Имя обязательно',
                        pattern: {
                            value: /^[A-Za-zА-Яа-я\s]+$/i,
                            message: 'Имя должно содержать только буквы',
                        },
                    })}
                    placeholder="Введите ваше имя"
                />
                {errors.name && <span className={styles.error}>{errors.name.message}</span>}
            </div>
            <div className={styles.formGroup}>
                <label>Email</label>
                <input
                    {...register('email', {
                        required: 'Email обязателен',
                        pattern: {
                            value: /^\S+@\S+$/i,
                            message: 'Некорректный email',
                        },
                    })}
                    placeholder="Введите ваш email"
                />
                {errors.email && <span className={styles.error}>{errors.email.message}</span>}
            </div>
            <div className={styles.formGroup}>
                <label>Пароль</label>
                <input
                    type="password"
                    {...register('password', {
                        required: 'Пароль обязателен',
                        minLength: {
                            value: 6,
                            message: 'Минимум 6 символов',
                        },
                    })}
                    placeholder="Введите пароль"
                />
                {errors.password && <span className={styles.error}>{errors.password.message}</span>}
                {/* Отображение ошибки от API */}
                {apiError && <span className={styles.error}>{apiError}</span>}
            </div>
            <button type="submit" className={styles.submitButton}>
                Зарегистрироваться
            </button>
        </form>
    );
};

export default Form;