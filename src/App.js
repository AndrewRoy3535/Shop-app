import React, { Component } from "react";
import Homepage from "./pages/homepage/homepage";
import { Route, Switch } from "react-router-dom";
import shoppage from "./pages/shoppage/shoppage";
import Header from "./components/header/header";
import SigninSignup from "./pages/signinSignup/signinSignup";
import { auth, createUserProfileDoc } from "./firebase/firebase.utils";
import { connect } from "react-redux";
import { setCurrentUser } from "./redux/user/user-action";

import "./App.css";

export class App extends Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDoc(userAuth);

        userRef.onSnapshot((snapshot) => {
          setCurrentUser({
            id: snapshot.id,
            ...snapshot.data(),
          });
        });
      } else {
        setCurrentUser(userAuth);
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

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

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(null, mapDispatchToProps)(App);
