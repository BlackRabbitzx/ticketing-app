import React from 'react';
import './headerfooter.css';

function Header() {
  return (
    <header>
      <nav className="navbar">
        <div className="brand">
          <a href="home.html"><strong className='log'>Trick</strong><strong className='ogo'>Tix</strong></a>
        </div>
        <ul className="navb1">
          <li>
            <a href="movies.html">Movies</a>
          </li>
          <li>
            <a href="theaters.html">Theaters</a>
          </li>
        </ul>
        <ul className="navb2">
          <li id="loginBtn">
            <a href="login.html">Login</a>
          </li>
          <li id="registerBtn">
            <a href="register.html">Register</a>
          </li>
          {/* <li id="dropdown" style={{ display: 'none' }}>
            <a href="#" id="userName">
              UserName
            </a>
            <div className="dropdown-content">
              <a href="#" id="logoutBtn">
                Log Out
              </a>
            </div>
          </li> */}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
