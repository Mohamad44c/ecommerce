import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// importing pages to route
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import ProductDetail from "./pages/ProductDetail";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Bag from "./pages/Bag";

function App() {

  return (
    <Router>
      <Routes>

        <Route exact path="/" element={<Home />} />
        <Route exact path="/products/:category" element={<ProductList />} />
        <Route exact path="/productdetails/:id" element={<ProductDetail />} />
        <Route exact path="/bag" element={<Bag />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/login" element={<Login />} />

      </Routes>
    </Router>
  );
}

export default App;
