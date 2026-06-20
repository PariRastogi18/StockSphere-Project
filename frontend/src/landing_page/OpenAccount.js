import React from "react";
import { Link } from "react-router-dom";
function OpenAccount() {
  return (
    <>
      <div className="container" style={{ marginTop: "8rem" }}>
        <div className="row text-center">
          <h2
            style={{
              fontSize: "1.5rem",
              fontWeight: "500",
              lineHeight: "1.5",
              marginBottom: "25px",
              opacity: "0.9",
            }}
          >
            Open a Zerodha account
          </h2>
          <p
            style={{
              fontSize: "1rem",
              lineHeight: "1.8",
              marginBottom: "25px",
              color: "gray",
            }}
          >
            Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and
            F&O trades.
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
    </>
  );
}

export default OpenAccount;
