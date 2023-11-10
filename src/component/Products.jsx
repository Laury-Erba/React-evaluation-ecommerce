import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addCart } from "../redux/action";

import { useDispatch } from "react-redux";
const Products = () => {
  const [data, setData] = useState([]);
  const [Filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let componentProducts = true;

    const getProducts = async () => {
      setLoading(true);
      const response = await fetch("https://fakestoreapi.com/products");
      if (componentProducts) {
        setData(await response.clone().json());
        setFilter(await response.json());
        setLoading(false);
      }
    };

    getProducts();

    return () => {
      componentProducts = false;
    };
  }, []);

  const Loading = () => {
    return <>Loading....</>;
  };
  const ProductsView = () => {
    return (
      <>
        <div className="buttons justify-content-center">
          <button
            className="btn-outline-dark"
            onClick={() => FilterProduct("men's clothing")}
          >
            Men's clothing
          </button>
          <button className="btn-outline-dark" onClick={() => setFilter(data)}>
            Autre
          </button>
        </div>
        {Filter.map((product) => {
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
                    <button onClick={() => addProduct(product)}>
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
            {loading ? <Loading /> : <ProductsView />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
