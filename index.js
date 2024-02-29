const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.port || 3000;
const productsRoute = require("./routes/products");
app.use(cors());

//app.use(express.json());
app.use("/products", productsRoute);
app.get("/", async (req, res) => {
  const response = await fetch("https://mockend.up.railway.app/api/products");
  const products = await response.json();
  res.json(products);
});
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
