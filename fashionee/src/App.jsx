import React from 'react';
import Header from './components/common/Header/Header';
import ContentBlock from './components/common/ContentBlock/ContentBlock';
import Footer from './components/common/Footer/Footer';

const AppContext = React.createContext();

export const useApp = () => {
  const context = React.useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within AppProvider');
  }
  return context;
};

export const AppProvider = ({ children }) => {
  const [currentPage, setCurrentPage] = React.useState('shop');
  const [cartCount, setCartCount] = React.useState(0);
  const [favoritesCount, setFavoritesCount] = React.useState(0);

  const value = {
    currentPage,
    setCurrentPage,
    cartCount,
    setCartCount,
    favoritesCount,
    setFavoritesCount
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};

const AppContent = () => {
  const { currentPage, setCurrentPage, cartCount, favoritesCount } = useApp();

  const handleTitleClick = () => {
    setCurrentPage('shop');
  };

  const handleCartClick = () => {
    setCurrentPage('cart');
  };

  const getPageTitle = () => {
    return currentPage === 'shop' ? 'Shop' : 'Cart';
  };

  return (
    <div className="app">
      <Header
        cartItemsCount={cartCount}
        favoriteItemsCount={favoritesCount}
        onCartClick={handleCartClick}
      />
      
      <ContentBlock
        title={getPageTitle()}
        currentPage={getPageTitle()}
        onTitleClick={handleTitleClick}
      />
      
      <main className="main-content">
        {currentPage === 'shop' ? <Shop /> : <Cart />}
      </main>
      
      <Footer />
    </div>
  );
};

const App = () => {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
};

export default App;