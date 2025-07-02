import dotenv from "dotenv";
import connectDB from "./db/index.js"; 
dotenv.config(
   { path:'./.env'} // Ensure this path is correct relative to your project structure
);
// import mongoose  from "mongoose";
// import {DB_name} from "./constant.js";
 
connectDB();
 





















// import express from "express";
// const app = express();

// ( async()=>{
//     try {
//        await mongoose.coonect(`&{process.env.MONGO_URI}/${DB_name}`)
//        app.on("error", (error) => {
//             console.log("Error connecting to MongoDB:", error);
//             throw error;    
//         });
//         app.listen(process.env.PORT, () => {
//             console.log(`Server is running on port ${process.env.PORT}`);
//         });
//         app.listen(process.env.PORT, () => {
//             console.log(`Server is running on port ${process.env.PORT}`);
//         });
//     } catch (error) {
//         console.log(error);
        
//     }
// })()