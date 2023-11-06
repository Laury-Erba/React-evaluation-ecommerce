import React from "react";
import Navbar from "./Navbar";
import Products from "./Products";

const Home = () => {
  return (
    <div className="hero">
      <div className="card">
        <img
          src="../assets/image test.png"
          className="card-img"
          alt="background"
          height="500px"
        />
        <div className="card-img-overlay">
          <div className="container">
            <h1 className="card-title">Card title</h1>
            <p className="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
            <p className="card-text">Last updated 3 mins ago</p>
          </div>
        </div>
      </div>
      <Products />
    </div>
  );
};

export default Home;
