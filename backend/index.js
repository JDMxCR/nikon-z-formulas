import express from "express";
import { connectMongoose } from "./utils/connectMongoose.js";

const app = express();
const port = 8080;

// connect to database
const mongooseConnected = await connectMongoose();

app.get("/", (req, res) => {
  res.send("Hello World!, server works");
});

app.listen(port, () => {
  console.log(
    `Listening on port http://localhost:${port}\n`,
    "Connected to MongoDB: " + mongooseConnected
  );
});
