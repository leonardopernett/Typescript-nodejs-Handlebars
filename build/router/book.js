"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = express_1.Router();
const BookController_1 = require("../controllers/BookController");
router.route('/books').get(BookController_1.bookController.getBooks);
router.route('/add-books').get(BookController_1.bookController.addBooks);
router.route('/save-books').post(BookController_1.bookController.saveBooks);
exports.default = router;
