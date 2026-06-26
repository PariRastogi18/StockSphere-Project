import React, { useEffect } from "react";
import axios from "axios";
import { Route, Routes } from "react-router-dom";

import Apps from "./Apps";
import Funds from "./Funds";
import Holdings from "./Holdings";

import Orders from "./Orders";
import Positions from "./Positions";
import Summary from "./Summary";
import WatchList from "./WatchList";
import { GeneralContextProvider } from "./GeneralContext";

const Dashboard = () => {
  useEffect(() => {
    const verifyUser = async () => {
      try {
        const { data } = await axios.post(
          "https://stocksphere-project.onrender.com/verify",
          {},
          { withCredentials: true },
        );

        if (!data.status) {
          window.location.replace(
            "https://stock-sphere-project.vercel.app/login",
          );
        }
      } catch (err) {
        window.location.replace(
          "https://stock-sphere-project.vercel.app/login",
        );
      }
    };

    verifyUser();
  }, []);

  return (
    <div className="dashboard-container">
      <GeneralContextProvider>
        <WatchList />
      </GeneralContextProvider>
      <div className="content">
        <Routes>
          <Route exact path="/" element={<Summary />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/holdings" element={<Holdings />} />
          <Route path="/positions" element={<Positions />} />
          <Route path="/funds" element={<Funds />} />
          <Route path="/apps" element={<Apps />} />
        </Routes>
      </div>
    </div>
  );
};

export default Dashboard;
