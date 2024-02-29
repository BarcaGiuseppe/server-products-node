const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.port || 3000;
const productsRoute = require("./routes/products");
app.use(cors());
//app.use(express.json());
app.use("/products", productsRoute);
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
