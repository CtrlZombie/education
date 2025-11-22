import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import './Layout.css';

const Layout = () => {
  return (
    <div className="layout">
      <header className="header">
        <h1>О Мой Блог</h1>
        <nav className="navigation">
          <NavLink 
            to="/" 
            className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
          >
            Лента постов
          </NavLink>
          <NavLink 
            to="/author" 
            className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
          >
            Об авторе
          </NavLink>
          <NavLink 
            to="/contact" 
            className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
          >
            Обратная связь
          </NavLink>
        </nav>
      </header>
      
      <main className="main-content">
        <Outlet />
      </main>
      
      <footer className="footer">
        <p>© 2025 О Мой Блог. Все права защищены.</p>
      </footer>
    </div>
  );
};

export default Layout;