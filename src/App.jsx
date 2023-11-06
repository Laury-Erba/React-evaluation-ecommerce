import { useState } from "react";
import Navbar from "./component/Navbar";
import Home from "./component/Home.jsx";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/font-awesome/css/font-awesome.min.css";
import Products from "./component/Products";
import Router from "router";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Router>
        <Route exact path="/" component={Home} />
        <Route exact path="/src/component/Products.jsx" component={Products} />
        <Navbar />
      </Router>
    </>
  );
}

export default App;
