const express = require("express");
const router = express.Router();
const createTodo = require("../controllers/TodoTask.js");


router.post("/", createTodo); // 👈 use controller as callback

module.exports = router;
