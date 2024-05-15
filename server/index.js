const express = require("express");
const cors = require("cors");
const dbConn = require("./config/dbConnection");
const dotenv = require("dotenv").config();

const app = express();

app.use(express());
app.use(express.json());

const port = process.env.PORT || 5000;

app.listen(port, async () => {
  console.log(`Server running on port ${port}`);
  await dbConn();
});