const express = require("express");
const router = express.Router();

const Home = require("../Controllers/home_controller");

router.get("/bookmaniya", Home);

module.exports = router;
