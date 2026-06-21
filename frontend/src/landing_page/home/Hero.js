import React from "react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="container">
      <div className="row justify-content-center text-center px-3 py-4 px-md-5 py-md-5">
        <img
          src="media/images/homeHero.png"
          alt="Online investing platform"
          className="img-fluid mb-4 mb-md-5"
          style={{ maxWidth: "780px", width: "100%" }}
        />
        <h1
          className="mb-3"
          style={{
            fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
            opacity: "0.9",
            lineHeight: "1.25",
            fontWeight: "400",
          }}
        >
          Invest in everything
        </h1>
        <p
          className="mx-auto mb-4 mb-md-5"
          style={{
            maxWidth: "720px",
            fontSize: "clamp(1rem, 2.5vw, 1.25rem)",
            lineHeight: "1.6",
          }}
        >
          Online platform to invest in stocks, derivatives, mutual funds, ETFs,
          bonds, and more.
        </p>
        <Link
          to="/signup"
          className="d-inline-block mb-4 mb-md-5"
          style={{
            minWidth: "180px",
            maxWidth: "260px",
            width: "fit-content",
            margin: "0 auto",
            backgroundColor: "blue",
            borderRadius: "3px",
            color: "white",
            padding: "9px 20px",
            fontSize: "1.1rem",
            border: "none",
            textDecoration: "none",
          }}
        >
          Signup for free
        </Link>
      </div>
    </section>
  );
}

export default Hero;
