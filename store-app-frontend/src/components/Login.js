import React from "react";
import styled from "styled-components";

const LoginPage = styled.div`
  position: relative;
  top: 50px;
  left: 500px;
  letter-spacing: 0.12em;

  .login {
    display: block;
    margin: 2rem 0;
  }

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
    border: none;
    border-radius: 30px;
    background-color: #efa693;
    letter-spacing: 0.1em;
  }
`;

function Login() {
  return (
    <LoginPage>
      <div className="login">
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
      </div>
    </LoginPage>
  );
}

export default Login;
