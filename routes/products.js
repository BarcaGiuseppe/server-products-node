const express = require("express");

const app = express();
const router = express.Router();

router.get("/", async (req, res) => {
  const response = await fetch("https://mockend.up.railway.app/api/products");
  const products = await response.json();
  res.send(products);
});

router.get("/:id", async (req, res) => {
  const id = req.params.id;
  const response = await fetch(
    `https://mockend.up.railway.app/api/products/${id}`
  );
  const product = await response.json();
  res.send(product);
});

module.exports = router;
