import React, { Component } from "react";
import CollectionOverview from "../../components/collection-overview/collectionOverview";
import { Route } from "react-router-dom";
import Collectionpage from "../collection/collectionpage";
import { firestore } from "../../firebase/firebase.utils";

class shoppage extends Component {
  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const collectionRef = firestore.collection("collections");

    collectionRef.onSnapshot(async (snapshot) => {
      console.log(snapshot);
    });
  }

  render() {
    const { match } = this.props;
    return (
      <div className='shop-page'>
        <Route exact path={`${match.path}`} component={CollectionOverview} />
        <Route />
        <Route
          path={`${match.path}/:collectionId`}
          component={Collectionpage}
        />
      </div>
    );
  }
}

export default shoppage;
