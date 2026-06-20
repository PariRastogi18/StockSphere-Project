import React from "react";

function Stats() {
  return (
    <div className="container">
      <div className="row mb-5 mt-5">
        <div
          className="mt-5"
          style={{ fontSize: "2rem", opacity: "0.9", fontWeight: "500" }}
        >
          Trust with confidence
        </div>
        <div className="col-5 p-5">
          <p
            style={{
              fontSize: "1.25rem",
              opacity: "0.9",
              lineHeight: "1.6",
              fontWeight: "500",
            }}
          >
            Customer-first always
          </p>
          <p style={{ fontSize: "1rem", lineHeight: "1.8", color: "gray" }}>
            That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores
            of equity investments, making us India’s largest broker;
            contributing to 15% of daily retail exchange volumes in India.
          </p>
          <p
            style={{
              fontSize: "1.25rem",
              opacity: "0.9",
              lineHeight: "1.6",
              fontWeight: "500",
            }}
          >
            No spam or gimmicks
          </p>
          <p style={{ fontSize: "1rem", lineHeight: "1.8", color: "gray" }}>
            No gimmicks, spam, "gamification", or annoying push notifications.
            High quality apps that you use at your pace, the way you like. Our
            philosophies.
          </p>
          <p
            style={{
              fontSize: "1.25rem",
              opacity: "0.9",
              lineHeight: "1.6",
              fontWeight: "500",
            }}
          >
            The Zerodha universe
          </p>
          <p style={{ fontSize: "1rem", lineHeight: "1.8", color: "gray" }}>
            Not just an app, but a whole ecosystem. Our investments in 30+
            fintech startups offer you tailored services specific to your needs.
          </p>
          <p
            style={{
              fontSize: "1.25rem",
              opacity: "0.9",
              lineHeight: "1.6",
              fontWeight: "500",
            }}
          >
            Do better with money
          </p>
          <p style={{ fontSize: "1rem", lineHeight: "1.8", color: "gray" }}>
            With initiatives like Nudge and Kill Switch, we don't just
            facilitate transactions, but actively help you do better with your
            money.
          </p>
        </div>
        <div className="col-7">
          <img src="media/images/ecosystem.png" style={{ width: "100%" }} />
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <a href="/" style={{ textDecoration: "none" }} className="m-5">
              Explore our products <i class="fa-solid fa-right-long"></i>
            </a>
            <a href="/" style={{ textDecoration: "none" }}>
              Try Kite demo <i class="fa-solid fa-right-long"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
