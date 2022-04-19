import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import Cart from "./screens/Cart";
import Navbar from "./components/Navbar";
import { LinkContainer } from "react-router-bootstrap";
import Footer from "./components/Footer";
import Newsletter from "./components/Newsletter";
import products from "./context/products";
import { DataProvider } from "./context/DataContext";


function App() {
  return (
    <BrowserRouter>
      <DataProvider>
        <div>
          <header>
            <LinkContainer to="/">
              <Navbar />
            </LinkContainer>
          </header>
          <main>
            <Routes>
              <Route
                path="/data/:slug"
                element={<ProductScreen storeProduct={products} />}
              />
              <Route
                path="/"
                element={<HomeScreen storeProduct={products} />}
              />
              <Route
                path="/cart"
                element={<Cart />}
              />
            </Routes>
          </main>
          <footer>
            <Newsletter />
            <Footer />
          </footer>
        </div>
      </DataProvider>
    </BrowserRouter>
  );
}

export default App;
