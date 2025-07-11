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

const getTodo = async (req, res) => {
  try {
    const data = await Todo.find();
    console.log("data fetching succesful!");
    res.status(200).json(data);
  } catch (error) {
    console.log(error);
    res.status(500), json({ error: "internal server err" });
  }
};

// create PUT method to update data

const updateTodo = async (req, res) => {
  try {
    const todoId = req.params.id;
    const updateTodo = req.body;
    const response = await Todo.findByIdAndUpdate(todoId, updateTodo, {
      new: true,
      runValidators: true,
    });

    if (!response) {
      return res.status(400).json({ err: "Todo NOT Found" });
    }
    console.log("Toda Update Succesfully");
    res.status(200).json(response);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Err" });
  }
};

// create DELETE method to delete Todo
const deleteTodo = async (req, res) => {
  try {
    const todoId = req.params.id;
    const response = await Todo.findByIdAndDelete(todoId);

    if (!response) {
      return res.status(400).json({ err: "Todo NOT Found" });
    }

    console.log("Toda Delete Succesfully");
    res.status(200).json(response);
  } catch (error) {
    console.log(error);
    res.status(500).json({ massage: "Internal server error" });
  }
};

module.exports = { createTodo, getTodo, updateTodo , deleteTodo};
