import express from "express";
import * as mongoose from "mongoose";
import "dotenv/config";

const app = express();
const port = 8080;

// connect to database
await mongoose.connect(
  process.env.MONGO_DB || "mongodb://127.0.0.1:27017/test"
);

app.get("/", (req, res) => {
  res.send("Hello World!, server works");
});

app.listen(port, () => {
  console.log(`Listening on port http://localhost:${port}...`);
});
