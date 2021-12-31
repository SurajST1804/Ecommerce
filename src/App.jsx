import React from "react";
import HeaderComponent from "./Components/HeaderComponent/HeaderComponent";
import Home from "./Components/SliderComponent/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SingleProduct from "./Pages/SingleProduct";
import Footer from "./Components/SliderComponent/Footer";
import Login from "./Pages/Login";

const App = () => {
  return (
    <Router>
      <section>
        <article>
          <header>
            <HeaderComponent />
          </header>
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/product/:id" element={<SingleProduct />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </main>
        </article>
      </section>
    </Router>
  );
};

export default App;
