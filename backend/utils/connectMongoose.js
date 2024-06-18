import mongoose from "mongoose";
import "dotenv/config";

async function connectMongoose() {
  try {
    await mongoose.connect(
      process.env.MONGO_DB || "mongodb://127.0.0.1:27017/test"
    );

    const collections = (
      await mongoose.connection.db.listCollections().toArray()
    ).map((el) => el.name);
    console.log(
      "connected to db: ",
      mongoose.connection.db.dbName,
      collections
    );
    return true;
  } catch (error) {
    console.error("could not connect to mongoose", error);
    return false;
  }
}

export { connectMongoose };
