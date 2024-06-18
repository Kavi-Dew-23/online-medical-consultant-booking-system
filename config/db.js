const mongoose = require("mongoose");
const colors = require("colors");
const dotenv = require("dotenv");

// Load environment variables from .env file
dotenv.config();

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://Kavindya:dataBase123@doctorappoint.xhzssdm.mongodb.net/DoctorAppoint"
    );
    console.log("Mongodb connected ${mongoose.connection.host}".bgGreen.white);
  } catch (error) {
    console.log("Mongodb Server Issue ${error}".bgRed.white);
  }
};

module.exports = connectDB;
