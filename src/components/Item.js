import React from "react";
import styled from "styled-components";
import { useState, useContext } from "react";

import { CartContext } from "../App";

const ItemDiv = styled.div`
  text-align: center;
  font-family: lato, sans-serif;
  position: relative;
  letter-spacing: 0.1em;

  h3 {
    font-weight: 300;
    padding-top: 20px;
  }
  img {
    width: 200px;
    height: 200px;
    padding-top: 2.5em;
    padding-bottom: 20px;
    border-bottom: 1px solid #dbdad7;
  }

  p {
    font-size: 0.95em;
    padding-top: 20px;
    font-weight: 300;
  }

  .itemButton,
  .cartButton {
    background-color: rgba(117 113 113 / 60%);
    border: none;
    color: white;
    font-weight: 300;
    font-size: 0.7em;
    padding: 15px;
    text-align: center;
    position: absolute;
    top: 12rem;
    letter-spacing: 0.1em;
  }

  .cartButton {
    left: 4rem;
  }
`;

function Item(props) {
  const [shown, setShown] = useState({ visibility: "hidden" });
  const { cart, setCart } = useContext(CartContext);

  function mouseOver() {
    setShown({ visibility: "visible" });
  }

  function mouseOut() {
    setShown({ visibility: "hidden" });
  }

  function handleClick() {
    // boolean of whether item already exists in cart or not
    const itemExists = cart.hasOwnProperty(props.id);

    let addedItem = {
      id: props.id,
      name: props.name,
      price: props.price,
      description: props.description,
      quantity: itemExists ? cart[props.id].quantity + 1 : 1,
      image: props.image,
    };

    setCart({
      ...cart,
      [`${props.id}`]: addedItem,
    });
  }

  return (
    <div>
      <ItemDiv onMouseOver={mouseOver} onMouseOut={mouseOut}>
        <div className="image">
          <img src={props.image} alt="pic" />
        </div>
        <h3>{props.name}</h3>
        <p>${props.price.toFixed(2)}</p>
        <button className="itemButton" style={shown} onClick={props.onClick}>
          QUICK VIEW
        </button>
        <button
          style={shown}
          className="cartButton"
          onClick={() => handleClick()}
        >
          ADD TO BAG
        </button>
      </ItemDiv>
    </div>
  );
}

export default Item;
