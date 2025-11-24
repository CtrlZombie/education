import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';

const Layout = () => {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <header style={{ 
        backgroundColor: '#f8f9fa', 
        padding: '1rem 2rem',
        borderBottom: '1px solid #dee2e6'
      }}>
        <nav style={{ display: 'flex', gap: '2rem' }}>
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
          <NavLink 
            to="/posts" 
            style={({ isActive }) => ({ 
              color: isActive ? '#007bff' : '#6c757d',
              textDecoration: 'none',
              fontWeight: isActive ? 'bold' : 'normal'
            })}
          >
            Посты
          </NavLink>
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