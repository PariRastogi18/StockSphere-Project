import React from "react";

function NotFound() {
  return (
    <>
      <div className="container" style={{ marginTop: "8rem" }}>
        <div className="row text-center">
          <h1
            style={{
              fontWeight: "500",
              lineHeight: "1.5",
              marginBottom: "25px",
              opacity: "0.9",
            }}
          >
            404 Not Found
          </h1>
          <p
            style={{
              fontSize: "1rem",
              lineHeight: "1.8",
              marginBottom: "25px",
              color: "gray",
            }}
          >
            Sorry, the page you are looking does not exist.
          </p>
        </div>
      </div>
    </>
  );
}

export default NotFound;
