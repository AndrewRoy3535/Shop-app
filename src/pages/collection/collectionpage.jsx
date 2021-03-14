import React from "react";
import CollectionItem from "../../components/collection-item/collection-item";
import { connect } from "react-redux";
import { selectCollectionId } from "../../redux/shop/shop-selector";

import "./collectionpage.scss";

function collectionpage({ collection }) {
  const { title, items } = collection;
  return (
    <div className='collection-page'>
      <h2 className='title'>{title}</h2>
      <div className='items'>
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollectionId(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(collectionpage);
