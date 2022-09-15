import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Customers from "./pages/Customer";
import History from "./pages/History";
import TransferPage from "./components/TransferPage";
import CustomerPage from "./components/CustomerPage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/customers" element={<Customers />} />
      <Route path="/history" element={<History />} />
      <Route path="/customers/:id" element={<CustomerPage />} />
      <Route path="/transfer/:id" element={<TransferPage />} />
    </Routes>
    <Footer />
  </BrowserRouter>
);
