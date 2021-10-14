const e = require("express");
const express = require("express");
const app = express();
//Routes
const peopleroutes = require("./router/people");
//static data
app.use(express.static("./methods-public"));
//bodyparser
app.use(express.urlencoded({ extended: false }));
//  json parser
app.use(express.json());

app.use("/api/people", peopleroutes);

app.listen(5000, () => {
  console.log("Port running in Port 5000");
});
