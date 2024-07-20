import express, { request, response } from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import Book from "./models/bookModel.js";
import booksRoute from './routes/booksRoute.js';
import cors from 'cors';

const app = express();
app.use(express.json());

app.use(cors());

// app.use(cors({
//     origin: 'http://localhost:3000',
//     methods: ['GET', 'POST', 'PUT', 'DELETE'],
//     allowedHeaders: ['Content-Type'],
// }))

mongoose
    .connect(mongoDBURL)
    .then(() => {
        console.log("App connected to database");
        app.listen(PORT, () => {
            console.log("App is running on ", PORT);
        });
    })
    .catch((error) => {
        console.log(error);
    });

app.get("/", (request, response) => {
    console.log(request);
    return response.status(200).send("Welcome boss");
});

app.use('/books', booksRoute);
