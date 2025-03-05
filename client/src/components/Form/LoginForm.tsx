import React, { useState } from 'react';
import { useForm,SubmitHandler } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import styles from './Form.module.css';

interface ILoginFormData {
    email: string;
    password: string;
}


const LoginForm: React.FC = ()  => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<ILoginFormData>();

    const [apiError, setApiError] = useState('');
    const navigate = useNavigate();

    const onSubmit: SubmitHandler<ILoginFormData> = async (data) => {
        try {
            const response = await fetch('http://localhost:5000/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            const result = await response.json();

            if (response.ok) {
                localStorage.setItem('token', result.token); // Сохраняем токен
                navigate('/works'); // Перенаправляем на страницу /works
            } else {
                setApiError(result.message); // Ошибка авторизации
            }
        } catch (error) {
            console.error('Ошибка при отправке данных:', error);
            setApiError('Произошла ошибка при авторизации');
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
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
                {apiError && <span className={styles.error}>{apiError}</span>}
            </div>
            <button type="submit" className={styles.submitButton}>
                Войти
            </button>
        </form>
    );
};

export default LoginForm;