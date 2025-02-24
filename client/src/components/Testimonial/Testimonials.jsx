import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext/ThemeContext.jsx';
import './Testimonials.css';

const Testimonials = () => {
    const { theme } = useContext(ThemeContext); // Получаем текущую тему

    // Пример данных об отзывах
    const testimonials = [
        {
            id: 1,
            name: 'Иван Иванов',
            text: 'Отличный сервис! Всё было сделано быстро и качественно. Рекомендую!',
            avatar: 'https://via.placeholder.com/50', // Заглушка для аватарки
        },
        {
            id: 2,
            name: 'Мария Петрова',
            text: 'Очень довольна результатом. Профессиональный подход и внимание к деталям.',
            avatar: 'https://via.placeholder.com/50',
        },
        {
            id: 3,
            name: 'Алексей Смирнов',
            text: 'Спасибо за отличную работу! Буду обращаться ещё.',
            avatar: 'https://via.placeholder.com/50',
        },
    ];

    return (
        <section className={`testimonials ${theme}`}>
            <h2 className="testimonials-title">Отзывы</h2>
            <div className="testimonials-list">
                {testimonials.map((testimonial) => (
                    <div key={testimonial.id} className="testimonial-item">
                        <img
                            src={testimonial.avatar}
                            alt={testimonial.name}
                            className="testimonial-avatar"
                        />
                        <div className="testimonial-content">
                            <h3 className="testimonial-name">{testimonial.name}</h3>
                            <p className="testimonial-text">{testimonial.text}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Testimonials;