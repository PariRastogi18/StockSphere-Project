import React from "react";

function Pricing() {
  return (
    <>
      <div
        className="container"
        style={{ marginTop: "7rem", marginBottom: "5rem" }}
      >
        <h2 style={{ fontSize: "1.5rem", lineHeight: "1.5" }}>
          Unbeatable pricing
        </h2>

        <div className="row">
          <div
            className="col-6"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <p
              style={{
                fontSize: "1rem",
                lineHeight: "1.8",
                marginBottom: "15px",
              }}
            >
              We pioneered the concept of discount broking and price
              transparency in India. Flat fees and no hidden charges.
            </p>
          </div>

          <div className="col-2">
            <img src="media/images/pricing0.svg" width={"100px"} />
            <p>
              <sub style={{ color: "gray" }}>Free account opening</sub>
            </p>
          </div>
          <div className="col-2">
            <img src="media/images/pricing0.svg" width={"100px"} />
            <p>
              <sub style={{ color: "gray" }}>
                Free equity delivery and direct mutual funds
              </sub>
            </p>
          </div>
          <div className="col-2">
            <img src="media/images/other-trades.svg" width={"100px"} />
            <p>
              <sub style={{ color: "gray" }}>Intraday and F&O</sub>
            </p>
          </div>
        </div>
        <a href="/" style={{ textDecoration: "none" }}>
          See pricing <i class="fa-solid fa-right-long"></i>
        </a>
      </div>
    </>
  );
}

export default Pricing;
