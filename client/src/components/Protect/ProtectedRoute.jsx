import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
    const token = localStorage.getItem('token'); // Получаем токен

    if (!token) {
        return <Navigate to="/" replace />; // Перенаправляем на главную страницу, если токена нет
    }

    return children; // Рендерим дочерние элементы, если токен есть
};


export default ProtectedRoute;