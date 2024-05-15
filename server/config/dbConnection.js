const mongoose = require("mongoose");

const dbConn = async () => {
  try {
    await mongoose.connect(process.env.DB_CONN);
    console.log("Database successfully connected");
  } catch (error) {
    console.log("Database connection error");
  }
};

module.exports = dbConn;
