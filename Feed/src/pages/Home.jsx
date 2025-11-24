import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const handleGoToPosts = () => {
    navigate('/posts');
  };

  return (
    <div style={{ textAlign: 'center', padding: '2rem 0' }}>
      <h1 style={{ marginBottom: '1rem' }}>Главная страница</h1>
      <p style={{ marginBottom: '2rem', color: '#6c757d' }}>
        Добро пожаловать в приложение "Лента постов"
      </p>
      
      <button 
        onClick={handleGoToPosts}
        style={{
          backgroundColor: '#007bff',
          color: 'white',
          border: 'none',
          padding: '0.75rem 1.5rem',
          borderRadius: '4px',
          cursor: 'pointer',
          fontSize: '1rem'
        }}
      >
        Перейти к постам
      </button>

      <div style={{ marginTop: '3rem', padding: '1.5rem', backgroundColor: '#f8f9fa', borderRadius: '4px' }}>
        <h3 style={{ marginBottom: '1rem' }}>Посты по фильтрам</h3>
        <p style={{ marginBottom: '1rem', color: '#6c757d' }}>
          Попробуйте перейти к постам с разными фильтрами:
        </p>
        
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <button 
            onClick={() => navigate('/posts?filter=top')}
            style={{
              backgroundColor: '#28a745',
              color: 'white',
              border: 'none',
              padding: '0.5rem 1rem',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            Top
          </button>
          <button 
            onClick={() => navigate('/posts?filter=new')}
            style={{
              backgroundColor: '#fd7e14',
              color: 'white',
              border: 'none',
              padding: '0.5rem 1rem',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            New
          </button>
          <button 
            onClick={() => navigate('/posts?filter=popular')}
            style={{
              backgroundColor: '#e83e8c',
              color: 'white',
              border: 'none',
              padding: '0.5rem 1rem',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            Popular
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;