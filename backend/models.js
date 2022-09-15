const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema({
  name: String,
  email: String,
  gender: String,
  dob: Date,
  balance: Number,
  mobile: Number,
});

const transferSchema = new mongoose.Schema({
  by: String,
  to: String,
  amount: Number,
  date: String,
  time: String,
});

const Transfer = mongoose.model("Transfer", transferSchema);
const Customer = mongoose.model("Customer", customerSchema);
module.exports = { Customer, Transfer };
