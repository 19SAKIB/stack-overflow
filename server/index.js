import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from 'dotenv';

import userRoutes from "./routes/users.js";
import questionRoutes from "./routes/Questions.js";
import answerRoutes from "./routes/Answers.js";
// import connectDB from "./connectMongoDb.js";


const app = express();
dotenv.config();

app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

// app.use('/',(req, res) => {
//     res.send("This is a stack overflow clone API")
// })

app.get('/', (req, res) => {
    res.send("This is stack overflow clone API");

});

app.use("/user", userRoutes);
app.use("/questions", questionRoutes);
app.use("/answer", answerRoutes);

const PORT = process.env.PORT || 5000;


// const CONNECTION_URL = "mongodb+srv://admin:admin@stack-overflow-clone123.aig86uw.mongodb.net/?retryWrites=true&w=majority";

// const CONNECTION_URL = "mongodb+srv://fatima:fatima@stack-overflow-clone-1.eevwfju.mongodb.net/?retryWrites=true&w=majority";

const DATABASE_URL = process.env.CONNECTION_URL

mongoose.connect(DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => { console.log(`server is running on port ${PORT}`) }))
    .catch((err) => console.log(err.message))