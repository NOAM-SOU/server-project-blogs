const express = require("express");
require("dotenv").config();
const bodyParser = require("body-parser");
const port = process.env.PORT;
const { postRouter } = require("./routes/index");
const connectDB = require("./Models/db");
app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/posts", postRouter);

app.listen(port, async () => {
  console.log(`I AM listening to port ${port}`);
  try {
    await connectDB();
    console.log(" I AM connected");
  } catch (err) {
    console.log("I AM NOT CONNECTED");
  }
});
