import React, { Component } from "react";
//import React from 'react';
import logo from "./logo.svg";
import Navbar from "./components/navbar/Navbar.js";

import Home from "./components/home/Home";
import Footer from "./components/footer/Footer";
import About from "./components/about/About";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Login from "./components/authentication/Login";
import { Contact } from "./components/contact/Contact";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar></Navbar>
        <Router>
          <Switch>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/about">
              <About></About>
            </Route>
            <Route exact path="/login" component={Login}></Route>
            <Route path="/achievement"></Route>
            <Route path="/books"></Route>
            <Route path="/tutorials"></Route>
            <Route path="/blog"></Route>
            <Route exact path="/contact" component={Contact}></Route>
          </Switch>
        </Router>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
