import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import router from './routes/url.js';
import { _connectToDB } from './connection.js';
import dotenv from "dotenv";

dotenv.config();
const app = express();

// Convert __dirname in ES module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

_connectToDB();

// Serve static files (frontend)
app.use(express.static(path.join(__dirname, 'public')));

app.use(express.json());
app.use("/url", router);

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is up and running on port ${port}`);
});
