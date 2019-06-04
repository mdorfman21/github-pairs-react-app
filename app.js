const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

require("dotenv").config();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static("public"));

// Connect to the Mongo DB
let MONGOD_URI = process.env.MONGOD_URI || "mongodb://localhost/pairs";
mongoose.connect(MONGOD_URI, {
  useNewUrlParser: true
});

require("./controllers/api_controllers")(app);

app.listen(PORT, () => {
  console.log(`app is listening on http//localhost:${PORT}`);
});
