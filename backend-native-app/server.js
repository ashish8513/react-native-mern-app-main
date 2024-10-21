import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
const app = express();
dotenv.config();

const PORT = process.env.PORT || 4002;
const DB_URI = process.env.MONGODB_URI;

// middlewares
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    //Cross ORIGIN Policy to prevent Cross-Site Request Forgery (CSRF) attacks on your website and your application domain.
  })
);

// Database connection code
try {
  await mongoose.connect(DB_URI);
  console.log("Connected to MongoDB");
} catch (error) {
  console.log(error);
}



app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
