import React, { Component } from "react";
import CollectionOverview from "../../components/collection-overview/collectionOverview";
import { Route } from "react-router-dom";
import Collectionpage from "../collection/collectionpage";
import {
  firestore,
  convertCollectionsSnapshotToMap,
} from "../../firebase/firebase.utils";
import { connect } from "react-redux";
import WithSpinner from "../../components/with-spinner/withSpinner";
import { updateCollection } from "../../redux/shop/shop-action";

const CollectionOverviewSpinner = WithSpinner(CollectionOverview);
const CollectionPageSpinner = WithSpinner(Collectionpage);

class shoppage extends Component {
  state = {
    loading: true,
  };

  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const { updateCollection } = this.props;
    const collectionRef = firestore.collection("collections");

    collectionRef.onSnapshot(async (snapshot) => {
      const collectionMap = convertCollectionsSnapshotToMap(snapshot);
      updateCollection(collectionMap);
      this.setState({ loading: false });
    });
  }

  render() {
    const { match } = this.props;
    const { loading } = this.state;
    return (
      <div className='shop-page'>
        <Route
          exact
          path={`${match.path}`}
          render={(props) => (
            <CollectionOverviewSpinner isLoading={loading} {...props} />
          )}
        />
        <Route />
        <Route
          path={`${match.path}/:collectionId`}
          render={(props) => (
            <CollectionPageSpinner isLoading={loading} {...props} />
          )}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  updateCollection: (collectionMap) =>
    dispatch(updateCollection(collectionMap)),
});

export default connect(null, mapDispatchToProps)(shoppage);
