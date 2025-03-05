import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {IPost} from '../BlogPost/BlogPost';
import './Blog.css';

const Blog: React.FC = () => {
    const [posts, setPosts] = useState<IPost []>([]);

    useEffect(() => {
        // Запрос к API
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((response) => response.json())
            .then((data) => setPosts(data))
            .catch((error) => console.error('Ошибка при загрузке данных:', error));
    }, []);

    return (
        <div className="blog">
            <h1>Блог</h1>
            <ul >
                {posts.map((post) => (
                    <li key={post.id} className="blog-list">
                        <Link to={`/blog/${post.id}`} className="post-link">
                            <h2>{post.title}</h2>
                            <p><i>{post.body}</i></p>
                        </Link>

                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Blog;