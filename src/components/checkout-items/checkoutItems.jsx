import React from "react";
import { connect } from "react-redux";
import "./checkoutItems.scss";
import {
  removeCartItem,
  addItemCart,
  decreaseCartItem,
} from "../../redux/cart/cart-acton";

function checkoutItems({ cartItem, removeItem, addItem, decreaseItem }) {
  const { imageUrl, price, quantity, name } = cartItem;
  return (
    <div className='checkout-item'>
      <div className='image-container'>
        <img src={imageUrl} alt='item' />
      </div>
      <span className='name'>{name}</span>
      <span className='quantity'>
        <div className='arrow' onClick={() => decreaseItem(cartItem)}>
          &#10096;
        </div>
        <span className='value'>{quantity}</span>
        <div className='arrow' onClick={() => addItem(cartItem)}>
          &#10097;
        </div>
      </span>
      <span className='price'>{price}</span>
      <div className='remove-button' onClick={() => removeItem(cartItem)}>
        &#10060;
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  removeItem: (item) => dispatch(removeCartItem(item)),
  addItem: (item) => dispatch(addItemCart(item)),
  decreaseItem: (item) => dispatch(decreaseCartItem(item)),
});

export default connect(null, mapDispatchToProps)(checkoutItems);
