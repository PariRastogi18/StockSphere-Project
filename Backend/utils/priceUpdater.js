const marketData = require("./marketData");

function startPriceUpdates(io) {
  setInterval(() => {
    Object.keys(marketData).forEach((stock) => {
      const change = Math.random() * 10 - 5;
      marketData[stock] = Math.max(
        1,
        Number((marketData[stock] + change).toFixed(2)),
      );
    });

    io.emit("PriceUpdate", marketData);
  }, 3000);
}

module.exports = startPriceUpdates;
