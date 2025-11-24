import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div style={{ textAlign: 'center', padding: '4rem 2rem' }}>
      <h1 style={{ 
        fontSize: '4rem', 
        marginBottom: '1rem',
        color: '#6c757d'
      }}>
        404
      </h1>
      <h2 style={{ 
        fontSize: '2rem', 
        marginBottom: '1rem',
        color: '#495057'
      }}>
        Страница не найдена
      </h2>
      <p style={{ 
        fontSize: '1.1rem', 
        marginBottom: '2rem',
        color: '#6c757d'
      }}>
        Извините, запрашиваемая страница не существует.
      </p>
      <Link 
        to="/"
        style={{
          backgroundColor: '#007bff',
          color: 'white',
          padding: '0.75rem 1.5rem',
          borderRadius: '4px',
          textDecoration: 'none',
          display: 'inline-block'
        }}
      >
        Вернуться на главную
      </Link>
    </div>
  );
};

export default NotFound;