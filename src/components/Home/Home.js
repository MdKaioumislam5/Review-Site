import React, { useEffect, useState } from "react";
import Shop from "../Shop/Shop";
import "./Home.css";
import useProducts from '../../hooks/useProducts';

const Home = () => {
  const [products, setProducts] = useProducts([]);
  return (
    <section>
      <div className="container">
        <div className="text-container">
          <h1>Largest online Shop</h1>
          <h1>Create <span className="font-text">Amazing Experience</span></h1>
          <p>
            That is a amazing online shop there i'm always shopping my beautiful
            dresses. Every time i'm very happy to shopping that place & end of
            the day i'm saying that was amazing experience for both of us.
          </p>
          <button className="btn-grad">Review Live</button>
        </div>
        <div className="image-container">
          <img src={require("../Images/bike.png")} />
        </div>
      </div>
      <div className="products-container">
        <h1>That's All Reviewer</h1>
        <div className="product">
          {products.slice(0, 3).map((product) => (
            <Shop key={product.id} product={product}></Shop>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Home;
