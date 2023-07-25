import express from "express";
import {
  getAllBooks,
  createBook,
  getBookById,
  updateBook,
  deleteBook,
} from "../controllers/BookController.js";

const router = express.Router();

// Mendapatkan semua buku
router.get("/books", getAllBooks);

// Membuat buku baru dengan mengunggah gambar
router.post("/books", createBook);

// Mendapatkan buku berdasarkan ID
router.get("/books/:id", getBookById);

// Mengupdate buku berdasarkan ID dengan mengunggah gambar
router.put("/books/:id", updateBook);

// Menghapus buku berdasarkan ID
router.delete("/books/:id", deleteBook);

export default router;
