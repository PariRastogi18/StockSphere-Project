import { useEffect, useState } from "react";
import axios from "axios";
import { io } from "socket.io-client";

const socket = io("http://localhost:5000");

export const useHoldings = () => {
  const [allHoldings, setAllHoldings] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/allHoldings")
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
