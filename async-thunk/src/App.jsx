import React from 'react';
import PostsList from './components/postList';

function App() {
  return (
    <div style={{ 
      minHeight: '100vh',
      backgroundColor: '#f5f7fa'
    }}>
      <PostsList />
    </div>
  );
}

export default App;