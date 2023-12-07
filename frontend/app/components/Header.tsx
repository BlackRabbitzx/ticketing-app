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
            <Link to="/signIn" className='loginBtn'>Sign In</Link>
          </li>
          <li id="regisBtn">
            <Link to="/register" className='regisBtn'>Register</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
