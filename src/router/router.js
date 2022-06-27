const express = require("express");
const router = express.Router();

const { chek_token } = require("../middlewares/verify_token");

const Home = require("../moduls/home/home_controller");
const register = require("../moduls/register/register");
const book = require("../moduls/book/book");
const user_books = require("../moduls/shop/user_shop_controller");

router
  .get("/bookmaniya", chek_token, Home.GET)
  .get("/register", register.GET)
  .post("/register", register.POST)
  .post("/book", chek_token, book.POST)
  .get("/book/:book_id", chek_token, book.GET)
  .get("/user_books", chek_token, user_books.GET);

module.exports = router;
