import React, { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchParams] = useSearchParams();
  const filter = searchParams.get('filter');

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        
        if (!response.ok) {
          throw new Error(`Ошибка ${response.status}: Не удалось загрузить посты`);
        }
        
        const data = await response.json();
        setPosts(data.slice(0, 3));
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) {
    return (
      <div style={{ textAlign: 'center', padding: '2rem' }}>
        <p>Загрузка постов...</p>
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
          <h3 style={{ margin: '0 0 0.5rem 0' }}>Ошибка загрузки постов</h3>
          <p style={{ margin: 0 }}>{error}</p>
        </div>
        <button 
          onClick={() => window.location.reload()}
          style={{
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            padding: '0.5rem 1rem',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Попробовать снова
        </button>
      </div>
    );
  }

  return (
    <div>
      <h1 style={{ marginBottom: '1rem' }}>Список постов</h1>
      
      {filter && (
        <div style={{
          backgroundColor: '#d1ecf1',
          color: '#0c5460',
          padding: '0.75rem',
          borderRadius: '4px',
          marginBottom: '1.5rem',
          border: '1px solid #bee5eb'
        }}>
          Фильтр: {filter}
        </div>
      )}

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        {posts.map(post => (
          <div 
            key={post.id}
            style={{
              border: '1px solid #dee2e6',
              borderRadius: '4px',
              padding: '1.5rem',
              backgroundColor: 'white'
            }}
          >
            <h3 style={{ margin: '0 0 1rem 0' }}>{post.title}</h3>
            <p style={{ margin: '0 0 1rem 0', color: '#6c757d' }}>
              {post.body.substring(0, 100)}...
            </p>
            <Link 
              to={`/posts/${post.id}`}
              style={{
                color: '#007bff',
                textDecoration: 'none',
                fontWeight: '500'
              }}
            >
              Читать подробнее →
            </Link>
          </div>
        ))}
      </div>

      <div style={{ marginTop: '2rem' }}>
        <Link 
          to="/"
          style={{
            color: '#6c757d',
            textDecoration: 'none'
          }}
        >
          ← Назад на главную
        </Link>
      </div>
    </div>
  );
};

export default Posts;