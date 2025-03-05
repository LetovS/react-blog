import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import styles from './Form.module.css';

interface IFeedbackFormData {
    name: string;
    email: string;
    message: string;
}

const FeedbackForm: React.FC = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<IFeedbackFormData>();

    const onSubmit: SubmitHandler<IFeedbackFormData> = (data) => {
        console.log('Форма обратной связи отправлена:', data);
        // Здесь можно добавить логику отправки данных на сервер
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
            <div className={styles.formGroup}>
                <label>Имя</label>
                <input
                    {...register('name', { required: 'Имя обязательно' })}
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
                <label>Сообщение</label>
                <textarea
                    {...register('message', { required: 'Сообщение обязательно' })}
                    placeholder="Введите ваше сообщение"
                />
                {errors.message && <span className={styles.error}>{errors.message.message}</span>}
            </div>
            <button type="submit" className={styles.submitButton}>
                Отправить
            </button>
        </form>
    );
};

export default FeedbackForm;