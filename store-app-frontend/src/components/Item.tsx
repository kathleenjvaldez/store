import React, { useState, useContext } from "react";
import styled from "styled-components";

import { CartContext } from "../App.js";

interface ItemProps {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
  onClick: () => void;
}

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
    display: flex;
    position: absolute;
    background-color: rgba(117, 113, 113, 0.6);
    border: none;
    color: white;
    font-weight: 300;
    font-size: 0.7em;
    padding: 15px 5px;
    text-align: center;
    top: 12rem;
    left: 3.5rem;
    letter-spacing: 0.1em;
  }

  .cartButton {
    left: 9.5rem;
  }
`;

const Item: React.FC<ItemProps> = (props) => {
  const [shown, setShown] = useState<"visible" | "hidden" | "collapse">(
    "hidden"
  );

  // @ts-ignore
  const { cart, setCart } = useContext(CartContext);

  const mouseOver = () => {
    setShown("visible");
  };

  const mouseOut = () => {
    setShown("hidden");
  };

  const handleClick = () => {
    const itemExists = cart.hasOwnProperty(props.id);

    const addedItem = {
      id: props.id,
      name: props.name,
      price: props.price,
      description: props.description,
      quantity: itemExists ? cart[props.id].quantity + 1 : 1,
      image: props.image,
    };

    setCart({
      ...cart,
      [props.id]: addedItem,
    });
  };

  return (
    <div>
      <ItemDiv onMouseOver={mouseOver} onMouseOut={mouseOut}>
        <div className="image">
          <img src={props.image} alt="pic" />
        </div>
        <h3>{props.name}</h3>
        <p>${props.price.toFixed(2)}</p>
        <button
          className="itemButton"
          style={{ visibility: shown }}
          onClick={props.onClick}
        >
          QUICK VIEW
        </button>
        <button
          style={{ visibility: shown }}
          className="cartButton"
          onClick={handleClick}
        >
          ADD TO BAG
        </button>
      </ItemDiv>
    </div>
  );
};

export default Item;
