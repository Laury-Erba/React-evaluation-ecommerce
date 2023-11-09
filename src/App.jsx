import { useState } from "react";
import { Provider } from 'react-redux'
import Navbar from "./component/Navbar";
import Home from "./component/Home.jsx";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/font-awesome/css/font-awesome.min.css";
import Products from "./component/Products";
import Cart from "./component/Cart";
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
import store from "./redux/store.js";
import Login from "./component/Login.jsx";

function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
