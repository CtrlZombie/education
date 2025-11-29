import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addUser, removeUser } from '../../features/users/usersSlice';

const Users = () => {
  const [userName, setUserName] = useState('');
  const users = useSelector((state) => state.users.list);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userName.trim()) {
      dispatch(addUser(userName.trim()));
      setUserName('');
    }
  };

  const handleRemoveUser = (userId) => {
    dispatch(removeUser(userId));
  };

  return (
    <div style={{ padding: '2rem', maxWidth: '600px', margin: '0 auto' }}>
      <h2 style={{ marginBottom: '2rem', textAlign: 'center' }}>Управление пользователями</h2>
      
      {/* Форма добавления пользователя */}
      <form onSubmit={handleSubmit} style={{ marginBottom: '2rem' }}>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <input
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            placeholder="Введите имя пользователя"
            style={{
              flex: 1,
              padding: '0.75rem',
              border: '1px solid #ddd',
              borderRadius: '4px',
              fontSize: '1rem'
            }}
          />
          <button
            type="submit"
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
            Добавить пользователя
          </button>
        </div>
      </form>

      {/* Список пользователей */}
      <div>
        <h3 style={{ marginBottom: '1rem' }}>
          Список пользователей ({users.length})
        </h3>
        
        {users.length === 0 ? (
          <p style={{ 
            textAlign: 'center', 
            color: '#6c757d', 
            padding: '2rem',
            backgroundColor: '#f8f9fa',
            borderRadius: '4px'
          }}>
            Пользователи не добавлены
          </p>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            {users.map((user) => (
              <div
                key={user.id}
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '1rem',
                  backgroundColor: 'white',
                  border: '1px solid #e9ecef',
                  borderRadius: '4px'
                }}
              >
                <span>{user.name}</span>
                <button
                  onClick={() => handleRemoveUser(user.id)}
                  style={{
                    backgroundColor: '#dc3545',
                    color: 'white',
                    border: 'none',
                    padding: '0.5rem 1rem',
                    borderRadius: '4px',
                    cursor: 'pointer'
                  }}
                >
                  Удалить
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Users;