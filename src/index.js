import dotenv from "dotenv";
import connectDB from "./db/index.js"; 
dotenv.config(
   { path:'./.env'} // Ensure this path is correct relative to your project structure
);

 
connectDB()
.then(()=>{
app.listen(process.env.PORT || 8000, ()=>{
    console.log(`Server is running on port ${process.env.PORT || 8000}`);
    console.log(`MongoDB connected successfully !! ${process.env.PORT}`); 
})
})
.catch((error)=>{
    console.log("mongo db connection failed", error)
    process.exit(1); // Exit the process with failure
})
 





















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