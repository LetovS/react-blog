import './Modal.css';
import React from "react";

interface IModalProps {
    onClose: () => void;
    children: React.ReactNode;
}

const Modal: React.FC<IModalProps> = ({ onClose, children }) => {
    return (
        <div className="modal-overlay">
            <div className="modal">
                <button className="close-btn" onClick={onClose}>×</button>
                {children}
            </div>
        </div>
    );
};

export default Modal;