import express from "express";
import dotenv from 'dotenv';
dotenv.config();

const app = express();
const port = process.env.PORT || 6123;
app.get('/', async (req, res) => {
    res.send('Express + TypeScript Server');
});

app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});