import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// importing pages to route
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import ProductDetail from "./pages/ProductDetail";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Bag from "./pages/Bag";
import { useSelector } from "react-redux";

function App() {
  const user = useSelector(state => state.user.currentUser);
  return (
    <Router>
      <Routes>

        <Route exact path="/" element={<Home />} />
        <Route exact path="/products/:category" element={<ProductList />} />
        <Route exact path="/productdetails/:id" element={<ProductDetail />} />
        <Route exact path="/bag" element={<Bag />} />
        <Route exact path="/register" element={user ? <Home /> : <Register />} />
        {/* check if user registered successfully */}
        <Route exact path="/login" element={user ? <Home /> : <Login />} />
        {/* check if the user is found */}
      </Routes>
    </Router>
  );
}

export default App;
