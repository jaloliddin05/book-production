const express = require("express");
const router = express.Router();

const Home = require("../Controllers/home_controller");
const register = require("../moduls/register/register");

router
  .get("/bookmaniya", Home)
  .get("/register", register.GET)
  .post("/register", register.POST);

module.exports = router;
