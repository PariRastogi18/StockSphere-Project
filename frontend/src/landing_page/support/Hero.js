import React from "react";

function Hero() {
  return (
    <div
      style={{
        backgroundColor: "#fbfbfb",
        minHeight: "15rem",
        paddingTop: "2rem",
        paddingBottom: "2rem",
      }}
    >
      <div className="container">
        <div className="d-flex flex-column flex-sm-row justify-content-between align-items-start align-items-sm-center gap-3">
          <h1 style={{ fontSize: "clamp(1.5rem, 4vw, 2rem)", margin: 0 }}>
            Support
          </h1>
          <button
            style={{
              backgroundColor: "#397dd0",
              color: "white",
              minWidth: "7rem",
              height: "2.5rem",
              borderRadius: "5px",
              border: "none",
              fontSize: "1rem",
              fontWeight: "500",
              padding: "0 1rem",
              whiteSpace: "nowrap",
            }}
          >
            My ticket
          </button>
        </div>
        <input
          type="text"
          placeholder="Eg: How do I open my account, How do i activate F&O..."
          style={{
            width: "100%",
            padding: "1rem",
            border: "none",
            marginTop: "1.25rem",
            boxSizing: "border-box",
          }}
        />
      </div>
    </div>
  );
}

export default Hero;
