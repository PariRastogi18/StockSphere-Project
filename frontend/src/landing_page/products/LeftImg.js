import React from "react";

function LeftImg({
  imgUrl,
  productName,
  description,
  typeDemoLink,
  learnMoreLink,
  googlePlayImg,
  appStoreImg,
}) {
  return (
    <>
      <div className="container product-section">
        <div className="row align-items-center g-4">
          <div className="col-12 col-lg-8 text-center order-1 order-lg-1">
            <img src={imgUrl} alt={productName} className="img-fluid" />
          </div>
          <div className="col-12 col-lg-4 order-2 order-lg-2">
            <h2
              style={{
                fontSize: "clamp(1.25rem, 3vw, 1.5rem)",
                lineHeight: "1.5",
                fontWeight: "500",
                marginBottom: "20px",
              }}
            >
              {productName}
            </h2>
            <p
              style={{
                fontSize: "clamp(0.95rem, 2vw, 1rem)",
                lineHeight: "1.8",
                marginBottom: "15px",
              }}
            >
              {description}
            </p>
            <div className="product-links">
              <a href={typeDemoLink} style={{ textDecoration: "none" }}>
                Try demo
                <i className="fa-solid fa-arrow-right"></i>
              </a>
              <a href={learnMoreLink} style={{ textDecoration: "none" }}>
                Learn more
                <i className="fa-solid fa-arrow-right"></i>
              </a>
            </div>
            <div className="row g-3">
              <div className="col-6">
                <a href="#">
                  <img src={googlePlayImg} alt="Google Play" className="img-fluid" />
                </a>
              </div>
              <div className="col-6">
                <a href="#">
                  <img src={appStoreImg} alt="App Store" className="img-fluid" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{ marginBottom: "clamp(2rem, 6vw, 5rem)" }}>
        <p
          className="px-3"
          style={{
            textAlign: "center",
            fontSize: "clamp(1rem, 2.5vw, 1.25rem)",
            fontWeight: "400",
          }}
        >
          Want to know more about our technology stack? Check out the{" "}
          <a href="#" style={{ textDecoration: "none" }}>
            Zerodha.tech
          </a>{" "}
          blog.
        </p>
      </div>
    </>
  );
}

export default LeftImg;
