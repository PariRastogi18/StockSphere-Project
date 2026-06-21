import React from "react";

const paragraphStyle = {
  fontSize: "1rem",
  lineHeight: "1.8",
  marginBottom: "15px",
};

function Hero() {
  return (
    <section className="container my-5">
      <h2
        className="mx-auto mb-4 mb-md-5 text-center px-2"
        style={{
          maxWidth: "720px",
          fontSize: "clamp(1.25rem, 2.5vw, 1.5rem)",
          lineHeight: "1.5",
        }}
      >
        We pioneered the discount broking model in India. Now, we are breaking
        ground with our technology.
      </h2>
      <hr />
      <div className="row g-4 g-lg-5 py-4 py-md-5">
        <div className="col-12 col-lg-6 px-3 px-md-4 px-lg-5">
          <p style={paragraphStyle}>
            We kick-started operations on the 15th of August, 2010 with the goal
            of breaking all barriers that traders and investors face in India in
            terms of cost, support, and technology. We named the company
            Zerodha, a combination of Zero and "Rodha", the Sanskrit word for
            barrier.
          </p>
          <p style={paragraphStyle}>
            Today, our disruptive pricing models and in-house technology have
            made us the biggest stock broker in India.
          </p>
          <p style={paragraphStyle}>
            Over 1.6+ crore clients place billions of orders every year through
            our powerful ecosystem of investment platforms, contributing over
            15% of all Indian retail trading volumes.
          </p>
        </div>
        <div className="col-12 col-lg-6 px-3 px-md-4 px-lg-5">
          <p style={paragraphStyle}>
            In addition, we run a number of popular open online educational and
            community initiatives to empower retail traders and investors.
          </p>
          <p style={paragraphStyle}>
            Rainmatter, our fintech fund and incubator, has invested in several
            fintech startups with the goal of growing the Indian capital
            markets.
          </p>
          <p style={paragraphStyle}>
            And yet, we are always up to something new every day. Catch up on
            the latest updates on our blog or see what the media is saying about
            us or learn more about our business and product philosophies.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Hero;
