import React, { Fragment } from "react";

import "./collection-item.scss";

function collectionItem({ id, price, name, imageUrl }) {
  return (
    <Fragment>
      <div className='collection-item'>
        <div
          className='image'
          style={{ backgroundImage: `url(${imageUrl})` }}
        />
        <div className='collection-footer'>
          <span className='name'>{name}</span>
          <span className='price'>{price}</span>
        </div>
      </div>
      <div></div>
    </Fragment>
  );
}

export default collectionItem;
