import express from "express";
import Book from "../models/bookModel.js"; // Corrected path
const router = express.Router();

// POST route to create a new book
router.post("/", async (request, response) => {
    try {
        if (
            !request.body.title ||
            !request.body.author ||
            !request.body.publishYear
        ) {
            return response.status(400).send({
                message: "Send all required fields: title, author, publishYear",
            });
        }
        const newBook = {
            title: request.body.title,
            author: request.body.author,
            publishYear: request.body.publishYear,
        };
        const book = await Book.create(newBook);
        return response.status(201).send(book);
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

// GET route to fetch all books
router.get("/", async (request, response) => {
    try {
        const books = await Book.find({});
        return response.status(200).json({
            count: books.length,
            data: books,
        });
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

// GET route to fetch a book by ID
router.get("/:id", async (request, response) => {
    try {
        const { id } = request.params;
        const book = await Book.findById(id);
        return response.status(200).json(book);
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

// PUT route to update a book
router.put("/:id", async (request, response) => {
    try {
        if (
            !request.body.title ||
            !request.body.author ||
            !request.body.publishYear
        ) {
            return response.status(400).send({
                message: "Send all required fields: title, author, publishYear",
            });
        }

        const { id } = request.params;
        
        // if (!mongoose.Types.ObjectId.isValid(id)) {
        //     return response.status(404).json({ message: "Book not found" });
        // }

        const result = await Book.findByIdAndUpdate(id, request.body);
        if (!result) {
            return response.status(404).json({ message: "Book not found" });
        }
        return response
            .status(200)
            .json({ message: "Book successfully updated" });
    } catch (error) {
        response.status(500).send({ message: error.message });
    }
});

// DELETE route to delete a book
router.delete("/:id", async (request, response) => {
    try {
        const { id } = request.params;
        const book = await Book.findByIdAndDelete(id);
        if (!book) {
            return response.status(404).json({ message: "Book not found" });
        }
        return response
            .status(200)
            .json({ message: "Book successfully deleted" });
    } catch (error) {
        response.status(500).send({ message: error.message });
    }
});

export default router;
