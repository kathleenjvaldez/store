import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const CopyrightFooter = styled.div`
  padding: 25px 100px;
  background-color: #e6e6e6;
  letter-spacing: 0.08em;
  margin-top: 10rem;

  h1 {
    font-weight: 300;
    padding: 2rem 0;
  }

  .name {
    margin: 2rem;
    padding: 1rem 0;
  }
  .footer {
    text-align: center;
    font-weight: 300;
    color: #000;
    font-size: 16px;
    line-height: 1.2;
    position: relative;
    padding: 1rem 0;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  p {
    padding-bottom: 2rem;
  }

  .links {
    padding: 0.5rem;
    text-align: left;
  }
  input {
    padding: 1rem;
    text-align: center;
    border-radius: 10px;
    border: 1px solid gray;
    font-weight: 300;
    font-size: 0.85em;
    letter-spacing: 0.12em;
  }

  button {
    background: transparent;
    color: black;
    font-weight: 300;
    font-size: 0.85em;
    padding: 1rem;
    text-align: center;
    position: relative;
    border: 1px solid gray;
    left: 1rem;
    letter-spacing: 0.12em;
    border-radius: 10px;
  }

  .newsletter {
    display: block;
    padding: 2rem 0;
    text-align: center;
  }

  li {
    list-style-type: none;
  }
`;

function Footer() {
  const year = new Date().getFullYear();
  return (
    <CopyrightFooter>
      <div className="footer">
        {/* <Link to="/">
          <li className="links">HOME</li>
        </Link>
        <Link to="/coffee">
          <li className="links">SHOP</li>
        </Link>
        <Link to="/menu">
          <li className="links">MENU</li>
        </Link>
        <Link to="/login">
          <li className="links">ACCOUNT</li>
        </Link> */}
        <div className="newsletter">
          <h1>Join our Newsletter</h1>
          <p>
            Sign up with your email address to receive news, updates, and event
            info.
          </p>
          <input type="text" id="email" name="email" placeholder="Email" />
          <button>Subscribe</button>
        </div>
      </div>
      <p className="name footer"> Kathleen Valdez © {year}</p>
    </CopyrightFooter>
  );
}

export default Footer;
