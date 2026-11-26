import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import DarkModeToggle from 'utils/DarkModeToggle';
import CartWidget from 'components/Cart/CartWidget/CartWidget';
import { categories } from 'mock/api';
import './Header.css';

const Header = ({ logo }) => {
  const nameBusiness = process.env.REACT_APP_NAME_BUSINESS || 'La Magia di Victoria';
  const navClass = ({ isActive }) => `site-nav-link${isActive ? ' is-active' : ''}`;

  return (
    <header className="site-header">
      <div className="container site-header-inner">
        <Link to="/" className="site-brand">
          <img src={logo} alt="" className="site-logo" />
          <span className="site-name">{nameBusiness}</span>
        </Link>

        <nav className="site-nav" aria-label="Categorías">
          <NavLink to="/" end className={navClass}>Inicio</NavLink>
          {categories.map((c) => (
            <NavLink key={c.id} to={`/category/${c.id}`} className={navClass}>{c.label}</NavLink>
          ))}
        </nav>

        <div className="site-actions">
          <DarkModeToggle />
          <CartWidget />
        </div>
      </div>
    </header>
  );
};

export default Header;
