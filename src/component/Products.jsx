import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addItem } from "../redux/action/index";
import { useSelector } from "react-redux";

const Products = () => {

  const dispatch = useDispatch();
  const items = useSelector((state) => state.reducer.items);

  useEffect(() => {
    const getProducts = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.clone().json();

      console.log(data);

      dispatch({ type: "UPLOADITEMS", payload: data });
    };

    getProducts();

  }, []);


  const ProductsView = () => {
    return (
      <>
        {items?.map((product) => {
          return (
            <div key={product.id}>
              <div className="card" >
                <div className="col-md-3">
                  <img
                    src={product.image}
                    className="card-img-top"
                    alt={product.title}
                  />
                  <div className="card-body">
                    <h3 className="card-title">{product.title}</h3>
                    <p className="card-text">${product.price}</p>
                    <button onClick={() => dispatch(addItem(product))}>
                      Ajouter au panier
                    </button>
                    <p>Quantité</p>
                    <NavLink
                      to={`/products${product.id}`}
                      className="btn btn-outline-dark"
                    >
                      Acheter
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
        ;
      </>
    );
  };

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2> Les produits</h2>
          </div>
          <div className="row justify-content-center">
            <ProductsView />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
