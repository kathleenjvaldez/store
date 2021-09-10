import React from "react";
import GlobalStyles from "./GlobalStyles";

import Nav from "./components/Nav";
import About from "./components/About";
import Home from "./components/Home";
import Coffee from "./components/Coffee";
import Wellness from "./components/Wellness";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <GlobalStyles />
        <Nav />
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/coffee" component={Coffee} />
        <Route path="/wellness" component={Wellness} />
      </div>
    </Router>
  );
}

export default App;
