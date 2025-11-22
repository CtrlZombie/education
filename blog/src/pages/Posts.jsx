import React from 'react';

const Posts = () => {
  const posts = [
    {
      id: 1,
      title: 'Мой первый пост в блоге',
      content: 'Тот самый анекдот о Пупе и Лупе...',
      date: '15 декабря 2025'
    },
    {
      id: 2,
      title: 'Изучение React Router',
      content: 'Сегодня я изучал маршрутизацию в React приложениях с помощью React Router...',
      date: '22 ноября 2025'
    },
    {
      id: 3,
      title: 'Как не выгореть работая и обучаясь одновременно',
      content: 'Никак...',
      date: '23 ноября 2025'
    }
  ];

  return (
    <div className="posts-page">
      <h2>Лента постов</h2>
      <h3>Здесь вы найдете все мои последние записи и мысли</h3>
      
      <div className="posts-list">
        {posts.map(post => (
          <article key={post.id} className="post-card">
            <h3>{post.title}</h3>
            <p>{post.content}</p>
            <time className="post-date">{post.date}</time>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Posts;