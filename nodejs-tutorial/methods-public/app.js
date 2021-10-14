const express = require("express");
const app = express();
//get data
const { people } = require("./data");

app.use(express.static("./methods-public"));
//bodyparser
app.use(express.urlencoded({ extended: false }));
//  json parser
app.use(express.json());

app.get("/api/people", (req, res) =>
  res.status(200).json({ success: true, data: people })
);

app.post("/api/people", (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res.status(400).send("Invalid");
  }
  return res.status(201).json({ success: true, person: name });
});

app.post("/login", (req, res) => {
  const { name } = req.body;
  if (name) {
    return res.status(200).send("Welcome");
  }
  return res.status(400).send("Name Required");
});

app.listen(5000, () => {
  console.log("Port running in Port 5000");
});
