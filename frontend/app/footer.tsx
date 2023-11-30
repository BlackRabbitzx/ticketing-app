import React from 'react';
import './headerfooter.css';

function Footer() {
  return (
    <footer>
      <div className="row">
        <div className="col">
          <a href="">TrickTix</a>
          <h4>Contact Us</h4>
          <p>
            <strong>Address: </strong>Jalan Pemuda No. 123, Kota Jakarta Selatan,DKI Jakarta 12345, Indonesia.
          </p>
          <p>
            <strong>E-mail: </strong>TrickTix@gmail.com
          </p>
          <p>
            <strong>Phone: </strong>+62 836 2334 1491
          </p>
          <div className="follow">
            <h4>Follow Us</h4>
            <div className="icon">
              <a href="https://id-id.facebook.com/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="https://twitter.com/explore" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="col">
          <h4>About</h4>
          <a href="AboutUs.html">About us</a>
          <a href="">Privacy Policy</a>
          <a href="">Terms and Conditions</a>
          <a href="ContactUs.html">Contact Us</a>
        </div>
        <div className="col">
          <h4>My account</h4>
          <a href="#">Sign In</a>
          <a href="Cart.html">View Tickets</a>
          <a href="#">My Wishlist</a>
          <a href="#">Help</a>
        </div>
        <div className="col install">
          <h4>Install app</h4>
          <p>From Play Store or app Store</p>
          <div className="row">
            <img src="assets/play-store.png" alt="" />
            <img src="assets/app-store.png" alt="" />
          </div>
        </div>
      </div>

      <p className="Copyright">Copyright © 2023 [TrickTix]. All Rights Reserved.</p>
    </footer>
  );
}

export default Footer;
