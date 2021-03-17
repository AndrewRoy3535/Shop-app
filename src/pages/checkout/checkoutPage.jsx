import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  selectCartItem,
  selectCartTotal,
} from "../../redux/cart/cart-selector";
import CheckoutItems from "../../components/checkout-items/checkoutItems";
import StripeButton from "../../components/stripe-button/stripeButton";

import "./checkoutPage.scss";

function checkoutPage({ cartItem, total }) {
  return (
    <div className='checkout-page'>
      <div className='checkout-header'>
        <div className='checkout-block'>
          <span>Product</span>
        </div>
        <div className='checkout-block'>
          <span>Description</span>
        </div>
        <div className='checkout-block'>
          <span>Quantity</span>
        </div>
        <div className='checkout-block'>
          <span>Price</span>
        </div>
        <div className='checkout-block'>
          <span>Remove</span>
        </div>
      </div>
      {cartItem.map((cartItem) => (
        <CheckoutItems key={cartItem.id} cartItem={cartItem} />
      ))}

      <div className='total'>
        <span>TOTAL: ${total}</span>
      </div>
      <StripeButton price={total} />
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  cartItem: selectCartItem,
  total: selectCartTotal,
});

export default connect(mapStateToProps)(checkoutPage);
