import mongoose from "mongoose";
import dotenv from "dotenv";


dotenv.config();


const uri = process.env.URI

function _connectToDB(){
    mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('MongoDB Atlas Connected Successfully'))
    .catch(err => console.error('Connection error:', err));
}

export { _connectToDB };