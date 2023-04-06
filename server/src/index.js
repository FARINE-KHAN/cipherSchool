import cors from "cors"
import express from "express"
const app =express()
import mongoose from "mongoose"
import Route from "./routes.js"
import dotenv from "dotenv"
dotenv.config()
app.use(express.json())
mongoose.connect(process.env.DB)
.then(() => console.log("MongoDb is connected"))
.catch((err) => console.log(err));
app.use(cors())
app.use("/",Route)
app.listen(process.env.PORT,()=>{
    console.log("server running")
})