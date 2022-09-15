const express = require("express");
const models = require("./models");
const app = express();
const customerModel = models.Customer;
const transferModel = models.Transfer;
const moment = require("moment");

app.post("/delete", function (req, res) {
  const { id } = req.body;
  customerModel.findByIdAndRemove(id, function (err) {
    if (err) {
      console.log(err);
    } else {
      res.redirect("/browse/verify");
    }
  });
});

app.post("/add", async (req, res) => {
  const customer = new customerModel(req.body);

  try {
    await customer.save();
    res.send(customer);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.get("/find/:id", async (req, res) => {
  if (!req.params.id) return res.status(400);
  const customer = await customerModel.findById(req.params.id);

  try {
    res.send(customer);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.post("/transfer", async (req, res) => {
  const { senderId, receiverId, amountValue } = req.body;

  var amount = Number(amountValue);

  const sender = await customerModel.findById(senderId);

  const receiver = await customerModel.findById(receiverId);

  const newSenderBalance = sender?.balance - amount;

  const newReceiverBalance = receiver?.balance + amount;

  // code for transfer
  const by = sender?.name;
  const to = receiver?.name;
  const date = moment().format("MMMM Do YYYY");
  const time = moment().format("h:mm:ss A");
  const transferObject = {
    by: by,
    to: to,
    amount: amount,
    date: date,
    time: time,
  };
  const transfer = new transferModel(transferObject);

  try {
    await transfer.save();

    customerModel.findByIdAndUpdate(
      senderId,
      {
        balance: newSenderBalance,
      },
      () => {
        console.log("sender stuff done");
      }
    );

    customerModel.findByIdAndUpdate(
      receiverId,
      {
        balance: newReceiverBalance,
      },
      () => {
        res.sendStatus(200);
      }
    );
  } catch (error) {
    res.status(500).send(error + " fuck");
  }
});

app.get("/transfers", async (req, res) => {
  const transfers = await transferModel.find({});

  try {
    res.send(transfers);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.get("/api/:senderId", async (req, res) => {
  var senderId = req.params.senderId;

  const others = await customerModel.find({ _id: { $nin: [senderId] } });

  try {
    res.send(others);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.get("/api", async (req, res) => {
  const customers = await customerModel.find({});

  try {
    res.send(customers);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = app;
