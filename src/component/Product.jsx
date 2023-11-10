// import React, { useState, useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { addCart } from "../redux/action";
// import { NavLink } from "react-router-dom";
// import { useParams } from "react-router-dom";

// const Product = () => {
//   const { id } = useParams();
//   const [product, setProduct] = useState([]);
//   const [loading, setLoading] = useState(false);

  // const dispatch = useDispatch();
  // const addProduct = (product) => {
  //   dispatch(addCart(product));
  // };

//   useEffect(() => {
//     const getProduct = async () => {
//       setLoading(true);
//       const response = await fetch(
//         `https://https://fakestoreapi.com/products/${id}`
//       );
//       setProduct(await response.json());
//       setLoading(false);
//     };
//     getProduct();
//   }, [input]);

//   const Loading = () => {
//     return <>Loading...</>;
//   };

//   const ProductView = () => {
//     return (
//       <>
//         <div className="col-6">
//           <img src="{product.image}" alt="{product.title}" />
//           <div className="col-6">
//             <h3 className="descriptif">{product.category}</h3>
//             <h2>{product.title}</h2>
//           </div>
//         </div>
//       </>
//     );
//   };

//   return (
//     <div>
//       <div className="container">
//         <div className="row">{loading ? <Loading /> : <ProductView />}</div>
//       </div>
//     </div>
//   );
// };

// export default Product;

import React from 'react'

function Product() {
  return (
    <div>Product</div>
  )
}

export default Product