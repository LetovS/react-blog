import { Navigate } from 'react-router-dom';
import  React from 'react';
import {IProviderProps} from "../../interfaces/IProviderProps";

const ProtectedRoute: React.FC<IProviderProps> = ({ children }) => {
    const token = localStorage.getItem('token'); // Получаем токен

    if (!token) {
        return <Navigate to="/" replace />;
    }

    return children;
};

export default ProtectedRoute;