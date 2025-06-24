const express = require('express');
const app = express();
const passport = require('./auth');

require('./db');

const bodyParser = require('body-parser');
app.use(bodyParser.json());

const todoRouter = require('./routers/todoRouter');
app.use("/todo", todoRouter);




app.get("/", (req, res)=>{
    console.log("Welcome to Our Website");
})

app.listen(3000, ()=>{
console.log("server listening on PORT 3000");
})