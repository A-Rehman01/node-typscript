const express = require("express");

const app = express();

app.get("/", (req, res) => {
  console.log("user hit");
  res.send("HomePage");
});

app.get("/about", (req, res) => {
  res.send("AboutPage");
  //status code khud manage krta he agr apna alag alag dalna he toyha or ek jese to all me dalo
});

app.all("*", (req, res) => {
  res.status(404).send("<h1>Resource not available<h1/>");
});

app.listen(5000, () => {
  console.log("Port running in Port 5000");
});

//app.get
//app.post
//app.put
//app.delete
//app.all
//app.use
//app/listen
