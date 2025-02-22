import PropTypes from 'prop-types'; // Импортируем prop-types
import './Modal.css';

const Modal = ({ onClose }) => {
    return (
        <div className="modal-overlay">
            <div className="modal">
                <button className="close-btn" onClick={onClose}>×</button>
                <h2>Форма обратной связи</h2>
                <form>
                    <label>
                        Имя:
                        <input type="text" name="name" />
                    </label>
                    <label>
                        Email:
                        <input type="email" name="email" />
                    </label>
                    <label>
                        Сообщение:
                        <textarea name="message" />
                    </label>
                    <button type="submit">Отправить</button>
                </form>
            </div>
        </div>
    );
};

// Валидация пропсов
Modal.propTypes = {
    onClose: PropTypes.func.isRequired, // onClose должен быть функцией и обязателен
};

export default Modal;