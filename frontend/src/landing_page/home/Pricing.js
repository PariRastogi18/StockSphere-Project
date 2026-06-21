import React from "react";

const pricingItems = [
  {
    image: "media/images/pricing0.svg",
    alt: "Free account opening",
    label: "Free account opening",
  },
  {
    image: "media/images/pricing0.svg",
    alt: "Free equity delivery",
    label: "Free equity delivery and direct mutual funds",
  },
  {
    image: "media/images/other-trades.svg",
    alt: "Intraday and F&O",
    label: "Intraday and F&O",
  },
];

function Pricing() {
  return (
    <section className="container my-5 py-md-5">
      <h2
        style={{
          fontSize: "clamp(1.25rem, 2.5vw, 1.5rem)",
          lineHeight: "1.5",
        }}
      >
        Unbeatable pricing
      </h2>

      <div className="row align-items-center g-4 mt-1">
        <div className="col-12 col-lg-6">
          <p
            style={{
              fontSize: "1rem",
              lineHeight: "1.8",
              marginBottom: "15px",
              maxWidth: "560px",
            }}
          >
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>
        </div>

        {pricingItems.map((item) => (
          <div className="col-12 col-sm-4 col-lg-2 text-center" key={item.alt}>
            <img
              src={item.image}
              alt={item.alt}
              className="img-fluid mb-2"
              style={{ maxWidth: "100px" }}
            />
            <p className="mb-0">
              <small style={{ color: "gray", lineHeight: "1.4" }}>
                {item.label}
              </small>
            </p>
          </div>
        ))}
      </div>
      <a className="d-inline-block mt-4" href="/" style={{ textDecoration: "none" }}>
        See pricing <i className="fa-solid fa-right-long"></i>
      </a>
    </section>
  );
}

export default Pricing;
