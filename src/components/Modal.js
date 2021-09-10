import React from "react";
import styled from "styled-components";

const ModalStyled = styled.div`
  display: ${(props) => (props.active ? "block" : "none")};
  position: absolute;
  border: solid 1px gray;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  display: flex;

  img {
    width: 200px;
    height: 200px;
    padding: 50px;
  }

  .description {
    padding: 20px;
    float: right;
  }

  h3 {
    font-weight: 300;
    font-size: 1.17em;
    padding: 10px;
  }

  p {
    padding: 10px;
  }
`;

function Modal(props) {
  return (
    <ModalStyled active={props.active}>
      <img src={props.image} />
      <div className="description">
        <h3>{props.name}</h3>
        <p>${props.price}</p>
        <p></p>
      </div>
    </ModalStyled>
  );
}

export default Modal;
