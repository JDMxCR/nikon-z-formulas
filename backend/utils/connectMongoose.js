import mongoose from "mongoose";
import "dotenv/config";

async function connectMongoose() {
  try {
    await mongoose.connect(process.env.MONGO_DB || "mongodb://localhost/test");

    const collections = (
      await mongoose.connection.db.listCollections().toArray()
    ).map((el) => el.name);
    console.log(
      "connected to db: ",
      mongoose.connection.db.databaseName,
      collections
    );
    return true;
  } catch (error) {
    console.error("could not connect to mongoose", error);
    return false;
  }
}

export { connectMongoose };
