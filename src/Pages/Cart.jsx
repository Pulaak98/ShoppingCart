import React from "react";
import { useSelector } from "react-redux";
import CartItems from "../Components/CartItems/CartItems";
import "./Css/Cart.css";

const Cart = () => {
  let total = 0;
  const { cart } = useSelector((product) => product.cart);

  cart.forEach((product) => {
    let subTotal = 0;
    subTotal = product.quantity * product.new_price;
    total += subTotal;
  });

  return (
    <div>
      <div className="container">
        {cart.map((product) => {
          return (
            <CartItems
              key={product.id}
              id={product.id}
              name={product.name}
              image={product.image}
              price={product.new_price}
              quantity={product.quantity}
            />
          );
        })}
      </div>
      <div className="checkout">
        <h3>Total: ${total}</h3>
        <button>Checkout</button>
      </div>
    </div>
  );
};

export default Cart;
