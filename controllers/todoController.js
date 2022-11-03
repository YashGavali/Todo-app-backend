const connection = require('../db');

//get all the todos list

const getAllTodos = (req, res, next) => {
  connection.query('SELECT * FROM todo', function (err, results, fields) {
    if (err) {
      res.send(err.message);
    } else {
      res.send(results);
    }
  });
};

// get Todo by id

const getToDoById = (req, res, next) => {
  connection.query(
    'SELECT * FROM todo WHERE id =?',
    [req.params.id],
    function (err, results, fields) {
      if (err) {
        res.send(err.message);
      } else {
        res.send(results);
      }
    }
  );
};

// add new todo

const createTodo = (req, res, next) => {
  const { task } = req.body;

  connection.query(
    `INSERT INTO todo (task) VALUES(?)`,
    [task],
    function (err, results) {
      if (err) {
        res.send(err.message);
      } else {
        res.send(results);
      }
    }
  );
};

// delete a todo item by Id

const deleteTodo = (req, res, next) => {
  connection.query(
    `DELETE FROM todo WHERE id =? `,
    [req.params.id],
    function (err, results) {
      if (err) {
        res.send(err.message);
      } else {
        res.send(results);
      }
    }
  );
};

//update a todo

const updateTodo = (req, res, next) => {
  connection.query(
    `UPDATE todo SET task = ? WHERE id = ?`,
    [req.body.task, req.params.id],
    function (err, results) {
      if (err) {
        res.send(err.message);
      } else {
        res.send(results);
      }
    }
  );
};

module.exports = {
  getAllTodos,
  createTodo,
  getToDoById,
  deleteTodo,
  updateTodo,
};
