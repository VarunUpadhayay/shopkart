import React from "react";
import Navbar from "./Navabar";
import "../style/Header.css";
import Body from "./Body";

import "font-awesome/css/font-awesome.min.css";

const Header = () => {
  return (
    <>
      <div className="main-navbar">
        <div className="container-info">
          <div className="container-info-left">
            <span href="#" className="social-icon delivery">
              <i
                className="fa fa-truck fa-flip-horizontal"
                aria-hidden="true"
              ></i>
            </span>
            <span>Free Delivery | </span>
            <span>Return Policy</span>
          </div>
          <div className="container-info-right">
            <span>Login</span>
            <span>Follow US</span>
            <span href="#" className="social-icon facebook">
              <i class="fa fa-facebook" aria-hidden="true"></i>
            </span>
            <span href="#" className="social-icon linkedin">
              <i class="fa fa-linkedin" aria-hidden="true"></i>
            </span>
            <span href="#" className="social-icon twitter">
              <i class="fa fa-twitter" aria-hidden="true"></i>
            </span>
            <span href="#" className="social-icon instagram">
              <i class="fa fa-instagram" aria-hidden="true"></i>
            </span>
          </div>
        </div>

        <div className="inner-container">
          <div className="header-name">
            <span className="header-name-text">ShopKart</span>
            <div></div>
          </div>

          <div className="header-info-right">
            <span>Wishlist (0)</span>
            <span>Bag (0)</span>
          </div>
        </div>
        <Navbar />
      </div>
    </>
  );
};

export default Header;
