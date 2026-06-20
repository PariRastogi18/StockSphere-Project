import React from "react";

function Footer() {
  return (
    <>
      <div className=" mt-5 border-top" style={{ backgroundColor: "#fbfbfb" }}>
        <div className="container  p-3">
          <div className="row mb-5">
            <div className="col">
              <img
                src="media/images/logo.svg"
                style={{ width: "50%", marginBottom: "30px" }}
                alt="logo"
              />
              <p>© 2010 - 2026, Zerodha Broking Ltd. All rights reserved.</p>
              <ul
                style={{
                  listStyle: "none",
                  display: "flex",
                }}
              >
                <li>
                  <a
                    href="#"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    <i
                      class="fa-brands fa-x-twitter"
                      style={{ fontSize: "1.25rem" }}
                    ></i>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    <i
                      class="fa-brands fa-square-facebook"
                      style={{ fontSize: "1.25rem" }}
                    ></i>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    <i
                      class="fa-brands fa-instagram"
                      style={{ fontSize: "1.25rem" }}
                    ></i>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    <i
                      class="fa-brands fa-linkedin"
                      style={{ fontSize: "1.25rem" }}
                    ></i>
                  </a>
                </li>
              </ul>
              <ul
                style={{
                  listStyle: "none",
                  display: "flex",
                  marginTop: "2.5rem",
                }}
              >
                <li>
                  <a
                    href="#"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    <i
                      class="fa-brands fa-youtube"
                      style={{ fontSize: "1.25rem" }}
                    ></i>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    <i
                      class="fa-brands fa-whatsapp"
                      style={{ fontSize: "1.25rem" }}
                    ></i>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    <i
                      class="fa-brands fa-telegram"
                      style={{ fontSize: "1.25rem" }}
                    ></i>
                  </a>
                </li>
              </ul>
              <div className="row mt-5">
                <div className="col" style={{ width: "50%" }}>
                  <img src="media/images/googlePlayBadge.svg" />
                </div>
                <div className="col" style={{ width: "50%" }}>
                  <img src="media/images/appstoreBadge.svg" />
                </div>
              </div>
            </div>
            <div className="col">
              <ul style={{ listStyle: "none" }}>
                <li
                  style={{
                    fontSize: "1.25rem",
                    fontWeight: "500",
                    marginBottom: "15px",
                    textAlign: "start",
                  }}
                >
                  Account
                </li>
                <li style={{ lineHeight: "2", marginBottom: "10px" }}>
                  <a
                    href="#"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    Open demat account
                  </a>
                </li>
                <li style={{ lineHeight: "2", marginBottom: "10px" }}>
                  <a
                    href="#"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    Minor demat account
                  </a>
                </li>
                <li style={{ lineHeight: "2", marginBottom: "10px" }}>
                  <a
                    href="#"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    NRI demat account
                  </a>
                </li>
                <li style={{ lineHeight: "2", marginBottom: "10px" }}>
                  <a
                    href="#"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    HUF demat account
                  </a>
                </li>
                <li style={{ lineHeight: "2", marginBottom: "10px" }}>
                  <a
                    href="#"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    Commodity
                  </a>
                </li>
                <li style={{ lineHeight: "2", marginBottom: "10px" }}>
                  <a
                    href="#"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    Dematerialisation
                  </a>
                </li>
                <li style={{ lineHeight: "2", marginBottom: "10px" }}>
                  <a
                    href="#"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    Fund transfer
                  </a>
                </li>
                <li style={{ lineHeight: "2", marginBottom: "10px" }}>
                  <a
                    href="#"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    MTF
                  </a>
                </li>
              </ul>
            </div>
            <div className="col">
              <ul style={{ listStyle: "none" }}>
                <li
                  style={{
                    fontSize: "1.25rem",
                    fontWeight: "500",
                    marginBottom: "15px",
                    textAlign: "start",
                  }}
                >
                  Support
                </li>
                <li style={{ lineHeight: "2", marginBottom: "10px" }}>
                  <a
                    href="#"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    Contact us
                  </a>
                </li>
                <li style={{ lineHeight: "2", marginBottom: "10px" }}>
                  <a
                    href="#"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    Support portal
                  </a>
                </li>
                <li style={{ lineHeight: "2", marginBottom: "10px" }}>
                  <a
                    href="#"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    How to file a complaint?
                  </a>
                </li>
                <li style={{ lineHeight: "2", marginBottom: "10px" }}>
                  <a
                    href="#"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    Status of your complaints
                  </a>
                </li>
                <li style={{ lineHeight: "2", marginBottom: "10px" }}>
                  <a
                    href="#"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    Bulletin
                  </a>
                </li>
                <li style={{ lineHeight: "2", marginBottom: "10px" }}>
                  <a
                    href="#"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    Circular
                  </a>
                </li>
                <li style={{ lineHeight: "2", marginBottom: "10px" }}>
                  <a
                    href="#"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    Z-Connect blog
                  </a>
                </li>
                <li style={{ lineHeight: "2", marginBottom: "10px" }}>
                  <a
                    href="#"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    Downloads
                  </a>
                </li>
              </ul>
            </div>
            <div className="col">
              <ul style={{ listStyle: "none" }}>
                <li
                  style={{
                    fontSize: "1.25rem",
                    fontWeight: "500",
                    marginBottom: "15px",
                    textAlign: "start",
                  }}
                >
                  Company
                </li>
                <li style={{ lineHeight: "2", marginBottom: "10px" }}>
                  <a
                    href="#"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    About
                  </a>
                </li>
                <li style={{ lineHeight: "2", marginBottom: "10px" }}>
                  <a
                    href="#"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    Philosophy
                  </a>
                </li>
                <li style={{ lineHeight: "2", marginBottom: "10px" }}>
                  <a
                    href="#"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    Press & media
                  </a>
                </li>
                <li style={{ lineHeight: "2", marginBottom: "10px" }}>
                  <a
                    href="#"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    Careers
                  </a>
                </li>
                <li style={{ lineHeight: "2", marginBottom: "10px" }}>
                  <a
                    href="#"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    Zerodha Cares(CSR)
                  </a>
                </li>
                <li style={{ lineHeight: "2", marginBottom: "10px" }}>
                  <a
                    href="#"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    Zerodha.tech
                  </a>
                </li>
                <li style={{ lineHeight: "2", marginBottom: "10px" }}>
                  <a
                    href="#"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    Open source
                  </a>
                </li>
                <li style={{ lineHeight: "2", marginBottom: "10px" }}>
                  <a
                    href="#"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    Referral program
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div style={{ color: "gray" }}>
            <p
              style={{
                fontSize: "0.65rem",
                marginBottom: "10px",
                marginTop: "0",
              }}
            >
              Zerodha Broking Ltd.: Member of NSE, BSE, MCX & MSEI – SEBI
              Registration no.: INZ000031633 CDSL/NSDL: Depository services
              through Zerodha Broking Ltd. – SEBI Registration no.:
              IN-DP-431-2019 Registered Address: Zerodha Broking Ltd., #153/154,
              4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar
              4th Phase, Bengaluru - 560078, Karnataka, India. For any
              complaints pertaining to securities broking please write to
              complaints@zerodha.com, for DP related to dp@zerodha.com. Please
              ensure you carefully read the Risk Disclosure Document as
              prescribed by SEBI | ICF
            </p>
            <p
              style={{
                fontSize: "0.65rem",
                marginBottom: "10px",
                marginTop: "0",
              }}
            >
              Procedure to file a complaint on SEBI SCORES: Register on SCORES
              portal. Mandatory details for filing complaints on SCORES: Name,
              PAN, Address, Mobile Number, E-mail ID. Benefits: Effective
              Communication, Speedy redressal of the grievances
            </p>
            <p
              style={{
                fontSize: "0.65rem",
                marginBottom: "10px",
                marginTop: "0",
              }}
            >
              Smart Online Dispute Resolution | Grievances Redressal Mechanism
            </p>
            <p
              style={{
                fontSize: "0.65rem",
                marginBottom: "10px",
                marginTop: "0",
              }}
            >
              Investments in securities market are subject to market risks; read
              all the related documents carefully before investing.
            </p>
            <p
              style={{
                fontSize: "0.65rem",
                marginBottom: "10px",
                marginTop: "0",
              }}
            >
              {" "}
              Attention investors: 1) Stock brokers can accept securities as
              margins from clients only by way of pledge in the depository
              system w.e.f September 01, 2020. 2) Update your e-mail and phone
              number with your stock broker / depository participant and receive
              OTP directly from depository on your e-mail and/or mobile number
              to create pledge. 3) Check your securities / MF / bonds in the
              consolidated account statement issued by NSDL/CDSL every month.
            </p>
            <p
              style={{
                fontSize: "0.65rem",
                marginBottom: "10px",
                marginTop: "0",
              }}
            >
              India's largest broker based on networth as per NSE. NSE broker
              factsheet
            </p>
            <p
              style={{
                fontSize: "0.65rem",
                marginBottom: "10px",
                marginTop: "0",
              }}
            >
              "Prevent unauthorised transactions in your account. Update your
              mobile numbers/email IDs with your stock brokers/depository
              participants. Receive information of your transactions directly
              from Exchange/Depositories on your mobile/email at the end of the
              day. Issued in the interest of investors. KYC is one time exercise
              while dealing in securities markets - once KYC is done through a
              SEBI registered intermediary (broker, DP, Mutual Fund etc.), you
              need not undergo the same process again when you approach another
              intermediary." Dear Investor, if you are subscribing to an IPO,
              there is no need to issue a cheque. Please write the Bank account
              number and sign the IPO application form to authorize your bank to
              make payment in case of allotment. In case of non allotment the
              funds will remain in your bank account. As a business we don't
              give stock tips, and have not authorized anyone to trade on behalf
              of others. If you find anyone claiming to be part of Zerodha and
              offering such services, please create a ticket here.
            </p>
            <p
              style={{
                fontSize: "0.65rem",
                marginBottom: "10px",
                marginTop: "0",
              }}
            >
              *Customers availing insurance advisory services offered by Ditto
              (Tacterial Consulting Private Limited | IRDAI Registered Corporate
              Agent (Composite) License No CA0738) will not have access to the
              exchange investor grievance redressal forum, SEBI SCORES/ODR, or
              arbitration mechanism for such products.
            </p>
            <p
              style={{
                fontSize: "0.65rem",
                marginBottom: "10px",
                marginTop: "0",
              }}
            >
              Fixed deposit products offered on this platform are third-party
              products (TPP) and are not Exchange traded products. These are
              offered through Blostem Fintech Private Limited. Zerodha Broking
              Limited (SEBI Registration No.: INZ000031633) is acting solely as
              a distributor for these products. Any disputes arising with
              respect to such distribution activity will not have access to SEBI
              SCORES/ODR, Exchange Investor Grievance Redressal Forum, or
              Arbitration mechanism. Fixed deposits are regulated by the Reserve
              Bank of India (RBI).
            </p>
            <p style={{ textAlign: "center", marginTop: "1.5rem" }}>
              NSE &nbsp;&nbsp; BSE &nbsp;&nbsp; MCX &nbsp;&nbsp; MSEI
              &nbsp;&nbsp; Terms & conditions&nbsp; &nbsp; Policies & procedures
              &nbsp;&nbsp; Privacy policy &nbsp; &nbsp; Disclosure For
              investor's attention &nbsp;&nbsp; Investor &nbsp;&nbsp; charter
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
