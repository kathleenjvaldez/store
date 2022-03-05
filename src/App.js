import React, { useState } from "react";
import GlobalStyles from "./GlobalStyles";

import Nav from "./components/Nav";
import Menu from "./components/Menu";
import Home from "./components/Home";
import Coffee from "./components/Coffee";
import Apparel from "./components/Apparel";
import Wellness from "./components/Wellness";
import Login from "./components/Login";
import Cart from "./components/Cart";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route } from "react-router-dom";

export const CartContext = React.createContext({});

function App() {
  const [cart, setCart] = useState({});

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      <Router>
        <div>
          <GlobalStyles />
          <Nav />
          <Route path="/" exact component={Home} />
          <Route path="/menu" component={Menu} />
          <Route path="/coffee" component={Coffee} />
          <Route path="/apparel" component={Apparel} />
          <Route path="/wellness" component={Wellness} />
          <Route path="/login" component={Login} />
          <Route path="/cart" component={Cart} />
          <Route path="/footer" component={Footer} />
        </div>
      </Router>
    </CartContext.Provider>
  );
}

export default App;
