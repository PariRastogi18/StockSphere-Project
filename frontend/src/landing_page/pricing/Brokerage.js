import React from "react";

function Brokerage() {
  return (
    <>
      <p
        style={{
          textAlign: "center",
          fontSize: "1.25rem",
          fontWeight: "400",
          lineHeight: 1.8,
          marginBottom: "5rem",
        }}
      >
        <a href="#" style={{ textDecoration: "none" }}>
          Calculate your costs upfront{" "}
        </a>
        using our brokerage calculator
      </p>
      <div className="container" style={{ marginBottom: "5rem" }}>
        <h2
          style={{
            fontSize: "1.5rem",
            lineHeight: "1.5",
            fontWeight: "500",
            marginBottom: "20px",
          }}
        >
          Charges for account opening
        </h2>

        <table
          style={{
            borderRadius: "3px",
            border: "1px solid #ddd",
            width: "100%",
          }}
        >
          <thead style={{ borderColor: "inherit", border: "1px solid #ddd" }}>
            <tr
              style={{
                border: "1px solid #ddd",
                fontSize: "16px",
              }}
            >
              <th style={{ padding: "0.75rem" }}>Type of account</th>
              <th style={{ padding: "0.75rem" }}>Charges</th>
            </tr>
          </thead>
          <tbody style={{ borderColor: "inherit" }}>
            <tr
              style={{
                border: "1px solid #ddd",
                fontSize: "16px",
              }}
            >
              <td style={{ padding: "0.75rem" }}>Individual account</td>
              <td style={{ padding: "0.75rem" }}>Free</td>
            </tr>
            <tr
              style={{
                border: "1px solid #ddd",
                fontSize: "16px",
                backgroundColor: "#f8f8f8",
              }}
            >
              <td style={{ padding: "0.75rem" }}>Minor account</td>
              <td style={{ padding: "0.75rem" }}>Free</td>
            </tr>
            <tr
              style={{
                border: "1px solid #ddd",
                fontSize: "16px",
              }}
            >
              <td style={{ padding: "0.75rem" }}>NRI account</td>
              <td style={{ padding: "0.75rem" }}>₹ 500</td>
            </tr>
            <tr
              style={{
                border: "1px solid #ddd",
                fontSize: "16px",
                backgroundColor: "#f8f8f8",
              }}
            >
              <td style={{ padding: "0.75rem" }}>HUF account</td>
              <td style={{ padding: "0.75rem" }}>
                Free(online) / ₹ 500(offline)
              </td>
            </tr>
            <tr
              style={{
                border: "1px solid #ddd",
                fontSize: "16px",
              }}
            >
              <td style={{ padding: "0.75rem" }}>
                Partnership, LLP, and Corporate accounts (offline only)
              </td>
              <td style={{ padding: "0.75rem" }}>₹ 500</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Brokerage;
