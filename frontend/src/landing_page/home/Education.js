import React from "react";

function Education() {
  return (
    <>
      <div className="container mb-5">
        <div className="row">
          <div className="col">
            <a href="/">
              <img src="media/images/education.svg" />
            </a>
          </div>
          <div className="col">
            <h2
              className="mt-5"
              style={{
                fontSize: "1.5rem",
                opacity: "0.9",
                fontWeight: "500",
                lineHeight: "1.5",
              }}
            >
              Free and open market education
            </h2>
            <p
              style={{
                fontSize: "1rem",
                lineHeight: "1.8",
                marginBottom: "15px",
              }}
            >
              Varsity, the largest online stock market education book in the
              world covering everything from the basics to advanced trading.
            </p>
            <a href="/" style={{ textDecoration: "none" }}>
              Varsity <i class="fa-solid fa-right-long"></i>
            </a>
            <p
              style={{
                fontSize: "1rem",
                lineHeight: "1.8",
                marginBottom: "15px",
                marginTop: "35px",
              }}
            >
              TradingQ&A, the most active trading and investment community in
              India for all your market related queries.
            </p>
            <a href="/" style={{ textDecoration: "none" }}>
              TradingQ&A <i class="fa-solid fa-right-long"></i>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Education;
