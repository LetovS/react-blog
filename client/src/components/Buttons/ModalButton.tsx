import React, { useState } from 'react';
import Modal from '../Modal/Modal';
import {IModalButtonProps} from "../../interfaces/IModalButtonProps"; // Убедитесь, что Modal также мигрирован на TypeScript

const ModalButton: React.FC<IModalButtonProps> = ({ buttonText, children, className }) => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    return (
        <>
            {/* Кнопка для открытия модального окна */}
            <button className={className} onClick={() => setIsModalOpen(true)}>
                {buttonText}
            </button>

            {/* Модальное окно */}
            {isModalOpen && (
                <Modal onClose={() => setIsModalOpen(false)}>
                    {children}
                </Modal>
            )}
        </>
    );
};

export default ModalButton;