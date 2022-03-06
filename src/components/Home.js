import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Image from "../images/CoffeeHomePage4.jpeg";

const HomePage = styled.div`
  width: 100%;
  height: 650px;
  background-size: cover;
  background-image: url(${Image});
  background-position: 50%;
  display: flex;
  align-items: center;
  padding: 0 2rem;

  .box {
    position: relative;
    color: white;
    display: inline-block;
    background-color: rgba(117 113 113 / 70%);
  }

  h1,
  p {
    padding: 20px;
    font-weight: 400;
  }

  hr {
    border-bottom: 2px solid gray;
    width: 50%;
    margin-left: 20px;
  }

  .orderLink {
    border: 1px solid #1c1d1d;
    background-color: #efa693;
    color: white;
    font-weight: 300;
    font-size: 0.9em;
    padding: 15px;
    text-align: center;
    border-radius: 30px;
    border: none;
    margin-left: 10px;
    position: absolute;
    top: 75px;
    left: 370px;
    text-decoration: none;
    letter-spacing: 0.1em;
  }
`;

const Section = styled.div`
  text-align: center;
  padding: 90px;

  h2 {
    font-weight: 300;
    font-style: normal;
    letter-spacing: 0.23em;
    text-transform: uppercase;
    line-height: 1.1472;
    padding-bottom: 3rem;
  }
  p {
    margin: 0 100px;
    letter-spacing: 0.1em;
    font-weight: 200;
    line-height: 1.8;
    padding: 0 10rem;
  }
`;

function Home() {
  return (
    <div>
      <HomePage className="homepage">
        <div className="box">
          <h1>Coffee delivered straight to your door</h1>
          <hr></hr>
          <p>Shipping or same day delivery available</p>
          <Link to="/coffee" className="orderLink">
            <a>Order Now</a>
          </Link>
        </div>
      </HomePage>
      <Section>
        <h2>About Us</h2>
        <p>
          Collective Coffee is a creative-minded café & shop with multiple
          locations based in Southern California. With an emphasis on inspiring
          and caring for the local community, we offer a full craft coffee and
          drink menu, seasonal food menu, creatively-designed spaces, and
          curated goods.
        </p>
      </Section>
    </div>
  );
}

export default Home;
