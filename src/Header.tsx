import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header: React.FC = () => {
  return (
    <header className="header">
      <nav>
        <ul className="nav-list">
          <li>
            <Link to="/auth">Регистрация</Link>
          </li>
          <li>
            <Link to="/about">О нас</Link>
          </li>
          <li>
            <Link to="/profile">Личный кабинет</Link>
          </li>

        </ul>
      </nav>
    </header>
  );
};

export default Header;