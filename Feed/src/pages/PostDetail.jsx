import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

const PostDetail = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        setLoading(true);
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
        
        if (!response.ok) {
          throw new Error('Пост не найден');
        }
        
        const data = await response.json();
        setPost(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchPost();
    }
  }, [id]);

  if (loading) {
    return (
      <div style={{ textAlign: 'center', padding: '2rem' }}>
        <p>Загрузка поста...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <div style={{ 
          backgroundColor: '#f8d7da', 
          color: '#721c24', 
          padding: '1rem',
          borderRadius: '4px',
          marginBottom: '1rem'
        }}>
          Ошибка: {error}
        </div>
        <Link 
          to="/posts"
          style={{
            color: '#007bff',
            textDecoration: 'none'
          }}
        >
          ← Вернуться к постам
        </Link>
      </div>
    );
  }

  return (
    <div>
      <div style={{ marginBottom: '2rem' }}>
        <Link 
          to="/posts"
          style={{
            color: '#007bff',
            textDecoration: 'none',
            marginBottom: '2rem',
            display: 'inline-block'
          }}
        >
          ← Назад к списку постов
        </Link>
      </div>

      <article>
        <h1 style={{ marginBottom: '1rem' }}>{post.title}</h1>
        
        <div style={{ 
          backgroundColor: '#f8f9fa', 
          padding: '1rem',
          borderRadius: '4px',
          marginBottom: '1.5rem'
        }}>
          <h3 style={{ margin: '0 0 0.5rem 0', color: '#495057' }}>
            ID из URL через useParams():
          </h3>
          <p style={{ 
            margin: 0, 
            fontSize: '1.5rem', 
            fontWeight: 'bold',
            color: '#007bff'
          }}>
            {id}
          </p>
        </div>

        <div style={{ 
          backgroundColor: 'white',
          padding: '1.5rem',
          border: '1px solid #dee2e6',
          borderRadius: '4px',
          marginBottom: '1.5rem'
        }}>
          <p style={{ lineHeight: '1.6', margin: 0 }}>
            {post.body}
          </p>
        </div>

        <div style={{ 
          backgroundColor: '#e7f3ff',
          padding: '1rem',
          borderRadius: '4px',
          border: '1px solid #b3d7ff'
        }}>
          <p style={{ margin: 0, color: '#004085' }}>
            <strong>ID поста из API:</strong> {post.id} | 
            <strong> ID автора:</strong> {post.userId}
          </p>
        </div>
      </article>
    </div>
  );
};

export default PostDetail;