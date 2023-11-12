import React, { useState } from "react";
import "./Navbar.css";
import logo from "../Assets/logo.png";
import cartIcon from "../Assets/cart_icon.png";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export const Navbar = () => {
  const [menu, setMenu] = useState("shop");
const {cart}=useSelector(product=>product.cart)
  return (
    <div className="navbar">
      <div className="nav-logo">
        <img
          src={logo}
          alt="logo"
        />
        <p>SHOPPER</p>
      </div>
      <ul className="nav-menu">
        <li
          onClick={() => {
            setMenu("shop");
          }}>
          <Link
            style={{ textDecoration: "none" }}
            to="/">
            Shop
          </Link>
          {menu === "shop" ? <hr /> : <></>}
        </li>
      </ul>
      <div className="nav-login-cart">
        
        <Link to="/cart">
          <img
            src={cartIcon}
            alt="cartIcon"
          />
        </Link>
        <div className="nav-cart-count">{cart.length}</div>
      </div>
    </div>
  );
};

export default Navbar;
