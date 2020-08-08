import React from "react";
import "./Products.css";
import "./Product.css";
import IconButton from "@material-ui/core/IconButton";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import { useStateValue } from "../StateProvider";

export default function Products() {
  return (
    <div className="products_container">
      <Product
        id="1"
        title="Google Chromecast 3 - Media Streamer"
        price="39,00"
        image="https://media.s-bol.com/gL3zjR7p7yyZ/168x196.jpg"
      />
      <Product
        id="2"
        title="Eastpak Leatherface M Reistas - Night Navy"
        price="43,49"
        image="https://media.s-bol.com/mw4ylDmG65R0/168x125.jpg"
      />
      <Product
        id="3"
        title="Eastpak Leatherface M Reistas - Night Navy"
        price="43,49"
        image="https://media.s-bol.com/mwJBmREWWKyp/168x85.jpg"
      />
      <Product
        id="4"
        title="3 Laags mondkapje - 50 Stuks - CE-Goedgekeurd"
        price="8,50"
        image="https://media.s-bol.com/Y7RXGvNk14EW/168x166.jpg"
      />
      <Product
        id="5"
        title="F1 2020 - F1 Seventy Edition - PS4"
        price="59,99"
        image="https://media.s-bol.com/q7XR9L6BrJQr/164x210.jpg"
      />
      <Product
        id="12345"
        title="Eastpak Leatherface M Reistas - Night Navy"
        price="43,49"
        image="https://media.s-bol.com/mwJBmREWWKyp/168x85.jpg"
      />
      <Product
        id="6"
        title="Eastpak Leatherface M Reistas - Night Navy"
        price="43,49"
        image="https://media.s-bol.com/mw4ylDmG65R0/168x125.jpg"
      />
      <Product
        id="7"
        title="Eastpak Leatherface M Reistas - Night Navy"
        price="43,49"
        image="https://media.s-bol.com/mwJBmREWWKyp/168x85.jpg"
      />
      <Product
        id="8"
        title="Eastpak Leatherface M Reistas - Night Navy"
        price="43,49"
        image="https://media.s-bol.com/mwJBmREWWKyp/168x85.jpg"
      />
      <Product
        id="9"
        title="Eastpak Leatherface M Reistas - Night Navy"
        price="43,49"
        image="https://media.s-bol.com/mwJBmREWWKyp/168x85.jpg"
      />
    </div>
  );
}

function Product({ id, title, image, price }) {
  //eslint-disable-next-line
  const [{ basket }, dispatch] = useStateValue();
  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        price: price,
        image: image
      }
    });
  };
  return (
    <div className="product">
      <img className="" src={image} alt={title} />
      <IconButton
        color="primary"
        aria-label="add to shopping cart"
        onClick={addToBasket}
      >
        <AddShoppingCartIcon />
      </IconButton>
      <p className="product_title">{title}</p>
      <p className="product_price">
        <small>€</small>
        <small> {price} </small>
      </p>
    </div>
  );
}
