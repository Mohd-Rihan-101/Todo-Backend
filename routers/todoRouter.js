const express = require("express");
const router = express.Router();
const {createTodo} = require("../controllers/todoTask.js");
const {getTodo} = require("../controllers/todoTask.js");
const {updateTodo} = require("../controllers/todoTask.js");
const {deleteTodo} = require("../controllers/todoTask.js");


 // use controller as callback
router.post("/", createTodo);
router.get("/", getTodo);
router.put("/:id", updateTodo);
router.delete("/:id", deleteTodo);

module.exports = router;
