import {useState} from "react";
import Modal from "../Modal/Modal.jsx";

export default function ModalButton() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <button className="open-modal-btn" onClick={() => setIsModalOpen(true)}>
                Написать мне
            </button>
            {isModalOpen && <Modal onClose={() => setIsModalOpen(false)} />}
        </>
    );
}