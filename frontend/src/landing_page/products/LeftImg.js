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
      <div
        className="container"
        style={{ marginTop: "5rem", marginBottom: "5rem" }}
      >
        <div className="row">
          <div className="col-8" style={{ textAlign: "center" }}>
            <img src={imgUrl} />
          </div>
          <div className="col-4">
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
              <a href={typeDemoLink} style={{ textDecoration: "none" }}>
                Try demo
                <i class="fa-solid fa-arrow-right"></i>
              </a>
              <a
                href={learnMoreLink}
                style={{ textDecoration: "none", marginLeft: "6rem" }}
              >
                Learn more
                <i class="fa-solid fa-arrow-right"></i>
              </a>
            </div>
            <div className="row">
              <div className="col">
                <a href="#">
                  <img src={googlePlayImg} />
                </a>
              </div>
              <div className="col">
                <a href="#">
                  <img src={appStoreImg} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{ marginBottom: "5rem" }}>
        <p
          style={{
            textAlign: "center",
            fontSize: "1.25rem",
            fontWeight: "400",
          }}
        >
          Want to know more about our technology stack? Check out the
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
