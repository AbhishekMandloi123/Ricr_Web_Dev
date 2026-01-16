import dotenv from "dotenv";
dotenv.config();

import express, { response } from "express";
import connectDB from "./src/config/db.js";
import Authrouter from "./src/routers/myrouter.js";

const app = express();

app.use(express.json());
app.use("/auth", Authrouter);




app.get("/", (req, res) => {
  console.log("Server is Running");

  res.json({ message: "Server is running Successfully" })
});

app.use((err, req, res, next) => {
  const ErrorMessage = err.message || "Internal Server Error";
  const StatusCode = err.statusCode || 500;
  return res.status(StatusCode).json({ message: ErrorMessage });
})

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log("Server started at port", port);
  connectDB();
});


