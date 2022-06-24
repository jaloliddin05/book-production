const express = require("express");
const router = express.Router();

const Home = require("../moduls/home/home_controller");
const register = require("../moduls/register/register");

router
  .get("/bookmaniya", Home.GET)
  .get("/register", register.GET)
  .post("/register", register.POST);

module.exports = router;
