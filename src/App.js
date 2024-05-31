import React, { useState, useEffect } from "react";
import { BrowserRouter as Routes, Route, useNavigate, BrowserRouter, Router } from "react-router-dom";
import { CookiesProvider } from "react-cookie";
import Navbar from "./component/navbar";
import Footer from "./component/footer";
import Home from "./component/home";
import Login from "./component/login";
import Register from "./component/register";
import Om from "./component/about";
import Product from "./component/product_page";
import Account from "./component/account_page";


function Content() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated && window.location.pathname === "/") {
      navigate("/");
    }
  }, [isAuthenticated, navigate]);

  return (
      <BrowserRouter>
      <CookiesProvider>
      <Navbar />
       <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/login" element={<Login onLoginSuccess={() => setIsAuthenticated(true)} />} />
         <Route path="/about" element={<Om />} />
         <Route path="/product" element={<Product />} />
         <Route path="/account_page" element={<Account />} />
         <Route path="/register" element={<Register />} />
       </Routes>
     <Footer />
     </CookiesProvider>
     </BrowserRouter>
  );
}

export default function App() {

  return(
    <Router>
       <Content />
    </Router>
  )
}
