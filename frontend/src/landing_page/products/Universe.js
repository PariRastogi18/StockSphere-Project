import React from "react";

function Universe() {
  return (
    <>
      <h2
        style={{
          textAlign: "center",
          fontSize: "1.5rem",
          lineHeight: "1.5",
          fontWeight: "500",
          marginBottom: "1.5rem",
        }}
      >
        The Zerodha Universe
      </h2>
      <p
        style={{
          textAlign: "center",
          fontSize: "1rem",
          lineHeight: "1.8",
          marginBottom: "4rem",
        }}
      >
        Extend your trading and investment experience even further with our
        partner platforms
      </p>
      <div className="container">
        <div className="row">
          <div className="col " style={{ textAlign: "center" }}>
            <img
              src="media/images/zerodhaFundhouse.png"
              style={{ height: "55px" }}
            />
            <p
              style={{
                lineHeight: "18px",
                marginTop: "10px",
                color: "#9b9b9b",
                fontSize: "0.75rem",
              }}
            >
              Our asset management venture
              <br />
              that is creating simple and transparent index
              <br />
              funds to help you save for your goals.
            </p>
          </div>
          <div className="col " style={{ textAlign: "center" }}>
            <img
              src="media/images/sensibullLogo.svg"
              style={{ height: "55px" }}
            />
            <p
              style={{
                lineHeight: "18px",
                marginTop: "10px",
                color: "#9b9b9b",
                fontSize: "0.75rem",
              }}
            >
              Options trading platform that lets you
              <br />
              create strategies, analyze positions, and examine
              <br />
              data points like open interest, FII/DII, and more.
            </p>
          </div>
          <div className="col " style={{ textAlign: "center" }}>
            <img src="media/images/tijori.svg" style={{ height: "55px" }} />
            <p
              style={{
                lineHeight: "18px",
                marginTop: "10px",
                color: "#9b9b9b",
                fontSize: "0.75rem",
              }}
            >
              Investment research platform
              <br />
              that offers detailed insights on stocks,
              <br />
              sectors, supply chains, and more.
            </p>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col " style={{ textAlign: "center" }}>
            <img src="media/images/streakLogo.png" style={{ height: "55px" }} />
            <p
              style={{
                lineHeight: "18px",
                marginTop: "10px",
                color: "#9b9b9b",
                fontSize: "0.75rem",
              }}
            >
              Systematic trading platform
              <br />
              that allows you to create and backtest
              <br />
              strategies without coding.
            </p>
          </div>
          <div className="col " style={{ textAlign: "center" }}>
            <img
              src="media/images/smallcaseLogo.png"
              style={{ height: "55px" }}
            />
            <p
              style={{
                lineHeight: "18px",
                marginTop: "10px",
                color: "#9b9b9b",
                fontSize: "0.75rem",
              }}
            >
              Thematic investing platform
              <br />
              that helps you invest in diversified
              <br />
              baskets of stocks on ETFs.
            </p>
          </div>
          <div className="col " style={{ textAlign: "center" }}>
            <img src="media/images/dittoLogo.png" style={{ height: "55px" }} />
            <p
              style={{
                lineHeight: "18px",
                marginTop: "10px",
                color: "#9b9b9b",
                fontSize: "0.75rem",
              }}
            >
              Personalized advice on life
              <br />
              and health insurance. No spam
              <br />
              and no mis-selling.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Universe;
