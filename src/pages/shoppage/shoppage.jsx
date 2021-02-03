import React, { Component } from "react";
import SHOP_DATA from "./shop-data";
import CollectionPreview from "../../components/collection-preview/collection-Preview";

export class shoppage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: SHOP_DATA,
    };
  }

  render() {
    let { collections } = this.state;
    return (
      <div className='shop-page'>
        {collections.map(({ id, ...otherCollection }) => (
          <CollectionPreview key={id} {...otherCollection} />
        ))}
      </div>
    );
  }
}

export default shoppage;
