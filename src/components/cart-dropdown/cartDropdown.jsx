import React from "react";
import CustomButton from "../customButton/customButton";

import "./cartDropdown.scss";

function cartDropdown() {
  return (
    <div className='cart-dropdown'>
      <div className='cart-items'></div>
      <CustomButton>Checkout</CustomButton>
    </div>
  );
}

export default cartDropdown;
