import React from 'react';

const BigComponent = () => {
  return (
    <div style={{ padding: '20px', border: '2px solid #007bff', margin: '20px 0' }}>
      <h2>Большой компонент</h2>
      <p>Этот компонент был загружен лениво с помощью React.lazy()</p>
      <p>Он появляется только после клика на кнопку, что позволяет оптимизировать начальную загрузку приложения.</p>
      <ul>
        <li>Пункт 1: Ленивая загрузка компонентов</li>
        <li>Пункт 2: Оптимизация производительности</li>
        <li>Пункт 3: Динамический импорт</li>
      </ul>
    </div>
  );
};

export default BigComponent;