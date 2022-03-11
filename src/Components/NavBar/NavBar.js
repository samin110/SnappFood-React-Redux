import React from "react";
import "./Navbar.css";
import { BiUser } from "react-icons/bi";
import { FiSearch, FiChevronDown } from "react-icons/fi";
import { MdOutlineMyLocation, MdOutlineShoppingCart } from "react-icons/md";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="menu">
      <div className="navbar">
        <div className="navbar__logo">
          <img src="assets/images/snappnavbar.svg" />
        </div>
        <div className="location">
          <div className="location__icon">
            <MdOutlineMyLocation className="icons" />
          </div>
          <div className="location__content">
            <div>
              <h3>آدرس انتخابی</h3>
              <div className="location__info">
                <p>ولیعصر، ولی عصر، فلسطین، برادران غفاری</p>
                <FiChevronDown className="icons chev-icon" />
              </div>
            </div>
          </div>
        </div>
        <div className="search-input">
          <input type="text" placeholder="جست&#8239;وجو در اسنپ&#8239;فود" />
          <FiSearch className="search-input__icon" />
        </div>
        <div className="user">
          <div>
            <FiSearch className="icons search-icon" />
            <BiUser className="icons" />
          </div>
        </div>
        <div className="navbar__buttons">
          <div className="navbar__sellers">
            <Link to="/cart">
              <MdOutlineShoppingCart className="navbar__icon-shop" />
              <p>2</p>
            </Link>
          </div>
          <div className="navbar__login">
            <Link to="/signup" className="btn-login">
              عضویت
            </Link>
          </div>
          <div className="navbar__login">
            <Link to="/login" className="btn-login">
              ورود
            </Link>
          </div>
        </div>
      </div>
      <div className="header">
        <div>
          <div className="header__card">
            <img src="assets/images/ham.png" />
            <p>رستوران</p>
          </div>
          <div className="header__card">
            <img src="assets/images/coff.png" />
            <p>کافه</p>
          </div>
          <div className="header__card">
            <img src="assets/images/3.png" />
            <p>شیرینی</p>
          </div>
          <div className="header__card">
            <img src="assets/images/4.png" />
            <p>سوپرمارکت</p>
          </div>
          <div className="header__card">
            <img src="assets/images/5.png" />
            <p>نانوایی</p>
          </div>
          <div className="header__card">
            <img src="assets/images/6.png" />
            <p>میوه</p>
          </div>
          <div className="header__card">
            <img src="assets/images/8.png" />
            <p>آجیل</p>
          </div>
          <div className="header__card">
            <img src="assets/images/9.png" />
            <p>آب&#8239;میوه بستنی</p>
          </div>
          <div className="header__card">
            <img src="assets/images/11.png" />
            <p>پروتئین</p>
          </div>
          <div className="header__card">
            <img src="assets/images/10.png" />
            <p>سایر</p>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
