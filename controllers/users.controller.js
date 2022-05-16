const usersService = require("../services/users.service");
const { sign } = require("jsonwebtoken");
const Cryptr = require('cryptr');
let api = exports;
exports.register = (req, res) => {
  const data = {
    userName: req.body.userName,
    password: req.body.password,
    fname: req.body.fname,
    lname: req.body.lname
  };
  
  usersService.register(data, (error, results) => {
    if (error) {
      return res.status(400).send({ success: 0, data: `ERROR : ${error.sqlMessage}` });
    }
    return res.status(200).send({
      success: 1,
      data: results,
    });
  });
};

exports.login = (req, res, next) => {
  // Validation area
  const data = {
    userName: req.body.userName,
    password: req.body.password,
  };
  usersService.login(data, (error, results) => {
    if (error) {
      console.log(error);
      return res.status(400).send({ success: 0, data: "Bad request" });
    }
    if(results){
      results.password = undefined;
      const jsontoken = sign({ result : results},"secreatekey123",{
        expiresIn:"1h"
      });

      return res.status(200).send({
        success: 1,
        data: results,
        token:jsontoken
      });
    }else{
      return res.status(400).send({
        success: 1,
        data: "Invalid email or password"
      });
    }
  });
};

exports.getTodoList = (req, res, next) => {
  const data = {};
  usersService.getTodoList(data, (error, results) => {
    if (error) {
      console.log(error);
      return res.status(400).send({ success: 0, data: "Bad request" });
    }
    return res.status(200).send({
      success: 1,
      data: results,
    });
  });
};

exports.createTodo = (req, res) => {
  const data = {
    userId: req.body.userId,
    toDoTitle: req.body.toDoTitle,
    description: req.body.description,
  };
  
  usersService.createTodo(data, (error, results) => {
    if (error) {
      console.log(error)
      return res.status(400).send({ success: 0, data: "Bad requests" });
    }
    return res.status(200).send({
      success: 1,
      data: results,
    });
  });
};


exports.updateTodo = (req, res) => {
  const data = {
    userId: req.body.userId,
    productName: req.body.productName,
    description: req.body.description,
    TodoId: req.body.TodoId,
  };
  
  usersService.updateTodo(data, (error, results) => {
    if (error) {
      console.log(error)
      return res.status(400).send({ success: 0, data: "Bad requests" });
    }
    return res.status(200).send({
      success: 1,
      data: results,
    });
  });
};


exports.markTodoDone = (req, res) => {
  const data = {
    TodoId: req.body.TodoId,
    isComplete: req.body.isComplete,
  };
  
  usersService.markTodoDone(data, (error, results) => {
    if (error) {
      console.log(error)
      return res.status(400).send({ success: 0, data: "Bad requests" });
    }
    return res.status(200).send({
      success: 1,
      data: results,
    });
  });
};

exports.deleteTodo = (req, res) => {
  const data = {
    productId: req.body.productId,
  };
  
  usersService.deleteTodo(data, (error, results) => {
    if (error) {
      console.log(error)
      return res.status(400).send({ success: 0, data: "Bad requests" });
    }
    return res.status(200).send({
      success: 1,
      data: results,
    });
  });
};


