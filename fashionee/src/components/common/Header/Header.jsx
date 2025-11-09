import react from "react";
import "./Header.css";

const Header = ({ cartItemsCount, favouriteItemsCount, onCartClick }) => {
  return (
    <header className="header">
      <div className="container">
        <div className="menu-and-logo">
          <div className="menu">menu</div>
          <div className="logo">FASHIONEE</div>
        </div>
        <nav className="nav">
          <span className="nav-item">Home</span>
          <span className="nav-item">Pages</span>
          <span className="nav-item">Shop</span>
          <span className="nav-item">Blog</span>
          <span className="nav-item">Contact</span>
        </nav>
        <div className="header-actions">
          <div className="icon">Search</div>
          <div className="icon">profile</div>
          <div className="icon favourite-icon">♥ {favouriteItemsCount}</div>
          <div className="icon cart-icon">🛒 {cartItemsCount}</div>
        </div>
      </div>
    </header>
  );
};

export default Header;
