const { model } = require("mongoose");

const { PositionSchema } = require("../schema/PositionSchema.js");

const PositionModel = new model("position", PositionSchema);

module.exports = { PositionModel };
