const express = require('express');
const Todo = require('../models/todoSchema');

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

module.exports = createTodo;