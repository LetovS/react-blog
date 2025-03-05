import React, {useState, useEffect, FC} from 'react';
import { useParams } from 'react-router-dom';
import './BlogPost.css';

export interface IPost{
    id: number;
    title: string;
    body: string;
}

const BlogPost: React.FC = () => {
    const { id } = useParams(); // Получаем id из URL
    const [post, setPost] = useState<IPost>(); // Начальное состояние — null

    useEffect(() => {
        // Запрос к API для получения конкретной статьи
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then((response) => response.json())
            .then((data) => setPost(data))
            .catch((error) => console.error('Ошибка при загрузке данных:', error));
    }, [id]); // Зависимость от id, чтобы запрос выполнялся при изменении id

    if (!post) return <div>Загрузка...</div>; // Пока данные загружаются

    return (
        <div className="blog-post">
            <h1>{post.title}</h1>
            <p>{post.body}</p>
        </div>
    );
};

export default BlogPost;