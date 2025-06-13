const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cartRoutes = require("./routes/cart");
require("dotenv").config();

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI || "mongodb://127.0.0.1:27017/cartDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use("/cart", cartRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
