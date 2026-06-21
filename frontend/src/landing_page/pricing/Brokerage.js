import React from "react";

const rows = [
  ["Individual account", "Free"],
  ["Minor account", "Free"],
  ["NRI account", "Rs. 500"],
  ["HUF account", "Free (online) / Rs. 500 (offline)"],
  ["Partnership, LLP, and Corporate accounts (offline only)", "Rs. 500"],
];

const cellStyle = {
  padding: "0.75rem",
  minWidth: "150px",
};

const rowStyle = {
  border: "1px solid #ddd",
  fontSize: "1rem",
};

function Brokerage() {
  return (
    <section>
      <p
        className="container px-3"
        style={{
          textAlign: "center",
          fontSize: "clamp(1rem, 2.5vw, 1.25rem)",
          fontWeight: "400",
          lineHeight: 1.8,
          marginBottom: "clamp(2.5rem, 7vw, 5rem)",
        }}
      >
        <a href="/" style={{ textDecoration: "none" }}>
          Calculate your costs upfront{" "}
        </a>
        using our brokerage calculator
      </p>

      <div className="container mb-5">
        <h2
          style={{
            fontSize: "clamp(1.25rem, 2.5vw, 1.5rem)",
            lineHeight: "1.5",
            fontWeight: "500",
            marginBottom: "20px",
          }}
        >
          Charges for account opening
        </h2>

        <div style={{ overflowX: "auto" }}>
          <table
            style={{
              borderRadius: "3px",
              border: "1px solid #ddd",
              width: "100%",
              minWidth: "520px",
            }}
          >
            <thead style={{ borderColor: "inherit", border: "1px solid #ddd" }}>
              <tr style={rowStyle}>
                <th style={cellStyle}>Type of account</th>
                <th style={cellStyle}>Charges</th>
              </tr>
            </thead>
            <tbody style={{ borderColor: "inherit" }}>
              {rows.map(([accountType, charge], index) => (
                <tr
                  key={accountType}
                  style={{
                    ...rowStyle,
                    backgroundColor: index % 2 ? "#f8f8f8" : "transparent",
                  }}
                >
                  <td style={cellStyle}>{accountType}</td>
                  <td style={cellStyle}>{charge}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

export default Brokerage;
