import React from "react";
import "./CheckoutProduct.css";
import { useStateValue } from "../StateProvider";

export default function CheckoutProduct({ id, title, image, price }) {
  // eslint-disable-next-line
  const [{ basket }, dispatch] = useStateValue();
  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id
    });
  };
  return (
    <div className="checkout_product">
      <img className="checkout_product_image" src={image} alt={title} />
      <div className="checkout_product_title">
        <p>{title}</p>
        <button onClick={removeFromBasket}>Remove from cart</button>
      </div>
      <div className="checkout_product_price">
        <p>
          <small>€</small>
          <small> {price} </small>
        </p>
      </div>
    </div>
  );
}
