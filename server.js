const express = require('express');
const app = express();

require('./db');

app.get("/", (req, res)=>{
    console.log("Welcome to Our Website");
})

app.listen(3000, ()=>{
console.log("server listening on PORT 3000");
})