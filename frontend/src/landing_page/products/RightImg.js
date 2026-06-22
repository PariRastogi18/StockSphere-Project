import React from "react";

function RightImg({ imgUrl, productName, description, link, linkName }) {
  return (
    <div className="container product-section">
      <div className="row align-items-center g-4">
        <div className="col-12 col-lg-4 order-2 order-lg-1">
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
          <div style={{ marginBottom: "2rem" }}>
            <a href={link} style={{ textDecoration: "none" }}>
              {linkName}
              <i className="fa-solid fa-arrow-right"></i>
            </a>
          </div>
        </div>
        <div className="col-12 col-lg-8 text-center order-1 order-lg-2">
          <img src={imgUrl} alt={productName} className="img-fluid" />
        </div>
      </div>
    </div>
  );
}

export default RightImg;
