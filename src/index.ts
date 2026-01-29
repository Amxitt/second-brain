import "dotenv/config";
import express from "express"
import mongoose from "mongoose";
import userRouter from "./routes/user.js";
import contentRouter from "./content/content.js";
import brainRouter from "./content/brain.js";
import { configDotenv } from "dotenv";

configDotenv

const app = express();
app.use("api/v1/user", userRouter);
app.use("api/v1/content", contentRouter);
app.use("api/v1/brain/", brainRouter);


const main = async () =>{
     await mongoose.connect(process.env.Mongo_Url);
app.listen(3000);
}
main();
