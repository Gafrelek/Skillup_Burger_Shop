import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./assets/components/home/Home";
import Footer from "./assets/components/layout/Footer";
import Header from "./assets/components/layout/Header";
import Contact from "./assets/components/contact/Contact";
import Menu from "./assets/components/home/Menu";
import Cart from "./assets/components/cart/Cart";

import Shipping from "./assets/components/cart/Shipping";

import Login from "./assets/components/login/Login";
import Profile from "./assets/components/profile/Profile";
import MyOrders from "./assets/components/myOrders/MyOrders";

import OrderDetails from "./assets/components/myOrders/OrderDetails";
import About from "./assets/components/about/About";

import "./styles/app.scss";
import "./styles/DropdownMenu.scss";
import "./styles/header.scss";
import "./styles/home.scss";
import "./styles/founder.scss";
import "./styles/menu.scss";
import "./styles/footer.scss";
import "./styles/contact.scss";
import "./styles/cart.scss";
import "./styles/shipping.scss";
import "./styles/login.scss";
import "./styles/profile.scss";
import "./styles/table.scss";
import "./styles/orderDetails.scss";
import "./styles/about.scss";

function App() {
  return (
    <Router>
      <Header isAuthenticated={true} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/shipping" element={<Shipping />} />

        <Route path="/login" element={<Login />} />
        <Route path="/me" element={<Profile />} />
        <Route path="/myorders" element={<MyOrders />} />

        <Route path="/order/:id" element={<OrderDetails />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
