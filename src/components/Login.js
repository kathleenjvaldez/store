import React from "react";
import styled from "styled-components";

const LoginPage = styled.div`
  position: absolute;
  top: 300px;
  left: 400px;
  letter-spacing: 0.1em;

  h1 {
    font-weight: 400;
  }
  input {
    padding: 5px;
  }

  button {
    color: black;
    font-weight: 300;
    font-size: 0.85em;
    padding: 1rem;
    text-align: center;
    border-color: gray;
    position: relative;
    border: none;
    border-radius: 30px;
    background-color: #efa693;
    letter-spacing: 0.1em;
  }
`;

function Login() {
  return (
    <LoginPage>
      <h1>Customer Login</h1>
      <form>
        <br />
        <input type="text" id="email" name="email" placeholder="Email" />
        <br />
        <br />
        <input
          type="text"
          id="password"
          name="password"
          placeholder="Password"
        />
        <br />
        <br />
      </form>
      <button>Sign In</button>
    </LoginPage>
  );
}

export default Login;
