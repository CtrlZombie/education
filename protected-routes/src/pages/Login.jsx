import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { login } = useAuth();

  const from = location.state?.from?.pathname || '/profile';

  const handleLogin = (role) => {
    login(role);
    navigate(from, { replace: true });
  };

  return (
    <div style={{ maxWidth: '400px', margin: '0 auto', textAlign: 'center' }}>
      <h1 style={{ marginBottom: '1rem' }}>Вход в систему</h1>
      <p style={{ marginBottom: '2rem', color: '#6c757d' }}>
        Выберите тип пользователя для входа:
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <button 
          onClick={() => handleLogin('user')}
          style={{
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            padding: '1rem 2rem',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '1.1rem',
            fontWeight: '500'
          }}
        >
          Войти как пользователь
        </button>

        <button 
          onClick={() => handleLogin('admin')}
          style={{
            backgroundColor: '#28a745',
            color: 'white',
            border: 'none',
            padding: '1rem 2rem',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '1.1rem',
            fontWeight: '500'
          }}
        >
          Войти как админ
        </button>
      </div>

      <div style={{ marginTop: '2rem', padding: '1rem', backgroundColor: '#f8f9fa', borderRadius: '4px' }}>
        <h3 style={{ margin: '0 0 0.5rem 0' }}>Информация:</h3>
        <p style={{ margin: 0, fontSize: '0.9rem', color: '#6c757d' }}>
          • Пользователь: доступ к профилю<br/>
          • Админ: доступ к профилю и админке
        </p>
      </div>

      <div style={{ marginTop: '1rem' }}>
        <button 
          onClick={() => navigate('/')}
          style={{
            color: '#6c757d',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            textDecoration: 'underline'
          }}
        >
          ← На главную
        </button>
      </div>
    </div>
  );
};

export default Login;