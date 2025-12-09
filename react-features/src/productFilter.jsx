import { useState, useTransition, useMemo } from 'react';

// Генерируем большой список данных
const generateProducts = () => {
  return Array.from({ length: 15000 }, (_, i) => ({
    id: i + 1,
    name: `Товар ${i + 1}`,
    category: ['Электроника', 'Одежда', 'Книги', 'Спорт'][i % 4],
    price: Math.floor(Math.random() * 1000) + 100,
    rating: Math.floor(Math.random() * 5) + 1
  }));
};

const products = generateProducts();

export default function ProductFilter() {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('Все');
  const [maxPrice, setMaxPrice] = useState(1000);
  
  // Используем useTransition для неблокирующего рендеринга
  const [isPending, startTransition] = useTransition();
  
  // Стейт для отфильтрованных продуктов
  const [filteredProducts, setFilteredProducts] = useState(products);
  
  // Функция фильтрации с использованием startTransition
  const handleFilterChange = (newSearch, newCategory, newMaxPrice) => {
    startTransition(() => {
      const filtered = products.filter(product => {
        const matchesSearch = product.name.toLowerCase()
          .includes(newSearch.toLowerCase());
        const matchesCategory = newCategory === 'Все' || 
          product.category === newCategory;
        const matchesPrice = product.price <= newMaxPrice;
        
        return matchesSearch && matchesCategory && matchesPrice;
      });
      
      setFilteredProducts(filtered);
    });
  };
  
  // Обработчики изменений с использованием transition
  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearch(value);
    handleFilterChange(value, category, maxPrice);
  };
  
  const handleCategoryChange = (e) => {
    const value = e.target.value;
    setCategory(value);
    handleFilterChange(search, value, maxPrice);
  };
  
  const handlePriceChange = (e) => {
    const value = Number(e.target.value);
    setMaxPrice(value);
    handleFilterChange(search, category, value);
  };
  
  // Вычисляем статистику (тоже внутри useMemo для оптимизации)
  const stats = useMemo(() => ({
    total: filteredProducts.length,
    averagePrice: filteredProducts.length > 0 
      ? Math.round(filteredProducts.reduce((sum, p) => sum + p.price, 0) / filteredProducts.length)
      : 0,
    categories: [...new Set(filteredProducts.map(p => p.category))]
  }), [filteredProducts]);

  return (
    <div className="container">
      <header className="header">
        <h1>🛍️ Фильтр товаров с useTransition</h1>
        <p className="description">
          Фильтрация {products.length.toLocaleString()} товаров без блокировки интерфейса
        </p>
      </header>
      
      <div className="filters">
        <div className="filter-group">
          <label>🔍 Поиск товаров:</label>
          <input
            type="text"
            value={search}
            onChange={handleSearchChange}
            placeholder="Введите название товара..."
            className="search-input"
          />
        </div>
        
        <div className="filter-group">
          <label>🏷️ Категория:</label>
          <select 
            value={category} 
            onChange={handleCategoryChange}
            className="select"
          >
            <option value="Все">Все категории</option>
            <option value="Электроника">Электроника</option>
            <option value="Одежда">Одежда</option>
            <option value="Книги">Книги</option>
            <option value="Спорт">Спорт</option>
          </select>
        </div>
        
        <div className="filter-group">
          <label>💰 Макс. цена: {maxPrice} ₽</label>
          <input
            type="range"
            min="100"
            max="1000"
            step="50"
            value={maxPrice}
            onChange={handlePriceChange}
            className="slider"
          />
          <div className="price-range">
            <span>100 ₽</span>
            <span>1000 ₽</span>
          </div>
        </div>
      </div>
      
      {/* Индикатор загрузки */}
      <div className={`loading-indicator ${isPending ? 'visible' : ''}`}>
        <div className="spinner"></div>
        <span>Фильтруем товары...</span>
      </div>
      
      {/* Статистика */}
      <div className="stats">
        <div className="stat-card">
          <span className="stat-label">Найдено товаров:</span>
          <span className="stat-value">{stats.total}</span>
        </div>
        <div className="stat-card">
          <span className="stat-label">Средняя цена:</span>
          <span className="stat-value">{stats.averagePrice} ₽</span>
        </div>
        <div className="stat-card">
          <span className="stat-label">Категории:</span>
          <span className="stat-value">{stats.categories.length}</span>
        </div>
      </div>
      
      {/* Список товаров */}
      <div className="products-grid">
        {filteredProducts.length === 0 ? (
          <div className="empty-state">
            <p>😔 Товары не найдены</p>
            <p>Попробуйте изменить параметры фильтрации</p>
          </div>
        ) : (
          filteredProducts.slice(0, 100).map(product => ( // Показываем первые 100 для производительности
            <div key={product.id} className="product-card">
              <div className="product-header">
                <span className="product-category">{product.category}</span>
                <span className="product-rating">{"⭐".repeat(product.rating)}</span>
              </div>
              <h3 className="product-name">{product.name}</h3>
              <div className="product-footer">
                <span className="product-price">{product.price} ₽</span>
                <button className="add-to-cart">В корзину</button>
              </div>
            </div>
          ))
        )}
      </div>
      
      {filteredProducts.length > 100 && (
        <p className="more-info">
          ... и еще {filteredProducts.length - 100} товаров
        </p>
      )}
      
      <style>{`
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 20px;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
        }
        
        .header {
          text-align: center;
          margin-bottom: 40px;
        }
        
        .description {
          color: #666;
          font-size: 1.1em;
        }
        
        .filters {
          background: #f8f9fa;
          padding: 20px;
          border-radius: 12px;
          margin-bottom: 20px;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 20px;
        }
        
        .filter-group {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        
        .search-input, .select {
          padding: 10px 14px;
          border: 2px solid #e0e0e0;
          border-radius: 8px;
          font-size: 16px;
          transition: border-color 0.2s;
        }
        
        .search-input:focus, .select:focus {
          outline: none;
          border-color: #646cff;
        }
        
        .slider {
          width: 100%;
          height: 6px;
          border-radius: 3px;
          background: #ddd;
          outline: none;
        }
        
        .price-range {
          display: flex;
          justify-content: space-between;
          font-size: 14px;
          color: #666;
        }
        
        .loading-indicator {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 10px;
          background: #e3f2fd;
          border-radius: 8px;
          margin-bottom: 20px;
          opacity: 0;
          transition: opacity 0.3s;
        }
        
        .loading-indicator.visible {
          opacity: 1;
        }
        
        .spinner {
          width: 20px;
          height: 20px;
          border: 3px solid #1976d2;
          border-top-color: transparent;
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }
        
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
        
        .stats {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 15px;
          margin-bottom: 30px;
        }
        
        .stat-card {
          background: white;
          padding: 20px;
          border-radius: 10px;
          box-shadow: 0 2px 8px rgba(0,0,0,0.1);
          text-align: center;
        }
        
        .stat-label {
          display: block;
          color: #666;
          font-size: 14px;
          margin-bottom: 5px;
        }
        
        .stat-value {
          display: block;
          font-size: 24px;
          font-weight: bold;
          color: #1976d2;
        }
        
        .products-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
          gap: 20px;
        }
        
        .product-card {
          background: white;
          border-radius: 12px;
          padding: 20px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.08);
          transition: transform 0.2s, box-shadow 0.2s;
        }
        
        .product-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 16px rgba(0,0,0,0.12);
        }
        
        .product-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 10px;
        }
        
        .product-category {
          background: #e3f2fd;
          color: #1976d2;
          padding: 4px 8px;
          border-radius: 4px;
          font-size: 12px;
          font-weight: 600;
        }
        
        .product-name {
          font-size: 18px;
          margin: 10px 0;
          color: #333;
        }
        
        .product-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 15px;
        }
        
        .product-price {
          font-size: 20px;
          font-weight: bold;
          color: #2e7d32;
        }
        
        .add-to-cart {
          background: #646cff;
          color: white;
          border: none;
          padding: 8px 16px;
          border-radius: 6px;
          cursor: pointer;
          font-weight: 600;
          transition: background 0.2s;
        }
        
        .add-to-cart:hover {
          background: #535bf2;
        }
        
        .empty-state {
          grid-column: 1 / -1;
          text-align: center;
          padding: 60px 20px;
          color: #666;
        }
        
        .more-info {
          text-align: center;
          color: #666;
          margin-top: 20px;
          font-style: italic;
        }
        
        @media (max-width: 768px) {
          .filters {
            grid-template-columns: 1fr;
          }
          
          .products-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
}