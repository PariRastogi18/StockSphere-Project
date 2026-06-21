import React from "react";

const paragraphStyle = {
  fontSize: "1rem",
  lineHeight: "1.8",
  marginBottom: "15px",
};

function Team() {
  return (
    <section className="container mb-5">
      <h2
        className="text-center mb-4"
        style={{
          fontSize: "clamp(1.25rem, 2.5vw, 1.5rem)",
          lineHeight: "1.5",
        }}
      >
        People
      </h2>
      <div className="row align-items-center g-4 g-lg-5">
        <div className="col-12 col-lg-5 text-center px-3 px-md-4">
          <img
            src="media/images/nithinKamath.jpg"
            alt="Nithin Kamath"
            style={{
              width: "clamp(180px, 55vw, 300px)",
              height: "clamp(180px, 55vw, 300px)",
              borderRadius: "50%",
              objectFit: "cover",
            }}
          />
          <h5
            style={{
              fontSize: "1.125rem",
              fontWeight: "400",
              marginTop: "1.5rem",
            }}
          >
            Nithin Kamath
          </h5>
          <p style={{ fontSize: "0.9rem", color: "#666" }}>Founder, CEO</p>
        </div>
        <div className="col-12 col-lg-7 px-3 px-md-4 px-lg-5">
          <p style={paragraphStyle}>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>
          <p style={paragraphStyle}>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p style={paragraphStyle}>Playing basketball is his zen.</p>
        </div>
      </div>
    </section>
  );
}

export default Team;
