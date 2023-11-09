import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
//import { deleteItem } from "../redux/action/index";
import { NavLink } from "react-router-dom";
import CartComponents from "./CartComponents";

const Cart = () => {
  const state = useSelector((state) => state.addItem);
  const dispatch = useDispatch();

  const handleClose = (item) => {
    dispatch(delItem(item));
  };
return (
  <CartComponents />
)

  // const emptyCart = () => {
  //   return (
  //     <div className="px-4 my-5 bg-light rounded-3 py-5">
  //       <div className="container py-4">
  //         <div className="row">
  //           <h3>Your Cart is Empty</h3>
  //         </div>
  //       </div>
  //     </div>
  //   );
  // };

  // const button = () => {
  //   return (
  //     <div className="container">
  //       <div className="row">
  //         <NavLink
  //           to="/checkout"
  //           className="btn btn-outline-primary mb-5 w-25 mx-auto"
  //         >
  //           Proceed To checkout
  //         </NavLink>
  //       </div>
  //     </div>
  //   );
  // };

  // return (
  //   <>
  //     {state.length === 0 && emptyCart()}
  //     {state.length !== 0 && state.map(cartItems)}
  //     {state.length !== 0 && button()}
  //   </>
  // );
};

export default Cart;
