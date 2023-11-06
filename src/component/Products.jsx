import React, { useState, useEffect } from "react";

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
        <div className="buttons">
          <button className="btn-outline-dark">Men's clothing</button>
        </div>
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
