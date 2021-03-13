import React from "react";
import CollectionOverview from "../../components/collection-overview/collectionOverview";
import { Route } from "react-router-dom";
import Collectionpage from "../collection/collectionpage";

const shoppage = ({ match }) => {
  console.log(match);
  return (
    <div className='shop-page'>
      <Route exact path={`${match.path}`} component={CollectionOverview} />
      <Route />
      <Route path={`${match.path}/:collectionId`} component={Collectionpage} />
    </div>
  );
};

export default shoppage;
