import React from "react";
import StripeCheckout from "react-stripe-checkout";

function stripeButton({ price }) {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51IVV2aIJGU0XcDNqRahaoY9i69tRMs1yd250N7ZKB2mFyoJBWDgntFpMjqD6UFspTNqyWWTXWeClwg66t4dOY8kI00aNtC5PLU";

  return <StripeCheckout label='pay now' />;
}

export default stripeButton;
