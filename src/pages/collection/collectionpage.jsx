import React from "react";
import CollectionItem from "../../components/collection-item/collection-item";
import { connect } from "react-redux";
import { selectCollectionId } from "../../redux/shop/shop-selector";

function collectionpage({ collection }) {
  console.log(collection);
  return <div className='collection-page'>Collection Page</div>;
}

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollectionId(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(collectionpage);
