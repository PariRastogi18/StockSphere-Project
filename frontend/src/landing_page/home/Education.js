import React from "react";

const paragraphStyle = {
  fontSize: "1rem",
  lineHeight: "1.8",
  marginBottom: "15px",
};

function Education() {
  return (
    <section className="container mb-5">
      <div className="row align-items-center g-4 g-lg-5">
        <div className="col-12 col-lg-6 text-center">
          <a href="/">
            <img
              src="media/images/education.svg"
              alt="Market education"
              className="img-fluid"
              style={{ maxWidth: "520px", width: "100%" }}
            />
          </a>
        </div>
        <div className="col-12 col-lg-6 px-3 px-md-4 px-lg-5">
          <h2
            className="mt-2 mt-lg-0"
            style={{
              fontSize: "clamp(1.25rem, 2.5vw, 1.5rem)",
              opacity: "0.9",
              fontWeight: "500",
              lineHeight: "1.5",
            }}
          >
            Free and open market education
          </h2>
          <p style={paragraphStyle}>
            Varsity, the largest online stock market education book in the world
            covering everything from the basics to advanced trading.
          </p>
          <a href="/" style={{ textDecoration: "none" }}>
            Varsity <i className="fa-solid fa-right-long"></i>
          </a>
          <p style={{ ...paragraphStyle, marginTop: "35px" }}>
            TradingQ&A, the most active trading and investment community in
            India for all your market related queries.
          </p>
          <a href="/" style={{ textDecoration: "none" }}>
            TradingQ&A <i className="fa-solid fa-right-long"></i>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Education;
