import React from "react";

function Kite() {
  return (
    <div
      style={{
        backgroundColor: "aliceblue",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      className="p-2 mb-5"
    >
      <div className="container">
        <div className="row">
          <div
            className="col-2"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              paddingRight: "2rem",
            }}
          >
            <img src="media/images/kc-logo-landing.svg" />
          </div>
          <div className="col-8">
            Need more? Build your own trading and investing experience with Kite
            Connect, simple HTTP APIs to place orders, stream market data,
            manage your account, and more. Explore{" "}
            <i class="fa-solid fa-right-long"></i>
          </div>
          <div className="col-2">
            <img src="media/images/kc-banner-image.svg" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Kite;
