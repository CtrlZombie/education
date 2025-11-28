import React from 'react';
import { Outlet, NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Layout = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <header style={{ 
        backgroundColor: '#f8f9fa', 
        padding: '1rem 2rem',
        borderBottom: '1px solid #dee2e6'
      }}>
        <nav style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
          <NavLink 
            to="/" 
            style={({ isActive }) => ({ 
              color: isActive ? '#007bff' : '#6c757d',
              textDecoration: 'none',
              fontWeight: isActive ? 'bold' : 'normal'
            })}
          >
            Главная
          </NavLink>
          
          {user ? (
            <>
              <NavLink 
                to="/profile" 
                style={({ isActive }) => ({ 
                  color: isActive ? '#007bff' : '#6c757d',
                  textDecoration: 'none',
                  fontWeight: isActive ? 'bold' : 'normal'
                })}
              >
                Профиль
              </NavLink>
              
              {user.role === 'admin' && (
                <NavLink 
                  to="/admin" 
                  style={({ isActive }) => ({ 
                    color: isActive ? '#007bff' : '#6c757d',
                    textDecoration: 'none',
                    fontWeight: isActive ? 'bold' : 'normal'
                  })}
                >
                  Админка
                </NavLink>
              )}
              
              <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <span style={{ color: '#495057' }}>
                  {user.username} ({user.role})
                </span>
                <button 
                  onClick={handleLogout}
                  style={{
                    backgroundColor: '#dc3545',
                    color: 'white',
                    border: 'none',
                    padding: '0.5rem 1rem',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    fontSize: '0.9rem'
                  }}
                >
                  Выйти
                </button>
              </div>
            </>
          ) : (
            <NavLink 
              to="/login" 
              style={({ isActive }) => ({ 
                color: isActive ? '#007bff' : '#6c757d',
                textDecoration: 'none',
                fontWeight: isActive ? 'bold' : 'normal'
              })}
            >
              Войти
            </NavLink>
          )}
        </nav>
      </header>
      
      <main style={{ flex: 1, padding: '2rem' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default Layout;