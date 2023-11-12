import React from "react";
import "./CartItems.css";
import { useDispatch } from "react-redux";
import { AddCart, RemoveCart } from "../../Redux/CartSystem";

const CartItems = (props) => {
  const dispatch=useDispatch()

  return (
    <div className="cart-item">
      <img
        src={props.image}
        alt=""
      />
      <p>{props.name}</p>
      <p>Price: ${props.price}</p>
      <p>Quantity: {props.quantity}</p>
      <div className="button">
        <button
          onClick={() =>
            dispatch(RemoveCart({ id: props.id, quantity: props.quantity }))
          }>
          Remove
        </button>
        <button
          onClick={() =>
            dispatch(AddCart({ id: props.id, quantity: props.quantity }))
          }>
          Add
        </button>
      </div>
    </div>
  );
};

export default CartItems;
