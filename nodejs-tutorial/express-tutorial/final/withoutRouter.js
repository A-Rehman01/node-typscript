const e = require("express");
const express = require("express");
const app = express();
//get data
const { people, products } = require("./data");

app.use(express.static("./methods-public"));
//bodyparser
app.use(express.urlencoded({ extended: false }));
//  json parser
app.use(express.json());

app.get("/api/postman/people", (req, res) =>
  res.status(200).json({ success: true, data: people })
);

app.post("/api/postman/people", (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res.status(400).send("Invalid");
  }
  return res.status(201).json({
    success: true,
    data: [...people, { id: people.length + 1, name }],
  });
});
app.put("/api/postman/people/:userid", (req, res) => {
  const { name } = req.body;
  const { userid } = req.params;

  const person = people.find((_p) => _p.id === Number(userid));
  if (!person) {
    return res
      .status(400)
      .json({ success: false, msg: `No User Found for this ${userid}` });
  }
  const updatedList = people.map((_c) => {
    const { id } = _c;
    if (Number(userid) === id) {
      return {
        id,
        name,
      };
    } else {
      return _c;
    }
  });

  return res.status(200).json({
    success: true,
    data: updatedList,
  });
});

app.delete("/api/postman/people/:userid", (req, res) => {
  const { userid } = req.params;

  const person = people.find((_p) => _p.id === Number(userid));
  if (!person) {
    return res
      .status(400)
      .json({ success: false, msg: `No User Found for this ${userid}` });
  }
  const updatedList = people.filter((_c) => Number(userid) !== _c.id);

  return res.status(200).json({
    success: true,
    data: updatedList,
  });
});

app.listen(5000, () => {
  console.log("Port running in Port 5000");
});
