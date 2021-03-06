import React from "react";
import CustomButton from "../customButton/customButton";
import CartItem from "../cart-Item/cartItem";
import { connect } from "react-redux";
import { selectCartItem } from "../../redux/cart/cart-selector";
import "./cartDropdown.scss";

function cartDropdown({ cartItem }) {
  return (
    <div className='cart-dropdown'>
      <div className='cart-items'>
        {cartItem.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>
      <CustomButton>Checkout</CustomButton>
    </div>
  );
}

const mapStateToProps = (state) => ({
  cartItem: selectCartItem(state),
});

export default connect(mapStateToProps)(cartDropdown);
