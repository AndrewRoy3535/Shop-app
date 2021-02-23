import React, { Component } from "react";
import Homepage from "./pages/homepage/homepage";
import { Route, Switch } from "react-router-dom";
import shoppage from "./pages/shoppage/shoppage";
import Header from "./components/header/header";
import SigninSignup from "./pages/signinSignup/signinSignup";
import "./App.css";

export class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route path='/' exact component={Homepage} />
          <Route path='/shop' component={shoppage} />
          <Route path='/signin' component={SigninSignup} />
        </Switch>
      </div>
    );
  }
}

export default App;
