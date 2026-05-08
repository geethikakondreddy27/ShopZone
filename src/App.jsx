import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import ProtectedRoute from "./components/ProtectedRoute";

import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Contact from "./pages/Contact";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Checkout from "./pages/Checkout";
import OrderSuccess from "./pages/OrderSuccess";
import Tracking from "./pages/Tracking";
import Orders from "./pages/Orders";
import Signup from "./pages/Signup";
import ForgotPassword from "./pages/ForgotPassword";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/shop" element={<Shop />} />

        <Route path="/contact" element={<Contact />} />

        <Route path="/product/:id" element={<ProductDetails />} />

        <Route path="/cart" element={<Cart />} />

        <Route path="/signup" element={<Signup />} />

        <Route path="/login" element={<Login />} />

        <Route
  path="/checkout"
  element={<Checkout />}
/>
        <Route path="/order-success" element={<OrderSuccess />} />

        <Route path="/tracking" element={<Tracking />} />

        <Route path="/orders" element={<Orders />} />

          <Route
  path="/forgot-password"
  element={<ForgotPassword />}
/> 

      </Routes>
      <Footer />
    </>
  );
}

export default App;
