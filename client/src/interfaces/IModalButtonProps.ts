import React from "react";

export interface IModalButtonProps {
    buttonText: string; // Текст кнопки
    children: React.ReactNode; // Контент модального окна
    className?: string;
}