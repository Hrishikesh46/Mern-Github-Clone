import mongoose from "mongoose";

export default async function connectToMongoDB() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MONGODB connected successfully");
  } catch (error) {
    console.log("Error connecting to mongoDB", error.message);
  }
}
