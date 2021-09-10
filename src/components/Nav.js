import styled from "styled-components";
import { Link } from "react-router-dom";
import { useState } from "react";
import { ReactComponent as UserIcon } from "../assets/icons/account.svg";
import { ReactComponent as BagIcon } from "../assets/icons/bag.svg";

import Image2 from "../images/Logo3.png";

const NavDiv = styled.nav`
  color: white;
  font-weight: 300;
  background-color: white;

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
`;

const ShopDiv = styled.div`
  height: 60px;
  background-color: white;
  border-top: 1px solid #ddd;
  border-bottom: 1px solid #ddd;

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
  left: 110px;
  padding-top: 10px;
  text-align: center;
  z-index: 1;

  .menu {
    color: #052422;
    display: block;
    text-decoration: none;
    padding: 5px;
  }
`;

function Nav() {
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
          <li className="login">
            <UserIcon style={{ height: "23px" }} />
          </li>
          <li className="cart">
            <BagIcon style={{ height: "23px" }} />
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
                Coffee
              </Link>
              <Link className="menu">Apparel</Link>
              <Link className="menu">Stationery</Link>
              <Link to="/wellness" className="menu">
                Wellness
              </Link>
            </ul>
          </DropDown>
        </NavBar>
        <Link to="/about">
          <p className="menuItems">ABOUT</p>
        </Link>
      </ShopDiv>
    </NavDiv>
  );
}

export default Nav;
