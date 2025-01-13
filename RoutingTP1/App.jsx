import "./App.css";
import axios from 'axios';
import Header from "./Header";
import Footer from "./footer";
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Error from "./Error";
import Home from "./Home";
// import Card from "./Card";
import Product from "./Product";
import Cards from "./Cards";

export default function App() {
  return (
    <BrowserRouter>
      <div className="app">


       
        <Routes>
          <Route path="/products/product" element={<Product />} />
          <Route path="/header" element={<Header />} />
          <Route path="/products" element={<Cards />} />
          <Route path="*" element={<Error />} />
          <Route index element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
