import React, { Fragment } from "react";
import CustomButton from "../customButton/customButton";

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
        <CustomButton inverted>Add To Cart</CustomButton>
      </div>
    </Fragment>
  );
}

export default collectionItem;
