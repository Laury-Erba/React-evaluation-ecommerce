import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteItem } from "../redux/action/index";
import CartComponents from "./CartComponents";

const CartPage = () => {
  const cart = useSelector((state) => state.itemReducer.cart);
  console.log(cart);
  const dispatch = useDispatch();

  const handleDelete = (item) => {
    dispatch(deleteItem(item));
  };

  return cart.length !== 0 ? (
    <CartComponents cart={cart} handleDelete={handleDelete} />
  ) : (
    <p>Cart is empty</p>
  );
};

export default CartPage;
