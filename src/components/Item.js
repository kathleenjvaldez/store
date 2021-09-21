import React from "react";
import styled from "styled-components";

const ItemDiv = styled.div`
  text-align: center;

  font-family: lato, sans-serif;
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
`;

function Item(props) {
  return (
    <ItemDiv onClick={props.onClick}>
      <div className="image">
        <img src={props.image} alt="soap" />
      </div>
      <h3>{props.name}</h3>
      <h4>{props.description}</h4>
      <p>${props.price.toFixed(2)}</p>
    </ItemDiv>
  );
}

export default Item;
