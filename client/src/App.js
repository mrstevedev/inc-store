import React, { Component, Fragment } from "react";
import Header from "./components/Header.js";
import TopNotification from "./components/TopNotification";
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Index from './components/Index';
import Cart from './components/Cart';
import MobileMenu from "./components/MobileMenu.js";
import Footer from "./components/Footer.js";

import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log("App component mounted");
  }

  render() {
    return (
      <Fragment>
        <TopNotification />
        <div className="container">
        <Router>
          <Header />
            <Route exact path="/" component={Index} />
            <Route exact path="/signin" component={SignIn} />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/cart" component={Cart} />
          </Router>
          <MobileMenu />
        </div>
        <Footer />
      </Fragment>
    );
  }
}

export default App;
