import React, { useState, Suspense } from 'react';

// Ленивая загрузка компонента
const LazyBigComponent = React.lazy(() => import('./components/BigComponent'));

function App() {
  const [showComponent, setShowComponent] = useState(false);

  const handleButtonClick = () => {
    setShowComponent(true);
  };

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Главное приложение</h1>
      <p>Нажмите кнопку, чтобы загрузить большой компонент</p>
      
      <button 
        onClick={handleButtonClick}
        style={{
          padding: '10px 20px',
          fontSize: '16px',
          backgroundColor: '#007bff',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer'
        }}
      >
        Загрузить компонент
      </button>

      {showComponent && (
        <Suspense fallback="Загрузка компонента...">
          <LazyBigComponent />
        </Suspense>
      )}
    </div>
  );
}

export default App;