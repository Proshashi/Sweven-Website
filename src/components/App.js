import React from "react";
import NavBar from "./NavBar/NavBar";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import "antd/dist/antd.css";
import "rodal/lib/rodal.css";

import Home from "./Home/Home";
import About from "./About/About";
import Contact from "./Contact/Contact";
import Footer from "./Footer/Footer.jsx";
import Services from "./Services/Services";
import Products from "./Products/Products";
import Notices from "./Notices/Notices";

function App() {
  return (
    <div className="__sweven">
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/about-us" component={About} />
          <Route path="/contact-us" component={Contact} />
          <Route path="/services" component={Services} />
          <Route path="/portfolio" component={Products} />
          <Route path="/notices" component={Notices} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
