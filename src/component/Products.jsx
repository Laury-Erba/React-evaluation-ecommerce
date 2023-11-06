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
        <div className="buttons justify-content-center">
          <button className="btn-outline-dark">Men's clothing</button>
          <button className="btn-outline-dark">Autre</button>
        </div>
        {Filter.map((product) => {
          return (
            <>
              <div className="col-md-3">
                <div class="card">
                  <img
                    src={product.image}
                    class="card-img-top"
                    alt={product.title}
                  />
                  <div class="card-body">
                    <h3 class="card-title">{product.title}</h3>
                    <p class="card-text">${product.price}</p>
                    <a href="#" class="btn btn-primary">
                      Go somewhere
                    </a>
                  </div>
                </div>
              </div>
            </>
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
