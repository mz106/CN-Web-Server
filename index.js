
const express = require("express");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
    res.status(200).send("hello world again");
});

app.get("/about", (req, res) => {
    res.status(200).send("This is the about route");
});

// http://localhost/users/john?age=52

app.get("/users/:username", (req, res) => {
    res.status(200).send(`You requested information about ${req.params.username}: ${req.query.age}`);
});

app.get("/:username/:project", (req, res) => {
    res.status(200).send(`You requested information about ${req.params.project} created by ${req.params.username}`);
});

app.listen(port, () => {
    console.log("App is online");
});