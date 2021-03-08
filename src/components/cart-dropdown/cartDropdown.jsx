import React from "react";
import CustomButton from "../customButton/customButton";
import CartItem from "../cart-Item/cartItem";
import { connect } from "react-redux";
import { selectCartItem } from "../../redux/cart/cart-selector";
import "./cartDropdown.scss";
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router";
import { toggleCartHidden } from "../../redux/cart/cart-acton";

function cartDropdown({ cartItem, history, dispatch }) {
  return (
    <div className='cart-dropdown'>
      <div className='cart-items'>
        {cartItem.length ? (
          cartItem.map((item) => <CartItem key={item.id} item={item} />)
        ) : (
          <span className='empty-cart'>Your cart is empty</span>
        )}
      </div>
      <CustomButton
        onClick={() => {
          history.push("/checkoutPage");
          dispatch(toggleCartHidden());
        }}>
        Checkout
      </CustomButton>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  cartItem: selectCartItem,
});

export default withRouter(connect(mapStateToProps)(cartDropdown));
