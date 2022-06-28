//Modules
import express from 'express';
import dotenv from 'dotenv';

//Config
const app = express();

dotenv.config();

const port = process.env.PORT || 5000;

// Routes on exress

//Starting to listen on a port
app.listen(port, () => {
    console.log(`Social listening on ${port}`)
})