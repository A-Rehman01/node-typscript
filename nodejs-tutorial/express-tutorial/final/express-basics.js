const express = require("express");
const path = require("path");
const app = express();
//app.use
// jese phle node se ek CSS,logo,image,html alag alag krna pra to hum  us ko use me define krde or khe ye sub use krna he or jo jo stuff he us ko ek folder me dal ke is ko dede jese
//ab agr 255 images hoto  node me hogai phr subh
//setup static and middleware

app.use(express.static("./public"));

app.get("/", (req, res) => {
  res.sendFile(
    path.resolve(__dirname, "./express-tutorial/navbar-app/index.html")
  );
});

app.listen(5000, () => {
  console.log("Port running in Port 5000");
});
