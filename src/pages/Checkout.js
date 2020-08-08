import React from "react";
import "./Checkout.css";
import { useStateValue } from "../StateProvider";
import CheckoutProduct from "../components/CheckoutProduct";

export default function Checkout() {
  const [{ basket }] = useStateValue();

  return (
    <main>
      <div className="checkout_page">
        {basket?.length === 0 ? (
          <div>
            <h2>Your Shopping Cart is Empty</h2>
          </div>
        ) : (
          <div className="checkout_container">
            <h2 className="checkout_title">Your Shopping Cart</h2>

            {basket?.map(item => (
              <CheckoutProduct
                key={item.id}
                id={item.id}
                title={item.title}
                price={item.price}
                image={item.image}
              />
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
