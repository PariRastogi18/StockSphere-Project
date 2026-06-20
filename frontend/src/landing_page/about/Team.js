import React from "react";

function Team() {
  return (
    <>
      <div className="container">
        <div className="row">
          <h2
            style={{
              textAlign: "center",
              fontSize: "1.5rem",
              lineHeight: "1.5",
              marginBottom: "2rem",
            }}
          >
            People
          </h2>
          <div
            className="col-5"
            style={{
              paddingRight: "2rem",
              paddingLeft: "4rem",
              textAlign: "center",
            }}
          >
            <img
              src="media/images/nithinKamath.jpg"
              style={{ width: "300px", height: "300px", borderRadius: "50%" }}
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
          <div className="col-7" style={{ padding: "3rem" }}>
            <p
              style={{
                fontSize: "1rem",
                lineHeight: "1.8",
                marginBottom: "15px",
              }}
            >
              Nithin bootstrapped and founded Zerodha in 2010 to overcome the
              hurdles he faced during his decade long stint as a trader. Today,
              Zerodha has changed the landscape of the Indian broking industry.
            </p>
            <p
              style={{
                fontSize: "1rem",
                lineHeight: "1.8",
                marginBottom: "15px",
              }}
            >
              He is a member of the SEBI Secondary Market Advisory Committee
              (SMAC) and the Market Data Advisory Committee (MDAC).
            </p>
            <p
              style={{
                fontSize: "1rem",
                lineHeight: "1.8",
                marginBottom: "15px",
              }}
            >
              Playing basketball is his zen.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Team;
