import { useEffect, useState } from "react";
import axios from "axios";
import { io } from "socket.io-client";

const socket = io("https://stocksphere-project.onrender.com");

export const useHoldings = () => {
  const [allHoldings, setAllHoldings] = useState([]);

  useEffect(() => {
    axios
      .get("https://stocksphere-project.onrender.com/allHoldings")
      .then((res) => setAllHoldings(res.data))
      .catch((err) => console.log(err));

    socket.on("priceUpdate", (updatedHoldings) => {
      setAllHoldings(updatedHoldings);
    });

    return () => {
      socket.off("priceUpdate");
    };
  }, []);

  return allHoldings;
};
