import React, { Component } from "react";
import Homepage from "./pages/homepage/homepage";
import { Route, Switch } from "react-router-dom";
import shoppage from "./pages/shoppage/shoppage";
import Header from "./components/header/header";
import SigninSignup from "./pages/signinSignup/signinSignup";
import { auth } from "./firebase/firebase.utils";

import "./App.css";

export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user });

      console.log(user);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
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
