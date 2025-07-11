const express = require("express");
const router = express.Router();
const passport = require('../auth.js');
const {createTodo} = require("../controllers/todoTask.js");
const {getTodo} = require("../controllers/todoTask.js");
const {updateTodo} = require("../controllers/todoTask.js");
const {deleteTodo} = require("../controllers/todoTask.js");


router.use(passport.initialize());
const localAuthMiddleware = passport.authenticate('local', {session : false});


 // use controller as callback
router.post("/", localAuthMiddleware, createTodo);
router.get("/", getTodo);
router.put("/:id", updateTodo);
router.delete("/:id", deleteTodo);

module.exports = router;
