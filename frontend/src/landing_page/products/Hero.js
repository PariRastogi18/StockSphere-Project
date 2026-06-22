import React from "react";

function Hero() {
  return (
    <div className="container product-section">
      <h2
        className="mx-auto text-center px-3"
        style={{
          maxWidth: "720px",
          fontSize: "clamp(1.25rem, 4vw, 1.75rem)",
          lineHeight: "1.25",
          marginBottom: "1.25rem",
        }}
      >
        Zerodha Products
      </h2>
      <p
        className="text-center px-3"
        style={{
          fontSize: "clamp(1rem, 2.5vw, 1.25rem)",
          fontWeight: "400",
          lineHeight: "1.8",
          marginBottom: "15px",
        }}
      >
        Sleek, modern, and intuitive trading platforms
      </p>
      <p className="text-center px-3" style={{ marginBottom: "clamp(2rem, 5vw, 5rem)" }}>
        Check out our
        <a href="#" style={{ textDecoration: "none" }}>
          {" "}
          investment offerings<i className="fa-solid fa-arrow-right"></i>
        </a>
      </p>
      <hr />
    </div>
  );
}

export default Hero;
