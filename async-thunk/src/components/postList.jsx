import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPosts } from '../features/posts/postSlice';

const PostsList = () => {
  const dispatch = useDispatch();
  const { posts, status, error } = useSelector((state) => state.posts);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchPosts());
    }
  }, [status, dispatch]);

  let content;

  if (status === 'loading') {
    content = (
      <div style={{ 
        textAlign: 'center', 
        padding: '3rem',
        color: '#007bff'
      }}>
        <div style={{ 
          width: '50px', 
          height: '50px', 
          border: '5px solid #f3f3f3',
          borderTop: '5px solid #007bff',
          borderRadius: '50%',
          animation: 'spin 1s linear infinite',
          margin: '0 auto 1rem'
        }}></div>
        <p style={{ fontSize: '1.2rem' }}>Загрузка постов...</p>
        <style>{`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}</style>
      </div>
    );
  } else if (status === 'failed') {
    content = (
      <div style={{ 
        backgroundColor: '#f8d7da', 
        color: '#721c24', 
        padding: '1.5rem',
        borderRadius: '8px',
        textAlign: 'center',
        margin: '2rem 0'
      }}>
        <h3 style={{ margin: '0 0 1rem 0' }}>Ошибка загрузки</h3>
        <p style={{ margin: 0 }}>{error}</p>
        <button 
          onClick={() => dispatch(fetchPosts())}
          style={{
            backgroundColor: '#dc3545',
            color: 'white',
            border: 'none',
            padding: '0.75rem 1.5rem',
            borderRadius: '4px',
            cursor: 'pointer',
            marginTop: '1rem'
          }}
        >
          Попробовать снова
        </button>
      </div>
    );
  } else if (status === 'succeeded') {
    content = (
      <div>
        <h2 style={{ 
          marginBottom: '1.5rem',
          textAlign: 'center',
          color: '#333'
        }}>
          Список постов ({posts.length})
        </h2>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {posts.map((post) => (
            <div
              key={post.id}
              style={{
                backgroundColor: 'white',
                border: '1px solid #e9ecef',
                borderRadius: '8px',
                padding: '1.5rem',
                boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
                transition: 'transform 0.2s ease'
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
            >
              <h3 style={{ 
                margin: '0 0 0.75rem 0',
                color: '#007bff'
              }}>
                {post.title}
              </h3>
              <p style={{ 
                margin: '0 0 1rem 0',
                color: '#666',
                lineHeight: '1.5'
              }}>
                {post.body}
              </p>
              <div style={{ 
                display: 'flex', 
                justifyContent: 'space-between',
                color: '#6c757d',
                fontSize: '0.9rem'
              }}>
                <span>ID: {post.id}</span>
                <span>Автор: {post.userId}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div style={{ 
      maxWidth: '800px', 
      margin: '0 auto', 
      padding: '2rem'
    }}>
      <h1 style={{ 
        textAlign: 'center', 
        marginBottom: '2rem',
        color: '#333'
      }}>
        📝 Список постов с API
      </h1>
      
      <div style={{ 
        backgroundColor: '#f8f9fa',
        padding: '1.5rem',
        borderRadius: '8px',
        marginBottom: '2rem',
        textAlign: 'center'
      }}>
        <p style={{ margin: '0 0 1rem 0' }}>
          Данные загружаются с <strong>jsonplaceholder.typicode.com</strong>
        </p>
        <button 
          onClick={() => dispatch(fetchPosts())}
          disabled={status === 'loading'}
          style={{
            backgroundColor: status === 'loading' ? '#6c757d' : '#28a745',
            color: 'white',
            border: 'none',
            padding: '0.75rem 1.5rem',
            borderRadius: '4px',
            cursor: status === 'loading' ? 'not-allowed' : 'pointer',
            fontSize: '1rem'
          }}
        >
          {status === 'loading' ? 'Загрузка...' : 'Обновить посты'}
        </button>
      </div>

      {content}

      <div style={{ 
        marginTop: '2rem', 
        padding: '1rem',
        backgroundColor: '#e7f3ff',
        borderRadius: '8px',
        border: '1px solid #b3d7ff',
        textAlign: 'center'
      }}>
        <p style={{ margin: 0, color: '#004085' }}>
          <strong>Статус:</strong> {status === 'idle' ? 'Ожидание' : 
                                   status === 'loading' ? 'Загрузка' : 
                                   status === 'succeeded' ? 'Успешно' : 'Ошибка'}
        </p>
      </div>
    </div>
  );
};

export default PostsList;