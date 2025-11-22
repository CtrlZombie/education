import React from 'react';

const Author = () => {
  return (
    <div className="author-page">
      <h2>Об авторе</h2>
      <div className="author-info">
        <img 
          src="../public/plachuschiy_kot.jpg" 
          alt="Автор блога" 
          className="author-avatar"
        />
        <div className="author-details">
          <h3>Николай Клеткин</h3>
          <p>
            Привет! Я начинающий фронтенд-разработчик. Не понимаю я этих ваших жабаскриптов, хочеться плакать.
          </p>
          <p>
            В этом блоге я рассказываю о своем опыте изучения React, JavaScript 
            и других веб-технологий.
          </p>
          <ul className="skills-list">
            <li>React</li>
            <li>JavaScript</li>
            <li>HTML/CSS</li>
            <li>Node.js</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Author;