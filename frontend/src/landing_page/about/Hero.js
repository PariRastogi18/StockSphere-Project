import React from "react";

function Hero() {
  return (
    <>
      <div
        className="container"
        style={{ marginTop: "5rem", marginBottom: "3rem" }}
      >
        <h2
          style={{
            width: "50%",
            margin: "auto",
            fontSize: "1.5rem",
            lineHeight: "1.5",
            textAlign: "center",
            marginBottom: "5rem",
          }}
        >
          We pioneered the discount broking model in India. Now, we are breaking
          ground with our technology.
        </h2>
        <hr />
        <div className="row p-5">
          <div
            className="col"
            style={{ paddingRight: "2rem", paddingLeft: "5rem" }}
          >
            <p
              style={{
                fontSize: "1rem",
                lineHeight: "1.8",
                marginBottom: "15px",
              }}
            >
              We kick-started operations on the 15th of August, 2010 with the
              goal of breaking all barriers that traders and investors face in
              India in terms of cost, support, and technology. We named the
              company Zerodha, a combination of Zero and "Rodha", the Sanskrit
              word for barrier.
            </p>
            <p
              style={{
                fontSize: "1rem",
                lineHeight: "1.8",
                marginBottom: "15px",
              }}
            >
              Today, our disruptive pricing models and in-house technology have
              made us the biggest stock broker in India.
            </p>
            <p
              style={{
                fontSize: "1rem",
                lineHeight: "1.8",
                marginBottom: "15px",
              }}
            >
              Over 1.6+ crore clients place billions of orders every year
              through our powerful ecosystem of investment platforms,
              contributing over 15% of all Indian retail trading volumes.
            </p>
          </div>
          <div
            className="col"
            style={{ paddingRight: "5rem", paddingLeft: "2rem" }}
          >
            <p
              style={{
                fontSize: "1rem",
                lineHeight: "1.8",
                marginBottom: "15px",
              }}
            >
              In addition, we run a number of popular open online educational
              and community initiatives to empower retail traders and investors.
            </p>
            <p
              style={{
                fontSize: "1rem",
                lineHeight: "1.8",
                marginBottom: "15px",
              }}
            >
              Rainmatter, our fintech fund and incubator, has invested in
              several fintech startups with the goal of growing the Indian
              capital markets.
            </p>
            <p
              style={{
                fontSize: "1rem",
                lineHeight: "1.8",
                marginBottom: "15px",
              }}
            >
              And yet, we are always up to something new every day. Catch up on
              the latest updates on our blog or see what the media is saying
              about us or learn more about our business and product
              philosophies.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
