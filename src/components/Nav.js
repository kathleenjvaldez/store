import styled from "styled-components";
import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import { ReactComponent as UserIcon } from "../assets/icons/account.svg";
import { ReactComponent as BagIcon } from "../assets/icons/bag.svg";
import { ReactComponent as SearchIcon } from "../assets/icons/search.svg";

import Image2 from "../images/Logo3.png";

import { CartContext } from "../App";

const NavDiv = styled.nav`
  color: white;
  font-weight: 300;
  background-color: white;
  letter-spacing: 0.1em;

  .navbar {
    display: flex;
    justify-content: space-around;
    padding: 10px;
    background-color: #eca154;
  }

  li {
    list-style-type: none;
  }

  .shipping {
    display: inline-flex;
  }

  .logo-row {
    position: relative;
    display: inline-block;
    top: 5px;
    left: 20px;
  }
  .logo {
    width: 100%;
    height: 65px;
    font-size: 2em;
    margin: 10px 0 10px;
    border-radius: 50%;
  }

  .cartLogin {
    float: right;
  }

  .cartBag {
    display: flex;
    padding: 30px;
  }

  .cart {
    padding-left: 25px;
  }

  .search {
    padding-right: 25px;
  }

  .cartcount {
    display: inline-block;
    vertical-align: top;
    min-width: 1em;
    margin-top: -0.5em;
    margin-left: -1em;
    border-radius: 1em;
    padding: 0.5em;
    background-color: #1a1a1a;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #fff;
    text-align: center;
    line-height: 1em;
    font-size: 11.25px;
    font-weight: 400;
  }
`;

const ShopDiv = styled.div`
  height: 60px;
  background-color: white;
  border-top: 1px solid rgba(100, 100, 100, 0.1);
  border-bottom: 1px solid rgba(100, 100, 100, 0.1);

  .menuItems {
    color: #052422;
    display: inline-block;
    margin: 20px 20px 10px;
  }

  .home {
    padding-left: 40px;
  }
`;

const NavBar = styled.div`
  display: inline-block;
`;

const DropDown = styled.div`
  position: absolute;
  color: #052422;
  background-color: white;
  width: 100px;
  top: 170px;
  left: 120px;
  padding-top: 10px;
  text-align: center;
  z-index: 1;

  .menu {
    color: #052422;
    display: block;
    font-size: 0.9em;
    text-decoration: none;
    padding: 10px;
  }
`;

function Nav() {
  const { cart } = useContext(CartContext);

  const [expanded, setExpanded] = useState({ visibility: "hidden" });

  function mouseOver() {
    setExpanded({ visibility: "visible" });
  }

  function mouseOut() {
    setExpanded({ visibility: "hidden" });
  }

  return (
    <NavDiv>
      <div className="navbar">
        <ul className="shipping">
          <li>Free shipping on all U.S. orders</li>
        </ul>
      </div>
      <div className="cartLogin">
        <ul className="cartBag">
          <li className="search">
            <SearchIcon style={{ height: "23px" }} />
          </li>
          <li className="login">
            <Link to="/login">
              <UserIcon style={{ height: "23px" }} />
            </Link>
          </li>
          <li className="cart">
            <Link to="/cart">
              <BagIcon style={{ height: "23px" }} />
              {Object.keys(cart).length > 0 && (
                <span className="cartcount">{Object.keys(cart).length}</span>
              )}
            </Link>
          </li>
        </ul>
      </div>
      <div className="logo-row">
        <img className="logo" src={Image2} alt="Logo" />
      </div>
      <ShopDiv className="shop">
        <Link className="home" to="/">
          <p className="menuItems">HOME</p>
        </Link>
        <NavBar onMouseOver={mouseOver} onMouseOut={mouseOut}>
          <Link>
            <p className="menuItems">SHOP</p>
          </Link>
          <DropDown style={expanded}>
            <ul>
              <Link to="/coffee" className="menu">
                COFFEE
              </Link>
              <Link to="/apparel" className="menu">
                APPAREL
              </Link>
              <Link to="/wellness" className="menu">
                WELLNESS
              </Link>
            </ul>
          </DropDown>
        </NavBar>
        <Link to="/menu">
          <p className="menuItems">MENU</p>
        </Link>
      </ShopDiv>
    </NavDiv>
  );
}

export default Nav;
