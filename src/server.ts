// src/server.ts
import express, { Application } from 'express';

const cors = require('cors');

const app: Application = express();

app.use(cors({
    origin: 'http://localhost:3000' // Specify the frontend's origin
}));

app.use(express.json()); // Middleware to parse JSON

export default app;
