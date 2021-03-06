import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import CollectionPreview from "../collection-preview/collection-Preview";
import { selectCollectionPreviews } from "../../redux/shop/shop-selector";

import "./collection-overview.scss";

function collectionOverview({ collections }) {
  return (
    <div className='collection-overview'>
      {collections.map(({ id, ...otherCollection }) => (
        <CollectionPreview key={id} {...otherCollection} />
      ))}
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionPreviews,
});

export default connect(mapStateToProps)(collectionOverview);
