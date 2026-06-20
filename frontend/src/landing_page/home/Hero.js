import React from "react";
import { Link } from "react-router-dom";
function Hero() {
  return (
    <div className="container">
      <div className="row text-center p-5">
        <img src="media/images/homeHero.png" className="mb-5" />
        <h1
          style={{
            fontSize: "1.75",
            opacity: "0.9",
            lineHeight: "1.25",
            fontWeight: "400",
            marginTop: "10px",
          }}
        >
          Invest in everything
        </h1>
        <p className="mb-5" style={{ fontSize: "1.25rem" }}>
          Online platform to invest in stocks, derivatives, mutual funds, ETFs,
          bonds, and more.
        </p>
        <Link
          to="/signup"
          className="fs-5 mb-5"
          style={{
            width: "20%",
            margin: "0 auto",
            backgroundColor: "blue",
            borderRadius: "3px",
            color: "white",
            padding: "7px",
            fontSize: "large",
            border: "none",
            textDecoration: "none",
          }}
        >
          Signup for free
        </Link>
      </div>
    </div>
  );
}

export default Hero;
