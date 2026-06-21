import React from "react";

const stats = [
  {
    title: "Customer-first always",
    copy:
      "That's why 1.6+ crore customers trust Zerodha with ~ Rs. 6 lakh crores of equity investments, making us India's largest broker; contributing to 15% of daily retail exchange volumes in India.",
  },
  {
    title: "No spam or gimmicks",
    copy:
      'No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like. Our philosophies.',
  },
  {
    title: "The Zerodha universe",
    copy:
      "Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.",
  },
  {
    title: "Do better with money",
    copy:
      "With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.",
  },
];

const titleStyle = {
  fontSize: "1.25rem",
  opacity: "0.9",
  lineHeight: "1.6",
  fontWeight: "500",
};

const copyStyle = {
  fontSize: "1rem",
  lineHeight: "1.8",
  color: "gray",
};

function Stats() {
  return (
    <section className="container my-5 py-md-4">
      <div className="row align-items-center g-4 g-lg-5">
        <div className="col-12">
          <h2
            className="mb-0"
            style={{
              fontSize: "clamp(1.5rem, 4vw, 2rem)",
              opacity: "0.9",
              fontWeight: "500",
            }}
          >
            Trust with confidence
          </h2>
        </div>

        <div className="col-12 col-lg-5 px-3 px-md-4">
          {stats.map((item) => (
            <div className="mb-4" key={item.title}>
              <p className="mb-2" style={titleStyle}>
                {item.title}
              </p>
              <p className="mb-0" style={copyStyle}>
                {item.copy}
              </p>
            </div>
          ))}
        </div>

        <div className="col-12 col-lg-7 text-center">
          <img
            src="media/images/ecosystem.png"
            alt="Zerodha ecosystem"
            className="img-fluid"
          />
          <div className="d-flex flex-column flex-sm-row justify-content-center align-items-center gap-3 gap-sm-5 mt-4">
            <a href="/" style={{ textDecoration: "none" }}>
              Explore our products{" "}
              <i className="fa-solid fa-right-long"></i>
            </a>
            <a href="/" style={{ textDecoration: "none" }}>
              Try Kite demo <i className="fa-solid fa-right-long"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Stats;
