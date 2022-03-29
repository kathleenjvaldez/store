import React, { useState, useContext, useEffect } from "react";
import styled from "styled-components";
import { ReactComponent as XIcon } from "../assets/icons/x.svg";

import { CartContext } from "../App";
import NumberField from "./NumberField";

const CartPage = styled.div`
  max-width: 75%;
  margin: 0 auto;
  font-weight: 300;
  letter-spacing: 0.1em;

  .page-header {
    font-weight: 300;
    font-size: 1rem;
    margin: 4rem 0;
  }

  button {
    color: white;
    font-weight: 300;
    font-size: 0.85em;
    padding: 1rem;
    border: none;
    background-color: black;
    float: right;
    letter-spacing: 0.1em;
  }

  .header {
    font-weight: 300;
    font-size: 0.8rem;
    margin-bottom: 1rem;
  }

  .item-column {
    flex: 3;
  }
  .quantity-column {
    flex: 1;
  }
  .price-column {
    flex: 1;
    margin-left: auto;
    align-self: flex-end;
  }

  .cart-headers {
    display: flex;
    color: black;
    border-bottom: 1px solid rgba(100, 100, 100, 0.1);
  }

  .subtotal {
    font-weight: 300;
    font-size: 1rem;
    text-align: right;
    padding-bottom: 4rem;
  }
`;

const CartItemRow = styled.div`
  font-weight: 400;
  display: flex;
  margin: 2rem 0;
  border-bottom: 1px solid rgba(100, 100, 100, 0.1);

  span {
    margin: 2rem;
  }

  .border {
    margin-bottom: 3rem;
  }

  img {
    vertical-align: middle;
    width: 100px;
    padding: 0 3rem;
  }

  .cartQuantity,
  .cartPrice {
    align-self: center;
  }

  .xstyle {
    height: 10px;
  }

  input {
    box-sizing: border-box;
    border: 1px solid gray;
    width: 50px;
    font-family: "din-condensed-web", Helvetica Neue, Helvetica, Arial,
      sans-serif;
    font-weight: 300;
    padding: 5px;
  }
`;

function Cart() {
  const { cart, setCart } = useContext(CartContext);

  const initialValue = 0;
  const subtotal = Object.values(cart).reduce(
    (previousValue, currentValue) =>
      previousValue + currentValue.price * currentValue.quantity,
    initialValue
  );

  const handleRemove = (id, e) => {
    let copyOfObject = { ...cart };
    delete copyOfObject[id];

    setCart((cart) => ({
      ...copyOfObject,
    }));
  };

  function changeQuantity(event, itemId) {
    const currentCart = { ...cart };
    currentCart[itemId].quantity = event.target.value;
    setCart({ ...currentCart });
  }

  useEffect(() => {
    if (Object.keys(cart).length > 0)
      localStorage.setItem("itemId", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("itemId"));
    if (savedCart) {
      setCart(savedCart);
    }
    console.log(savedCart);
  }, []);

  return (
    <CartPage>
      <h2 className="page-header">SHOPPING CART</h2>
      {Object.keys(cart).length < 1 && <p>There are no items in your cart</p>}
      {Object.keys(cart).length > 0 && (
        <div className="cart-headers">
          <h3 className="header item-column">ITEM</h3>
          <h3 className="header quantity-column">QUANTITY</h3>
          <h3 className="header price-column">PRICE</h3>
        </div>
      )}
      {Object.keys(cart).map((itemId) => {
        const item = cart[itemId];
        return (
          <CartItemRow>
            <div className="cartName item-column border">
              <XIcon
                className="xstyle"
                onClick={(e) => handleRemove(item.id, e)}
              />
              <img src={item.image}></img>
              {item.name}
            </div>
            <div className="cartQuantity quantity-column border">
              <NumberField
                defaultValue={item.quantity}
                handleChange={(e) => changeQuantity(e, itemId)}
              />
            </div>
            <div className="cartPrice price-column border">
              ${(item.price * item.quantity).toFixed(2)}
            </div>
          </CartItemRow>
        );
      })}
      {Object.keys(cart).length > 0 && (
        <div className="subtotal">Subtotal ${subtotal.toFixed(2)}</div>
      )}
      {Object.keys(cart).length > 0 && <button>CHECKOUT</button>}
    </CartPage>
  );
}

export default Cart;
