import mongoose  from "mongoose"; 
import { DB_name } from "../constant.js";   

const connectDB = async () => {
  try {
   const connectionInstance= await mongoose.connect(`${process.env.MONGO_URI}/${DB_name}`);
    console.log(`MongoDB connected successfully ${connectionInstance.connection.host}`);
  } catch (error) {
    console.log("Error connecting to MongoDB:", error);
   process.exit(1); // Exit the process with failure
  }
}
export default connectDB;