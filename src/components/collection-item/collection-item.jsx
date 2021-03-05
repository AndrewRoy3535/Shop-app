import React, { Fragment } from "react";
import CustomButton from "../customButton/customButton";
import { connect } from "react-redux";

import "./collection-item.scss";
import { addItemCart } from "../../redux/cart/cart-acton";

function collectionItem({ item, addItemCart }) {
  const { price, name, imageUrl } = item;
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
        <CustomButton inverted onClick={() => addItemCart(item)}>
          Add To Cart
        </CustomButton>
      </div>
    </Fragment>
  );
}

const mapDispatchToProps = (dispatch) => ({
  addItemCart: (item) => dispatch(addItemCart(item)),
});

export default connect(null, mapDispatchToProps)(collectionItem);
