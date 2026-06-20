import React from "react";

function Hero() {
  return (
    <>
      <div className="container" style={{ marginTop: "5rem" }}>
        <h2
          style={{
            width: "50%",
            margin: "auto",
            fontSize: "1.75rem",
            lineHeight: "1.25",
            textAlign: "center",
            marginBottom: "1.25rem",
          }}
        >
          Zerodha Products
        </h2>
        <p
          style={{
            fontSize: "1.25rem",
            fontWeight: "400",
            marginTop: "10px",
            lineHeight: "1.8",
            marginBottom: "15px",
            textAlign: "center",
          }}
        >
          Sleek, modern, and intuitive trading platforms
        </p>
        <p style={{ textAlign: "center", marginBottom: "5rem" }}>
          Check out our
          <a href="#" style={{ textDecoration: "none" }}>
            {" "}
            investment offerings<i class="fa-solid fa-arrow-right"></i>
          </a>
        </p>
        <hr />
      </div>
    </>
  );
}

export default Hero;
