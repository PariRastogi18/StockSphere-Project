import React from "react";

function Hero() {
  return (
    <>
      <div
        style={{
          backgroundColor: "#fbfbfb",
          height: "15rem",
          paddingTop: "2rem",
        }}
      >
        <div className="container">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <h1>Support</h1>
            <button
              style={{
                backgroundColor: "#397dd0",
                color: "white",
                width: "7rem",
                height: "2.5rem",
                borderRadius: "5px",
                border: "none",
                fontSize: "1.25rem",
                fontWeight: "500",
              }}
            >
              My ticket
            </button>
          </div>
          <input
            type="text"
            placeholder="Eg: How do I open my account, How do i activate F&O...
"
            style={{
              width: "100%",
              padding: "1rem",
              border: "none",
              marginTop: "1.25rem",
            }}
          />
        </div>
      </div>
    </>
  );
}

export default Hero;
