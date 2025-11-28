import React from 'react';
import { useAuth } from '../context/AuthContext';

const Home = () => {
  const { user } = useAuth();

  return (
    <div style={{ textAlign: 'center', padding: '2rem 0' }}>
      <h1 style={{ marginBottom: '1rem' }}>Главная страница</h1>
      <p style={{ marginBottom: '2rem', color: '#6c757d' }}>
        Добро пожаловать! Эта страница доступна всем пользователям.
      </p>
      
      {user ? (
        <div style={{ 
          backgroundColor: '#d4edda', 
          color: '#155724',
          padding: '1rem',
          borderRadius: '4px',
          display: 'inline-block'
        }}>
          ✅ Вы авторизованы как: {user.username}
        </div>
      ) : (
        <div style={{ 
          backgroundColor: '#fff3cd', 
          color: '#856404',
          padding: '1rem',
          borderRadius: '4px',
          display: 'inline-block'
        }}>
          🔒 Вы не авторизованы
        </div>
      )}
    </div>
  );
};

export default Home;