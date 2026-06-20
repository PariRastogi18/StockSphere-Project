import React from "react";

function RightImg({ imgUrl, productName, description, link, linkName }) {
  return (
    <>
      <div
        className="container"
        style={{ marginTop: "5rem", marginBottom: "5rem" }}
      >
        <div className="row">
          <div className="col-4" style={{ marginTop: "8rem" }}>
            <h2
              style={{
                fontSize: "1.5rem",
                lineHeight: "1.5",
                fontWeight: "500",
                marginBottom: "20px",
              }}
            >
              {productName}
            </h2>
            <p
              style={{
                fontSize: "1rem",
                lineHeight: "1.8",
                marginBottom: "15px",
              }}
            >
              {description}
            </p>
            <div style={{ marginBottom: "2rem" }}>
              <a href={link} style={{ textDecoration: "none" }}>
                {linkName}
                <i class="fa-solid fa-arrow-right"></i>
              </a>
            </div>
          </div>
          <div className="col-8" style={{ textAlign: "center" }}>
            <img src={imgUrl} />
          </div>
        </div>
      </div>
    </>
  );
}

export default RightImg;
