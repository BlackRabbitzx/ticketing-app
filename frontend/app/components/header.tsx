import React from 'react';
import './headerfooter.css';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header>
      <nav className="navbar">
        <div className="brand">
        <Link to="/"><strong className='log'>Trick</strong><strong className='ogo'>Tix</strong></Link>
        </div>
        <ul className="navb1">
          <li>
            <Link to="/movies">Movies</Link>
          </li>
          <li>
            <Link to="/theaters">Theaters</Link>
          </li>
          <li>
            <Link to="/aboutUs">About Us</Link>
          </li>
        </ul>
        <ul className="navb2">
          <li id="loginBtn">
            <a href="login.html">Login</a>
          </li>
          <li id="registerBtn">
            <a href="register.html">Register</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
