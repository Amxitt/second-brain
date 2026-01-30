import "dotenv/config";

import express from "express";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";

import userRouter from "./routes/user.js";
import contentRouter from "./routes/content.js";

import { MONGO_URL } from "./config.js";
import brainRouter from "./routes/brain.js";

const app = express();
app.use(express.json())

app.use(express.json());
app.use(cookieParser());

app.use("/api/v1/user", userRouter);
app.use("/api/v1/content", contentRouter);
app.use("/api/v1/brain", brainRouter);


const main = async () => {
  await mongoose.connect(MONGO_URL);
  app.listen(3000);
};

main();
