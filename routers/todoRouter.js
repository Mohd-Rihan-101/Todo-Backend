const express = require("express");
const router = express.Router();
const {createTodo} = require("../controllers/todoTask.js");
const {getTodo} = require("../controllers/todoTask.js");


 // use controller as callback
router.post("/", createTodo);
router.get("/", getTodo);

module.exports = router;
