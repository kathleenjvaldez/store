import React from "react";
import styled from "styled-components";
import MenuImage from "../images/Menu.jpeg";

const MenuDiv = styled.div`
  h1 {
    font-weight: 400;
    margin: 50px;
    text-align: center;
  }
  .menu {
    top: 0;
    width: 100%;
    height: 100.026%;
    z-index: -1;
  }
`;

function Menu() {
  return (
    <MenuDiv>
      <h1>San Diego Menu</h1>
      <img className="menu" alt="menu" src={MenuImage}></img>
    </MenuDiv>
  );
}

export default Menu;
