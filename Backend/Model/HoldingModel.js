const { model } = require("mongoose");

const { HoldingSchema } = require("../schema/HoldingSchema.js");

const HoldingModel = new model("holding", HoldingSchema);

module.exports = { HoldingModel };
