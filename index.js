import express from 'express';
import router from './routes/url.js';
import { _connectToDB } from './connection.js';
import dotenv from "dotenv";

dotenv.config();
const app = express();


_connectToDB();

app.use(express.json());
app.use("/url", router);

const port = process.env.PORT;

app.listen(port, ()=>{
    console.log("Server is up and running");
})
