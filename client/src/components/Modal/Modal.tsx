import './Modal.css';
import React from "react";
import {IButtonClose} from "../../interfaces/IButtonClick";

const Modal: React.FC<IButtonClose> = ({ onClose }) => {
    return (
        <div className="modal-overlay">
            <div className="modal">
                <button className="close-btn" onClick={onClose}>×</button>
                <h2>Форма обратной связи</h2>
                <form className="modal-form">
                    <label>
                        Имя:
                        <input type="text" name="name" placeholder="Введите ваше имя" />
                    </label>
                    <label>
                        Email:
                        <input type="email" name="email" placeholder="Введите ваш email" />
                    </label>
                    <label>
                        Сообщение:
                        <textarea name="message" placeholder="Введите ваше сообщение" />
                    </label>
                    <button type="submit" className="submit-btn">Отправить</button>
                </form>
            </div>
        </div>
    );
};

export default Modal;