const { model } = require("mongoose");

const { OrderSchema } = require("../schema/OrderSchema.js");

const OrderModel = new model("order", OrderSchema);

module.exports = { OrderModel };
