const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const Router = require("./routes");
const cors = require("cors");
const app = express();
require("dotenv").config();

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.json());
app.use(cors());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,PATCH,DELETE");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "Content-Type",
    "Authorization"
  );
  next();
});

const username = process.env.USER;
const password = process.env.PASSWORD;
const cluster = process.env.CLUSTER;
const dbname = process.env.DBNAME;

mongoose.connect(
  `mongodb+srv://${username}:${password}@${cluster}.mongodb.net/${dbname}?retryWrites=true&w=majority`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

//check connection
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/test.html");
});

app.use(Router);

app.listen(process.env.PORT || 5000, () => {
  console.log("Server is runnin");
});
