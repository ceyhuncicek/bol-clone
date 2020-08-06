import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import logo from "../assets/icons/logo.svg";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import SearchIcon from "@material-ui/icons/Search";
import Navbar from "../components/Navbar.js";
import { useStateValue } from "../StateProvider";

export default function Header() {
  const [{ basket }] = useStateValue();

  return (
    <header className="header_main">
      <div className="header_sections">
        <Link to="/">
          <img className="header_logo" src={logo} alt="logo_image" />
        </Link>
        <div className="header_search_box_container">
          <input
            className="header_search_box"
            placeholder="What are you looking for?"
          ></input>
          <SearchIcon className="header_search_box_image" />
        </div>
        <div className="header_link_group">
          <Link to="/login" className="header_link_login">
            <div className="header_link_login_options">
              <span>Inloggen</span>
            </div>
          </Link>
          <Link to="/favorite" className="header_link_icon">
            <div>
              <FavoriteBorderIcon />
            </div>
          </Link>
          <Link to="/checkout" className="header_link_icon">
            <div>
              <div className="shopping_cart">
                <ShoppingCartIcon />
                <span className="badge">{basket?.length}</span>
              </div>
            </div>
          </Link>
        </div>
      </div>
      <Navbar />
    </header>
  );
}
