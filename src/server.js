require("dotenv").config();
const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();

const router = require("./router/router");

app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
//...
app.use(express.json());
app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(router);
app.use("/*", (_, res) => res.redirect("/register"));

app.listen(9000, console.log(9000));
