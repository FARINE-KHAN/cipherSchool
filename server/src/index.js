import cors from "cors"
import express from "express"
const app =express()
import mongoose from "mongoose"
import Route from "./routes.js"
import dotenv from "dotenv"
// import multer from "multer"
dotenv.config()
app.use(express.json())
app.use("/uploads",express.static("./uploads"));
mongoose.connect(process.env.DB)
.then(() => console.log("MongoDb is connected"))
.catch((err) => console.log(err));
app.use(cors())
app.use("/",Route)
app.listen(process.env.PORT,()=>{
    console.log("server running")
})