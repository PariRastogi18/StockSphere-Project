import React from "react";

function Home() {
  return (
    <>
      <h1
        style={{
          fontSize: "1.75rem",
          lineHeight: "1.25",
          fontWeight: "500",
          textAlign: "center",
          marginTop: "5rem",
        }}
      >
        Charge
      </h1>
      <p
        style={{
          fontSize: "1.25rem",
          fontWeight: "400",
          marginTop: "10px",
          color: "#9b9b9b",
          lineHeight: "1.8",
          textAlign: "center",
          marginBottom: "5rem",
        }}
      >
        List of all charges and taxes
      </p>

      <div className="container mb-5">
        <div className="row">
          <div className="col" style={{ textAlign: "center" }}>
            <img
              src="media/images/pricing0.svg"
              style={{ width: "250px", marginBottom: "15px" }}
            />
            <h2
              style={{
                fontSize: "1.75rem",
                lineHeight: "1.6",
                fontWeight: "500",
                marginBottom: "20px",
              }}
            >
              Free equity delivery
            </h2>
            <p
              style={{
                fontSize: "1rem",
                lineHeight: "1.8",
                marginBottom: "15px",
                color: "#666",
              }}
            >
              All equity delivery investments (NSE, BSE), are absolutely free —
              ₹ 0 brokerage.
            </p>
          </div>
          <div className="col " style={{ textAlign: "center" }}>
            <img
              src="media/images/other-trades.svg"
              style={{ width: "250px", marginBottom: "15px" }}
            />
            <h2
              style={{
                fontSize: "1.75rem",
                lineHeight: "1.6",
                fontWeight: "500",
                marginBottom: "20px",
              }}
            >
              Intraday and F&O trades
            </h2>
            <p
              style={{
                fontSize: "1rem",
                lineHeight: "1.8",
                marginBottom: "15px",
                color: "#666",
              }}
            >
              Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
              intraday trades across equity, currency, and commodity trades.
              Flat ₹20 on all option trades.
            </p>
          </div>
          <div className="col " style={{ textAlign: "center" }}>
            <img
              src="media/images/pricing0.svg"
              style={{ width: "250px", marginBottom: "15px" }}
            />
            <h2
              style={{
                fontSize: "1.75rem",
                lineHeight: "1.6",
                fontWeight: "500",
                marginBottom: "20px",
              }}
            >
              Free direct MF
            </h2>
            <p
              style={{
                fontSize: "1rem",
                lineHeight: "1.8",
                marginBottom: "15px",
                color: "#666",
              }}
            >
              All direct mutual fund investments are absolutely free — ₹ 0
              commissions & DP charges.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
