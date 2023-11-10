import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteItem } from "../redux/action/index";
import CartComponents from "./CartComponents";

const CartPage = () => {
  const cart = useSelector((state) => state.reducer.cart);
  console.log(cart);
  const dispatch = useDispatch();

  const handleDelete = (item) => {
    dispatch(deleteItem(item));
  };

  return <CartComponents cart={cart} handleDelete={handleDelete} />;
};

export default CartPage;
