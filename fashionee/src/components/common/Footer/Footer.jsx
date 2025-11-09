import React from "react";
import "./Footer.css";

const footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="fashionee">
          <div className="fashionee-logo">
            <img src="./public./fashionee.svg" alt="fashionee logo" />
            <div className="description">
              Cillum eu id enim aliquip aute ullamco anim. Culpa deserunt
              nostrud excepteur voluptate.
            </div>
          </div>
          <div className="find-us-wrapper">
            <div className="find-us">Find us here:</div>
            <div className="socials-links">
              <div className="social-link">FB</div>
              <div className="social-link">TW</div>
              <div className="social-link">INS</div>
              <div className="social-link">PT</div>
            </div>
          </div>
        </div>
        <div className="footer-column">
          <div className="title">About</div>
          <ul className="list">
            <li>About us</li>
            <li>Collections</li>
            <li>Shop</li>
            <li>Blog</li>
            <li>Contact us</li>
          </ul>
        </div>
        <div className="footer-column">
          <div className="title">Useful Link</div>
          <ul className="list">
            <li>Privacy Policy</li>
            <li>Terms of use</li>
            <li>Support</li>
            <li>Shipping details</li>
            <li>FAQs</li>
          </ul>
        </div>
        <div className="footer-column">
          <div className="title">Newsletter</div>
          <div className="description">
            Subscribe to be the first to hear about deals, offers and upcoming
            collections.
          </div>
          <div className="newsletter">
            <input type="email" placeholder="Enter your email" />
            <button></button>
          </div>
        </div>
      </div>
      <div className="rights-and-payments">
        <div className="description">© All right reserved. Fashionee 2020</div>
        <div className="payment-methods">
          <div className="description">Payment methods:</div>
          <div className="payment-logos">
            <img src="./public./visa.svg" alt="visa logo" />
            <img src="./public./mastercard.svg" alt="mastercard logo" />
            <img src="./public./paypal.svg" alt="paypal logo" />
            <img src="./public./payoneer.svg" alt="" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default footer;