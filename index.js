const express = require("express");
const app = express();
const cors = require("cors");

const productsRoute = require("./routes/products");
app.use(cors());
//app.use(express.json());
app.use("/products", productsRoute);
app.listen(3000);
