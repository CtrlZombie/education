import React from 'react';
import { useAuth } from '../context/AuthContext';

const Profile = () => {
  const { user, logout } = useAuth();

  return (
    <div>
      <h1 style={{ marginBottom: '1rem' }}>Страница профиля</h1>
      
      <div style={{ 
        backgroundColor: '#e7f3ff',
        padding: '1.5rem',
        borderRadius: '4px',
        border: '1px solid #b3d7ff',
        marginBottom: '2rem'
      }}>
        <h2 style={{ margin: '0 0 1rem 0', color: '#004085' }}>Информация о пользователе</h2>
        <p><strong>Имя:</strong> {user.username}</p>
        <p><strong>Роль:</strong> {user.role}</p>
        <p><strong>Статус:</strong> ✅ Авторизован</p>
      </div>

      <button 
        onClick={logout}
        style={{
          backgroundColor: '#dc3545',
          color: 'white',
          border: 'none',
          padding: '0.75rem 1.5rem',
          borderRadius: '4px',
          cursor: 'pointer',
          fontSize: '1rem'
        }}
      >
        Выйти из аккаунта
      </button>
    </div>
  );
};

export default Profile;