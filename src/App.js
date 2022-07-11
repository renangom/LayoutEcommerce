import Cart from "./pages/Cart/Cart";
import Home from "./pages/Home";
import Login from "./pages/Login/Login";
import Product from "./pages/Product/Products";
import ProductList from "./pages/ProductList/ProductList";
import Register from "./pages/Register/Register";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

function App() {
  const user = true;
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/login" exact element={user ? <Home /> : <Login />} />
          <Route path="/register" exact element={<Register />} />
          <Route path="/carrinho" exact element={<Cart />} />
          <Route path="/produtos/:categoria" exact element={<ProductList />} />
          <Route path="/produto/:id" exact element={<Product />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
