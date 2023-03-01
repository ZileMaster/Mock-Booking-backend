import express from "express"; 
const app = express();
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoute from './routes/auth.js'

dotenv.config()

const connect = async() => {
    try {
        await mongoose.connect(process.env.MONGO);
        console.log("Connected to mongo");
    }catch(error){
        throw error;
    }
};

mongoose.connection.on("disconnected", () => {
    console.log("MongoDB disconnected");
});

mongoose.connection.on("connected", () => {
    console.log("mongoDB connected");
});

app.get("/", (req, res) => {
    res.send("hello first request!");
})

//middlewares
app.use("/auth", authRoute);

app.listen(8800, () => {
    connect()
    console.log("Connected to backend!");
});