import express from "express";
import { connectMongoose } from "./utils/connectMongoose.js";

const app = express();
const port = 8080;

// connect to database
const mongooseConnected = await connectMongoose();

app.get("/", (req, res) => {
  res.send("<h1>Status 200</h1>This server is active");
});

app.listen(port, () => {
  console.log(
    `Listening on port http://localhost:${port}\n`,
    "Connected to MongoDB: " + mongooseConnected
  );
});
