import { useState } from "react";
import "./App.css";
import Navbar from "./component/Navbar";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/font-awesome/css/font-awesome.min.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
    </>
  );
}

export default App;
