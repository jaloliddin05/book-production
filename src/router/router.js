const express = require("express");
const router = express.Router();

const Home = require("../moduls/home/home_controller");
const register = require("../moduls/register/register");
const book = require("../moduls/book/book");

router
  .get("/bookmaniya", Home.GET)
  .get("/register", register.GET)
  .post("/register", register.POST)
  .post("/book", book.POST)
  .get("/book/:book_id", book.GET);

module.exports = router;
