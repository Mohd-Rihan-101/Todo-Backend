const express = require("express");
const Todo = require("../models/todoSchema");
const { json } = require("body-parser");

const createTodo = async (req, res) => {
  try {
    const data = req.body;
    const newTodo = new Todo(data);
    const response = await newTodo.save();
    console.log("Data saved successfully!");
    res.status(200).json(response);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// create get method to get data 

const  getTodo = async (req,res)=>{
    try {
        const data = await Todo.find();
        console.log("data fetching succesful!");
        res.status(200).json(data);
    } catch (error) {
        console.log(error);
        res.status(500),json({error : "internal server err"});
    }
}


module.exports = {createTodo, getTodo};
