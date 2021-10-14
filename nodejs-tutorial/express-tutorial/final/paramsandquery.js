const express = require("express");
const app = express();
//get data
const { products } = require("./data");

app.get("/api", (req, res) => {
  console.log(req.query);
  const { search } = req.query;
  const searchProduct = products.filter((product) =>
    product.name.startsWith(search)
  );
  res.json(searchProduct);
});

app.listen(5000, () => {
  console.log("Port running in Port 5000");
});
