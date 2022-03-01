import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { ReactComponent as XIcon } from "../assets/icons/x.svg";

const ModalStyled = styled.div`
  display: ${(props) => (props.active ? "block" : "none")};
  position: absolute;
  border: solid 1px gray;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  z-index: 4;

  img {
    width: 400px;
    height: 400px;
    padding: 50px;
  }

  .description {
    padding: 20px;
    float: right;
    position: relative;
  }

  .content {
    display: flex;
  }

  h3 {
    font-weight: 400;
    font-size: 25px;
    margin-top: 20px;
    padding: 10px;
    letter-spacing: 0.1em;
  }

  h4 {
    font-weight: 300;
    font-size: 0.95em;
    padding: 10px;
  }

  p,
  label {
    padding: 10px;
    font-weight: 300;
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

  .quantity {
    padding: 2rem 0;
  }

  button {
    border: 1px solid #1c1d1d;
    background-color: white;
    font-family: "din-condensed-web", Helvetica Neue, Helvetica, Arial,
      sans-serif;
    font-weight: 300;
    padding: 15px;
    text-align: center;
    border-color: gray;
    letter-spacing: 0.1em;
    margin-left: 10px;
  }

  .xstyle {
    height: 23px;
    position: absolute;
    top: 10px;
    right: 10px;
  }
`;

const Background = styled.div`
  display: ${(props) => (props.active ? "block" : "none")};
  opacity: 0.6;
  background-color: black;
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0px;
  left: 0px;
  z-index: 3;
`;

function Modal(props) {
  return (
    <div>
      <ModalStyled active={props.active}>
        <div className="content">
          <img src={props.image} />
          <div className="description">
            <h3>{props.name}</h3>
            <p>${props.price}</p>
            <h4>{props.description}</h4>
            <div className="quantity">
              <label>Quantity:</label>
              <input
                type="number"
                id="quantity"
                name="quantity"
                min="0"
                max="30"
              />
            </div>
            <button className="bag">ADD TO BAG</button>
            <XIcon
              className="xstyle"
              onClick={() => {
                props.setActive(false);
              }}
            />
          </div>
        </div>
      </ModalStyled>
      <Background active={props.active} />
    </div>
  );
}

export default Modal;
