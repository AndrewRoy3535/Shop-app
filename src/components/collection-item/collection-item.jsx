import React from "react";

import "./collection-item.scss";

function collectionItem({ id, price, name, imageUrl }) {
  return (
    <div className='collection-item'>
      <div className='image' style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className='collection-footer'>
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
      </div>
    </div>
  );
}

export default collectionItem;
