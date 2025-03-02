import React, { useState } from 'react';
import Modal from '../Modal/Modal'; // Убедитесь, что Modal также мигрирован на TypeScript

const ModalButton: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    return (
        <>
            <button className="open-modal-btn" onClick={() => setIsModalOpen(true)}>
                Написать мне
            </button>
            {isModalOpen && <Modal onClose={() => setIsModalOpen(false)} />}
        </>
    );
};

export default ModalButton;