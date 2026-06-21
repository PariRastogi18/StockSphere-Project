import React from "react";

function Kite() {
  return (
    <section
      style={{
        backgroundColor: "aliceblue",
      }}
      className="py-3 py-md-4 mb-5"
    >
      <div className="container">
        <div className="row align-items-center justify-content-center g-3 text-center text-lg-start">
          <div className="col-12 col-lg-2 text-center">
            <img
              src="media/images/kc-logo-landing.svg"
              alt="Kite Connect"
              className="img-fluid"
              style={{ maxWidth: "120px" }}
            />
          </div>
          <div
            className="col-12 col-lg-8"
            style={{
              fontSize: "clamp(0.95rem, 2vw, 1rem)",
              lineHeight: "1.7",
            }}
          >
            Need more? Build your own trading and investing experience with Kite
            Connect, simple HTTP APIs to place orders, stream market data,
            manage your account, and more. Explore{" "}
            <i className="fa-solid fa-right-long"></i>
          </div>
          <div className="col-12 col-lg-2 text-center">
            <img
              src="media/images/kc-banner-image.svg"
              alt=""
              className="img-fluid"
              style={{ maxWidth: "150px" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Kite;
