import express from "express";
import bodyParser from "body-parser";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import cors from "cors";
import dayjs from "dayjs";
import dotenv from "dotenv";

const app = express();
app.use(cors);
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(express.json());

dotenv.config();

const PORT = 9000;

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
})