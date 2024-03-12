import React from "react";
import Products from "./products";
import img from '../assets/bg.jpg'
import Child from "./child";

const Home = () => {
  return (
    <><Child name="Monesh" age="25" /><div className="hero">
      <div className="card bg-dark text-white border-0">
        <img
          src={img}
          className="card-img"
          alt="Background"
          height="550px" />
        <div className="card-img-overlay d-flex flex-column justify-content-center">
          <div className="container">
            <h5 data-testid='home' className="card-title display-3 fw-bolder mb-0">
              NEW SEASON ARRIVALS
            </h5>
            <p className="card-text lead fs-2">CHECK OUT ALL THE TRENDS</p>
          </div>
        </div>
      </div>
      <Products />
    </div></>
  );
};

export default Home;
