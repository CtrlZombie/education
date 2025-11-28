import React from 'react';
import { useAuth } from '../context/AuthContext';

const Admin = () => {
  const { user, logout } = useAuth();

  return (
    <div>
      <h1 style={{ marginBottom: '1rem' }}>Административная панель</h1>
      
      <div style={{ 
        backgroundColor: '#d1ecf1',
        padding: '1.5rem',
        borderRadius: '4px',
        border: '1px solid #bee5eb',
        marginBottom: '2rem'
      }}>
        <h2 style={{ margin: '0 0 1rem 0', color: '#0c5460' }}>Привилегии администратора</h2>
        <p><strong>Пользователь:</strong> {user.username}</p>
        <p><strong>Роль:</strong> {user.role}</p>
        <p><strong>Доступ:</strong> ⭐ Полный административный доступ</p>
        
        <div style={{ marginTop: '1.5rem' }}>
          <h3 style={{ margin: '0 0 0.5rem 0' }}>Доступные действия:</h3>
          <ul style={{ textAlign: 'left' }}>
            <li>Управление пользователями</li>
            <li>Настройка системы</li>
            <li>Просмотр статистики</li>
            <li>Изменение конфигурации</li>
          </ul>
        </div>
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

export default Admin;