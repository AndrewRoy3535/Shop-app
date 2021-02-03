import React, { Component } from "react";
import Homepage from "./pages/homepage/homepage";
import { Route, Switch } from "react-router-dom";
import shoppage from "./pages/shoppage/shoppage";
import "./App.css";

export class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path='/' exact component={Homepage} />
          <Route path='/shop' component={shoppage} />
        </Switch>
      </div>
    );
  }
}

export default App;
