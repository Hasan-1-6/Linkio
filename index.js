import dotenv from 'dotenv'
import connectDB from './db/mongodb.js';
import express from 'express';

import { handleGet, handlePost } from './controllers/controllers.js';
import cors from 'cors'

import path from "path";
import { fileURLToPath } from "url";
// recreate __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config();
export const app = express();
app.use(express.json())
app.use(cors());
const port = process.env.PORT || 4000

connectDB()
.then(
    app.listen(port, () => {
    console.log(`Listening at port ${port}`)
    // running at 3000 if env works correctly
    }
))

//set path for serving static sites here
app.use(express.static(path.join(__dirname, "public")));

// Serve index.html at "/" 
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});


app.post('/sendFullUrl', handlePost)
//pass the function not call it
app.get('/:shortUrl', handleGet) 




