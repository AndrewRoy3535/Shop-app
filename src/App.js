import React, { Component } from "react";
import Homepage from "./pages/homepage/homepage";
import { Route, Switch } from "react-router-dom";
import shoppage from "./pages/shoppage/shoppage";
import Header from "./components/header/header";
import SigninSignup from "./pages/signinSignup/signinSignup";
import { auth, createUserProfileDoc } from "./firebase/firebase.utils";

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
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDoc(userAuth);

        userRef.onSnapshot((snapshot) => {
          this.setState(
            {
              currentUser: {
                id: snapshot.id,
                ...snapshot.data(),
              },
            },
            () => console.log(this.state)
          );
        });
      } else {
        this.setState({
          currentUser: userAuth,
        });
      }
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
