const express = require('express');
const {
  getAllTodos,
  createTodo,
  getToDoById,
  deleteTodo,
  updateTodo,
} = require('../controllers/todoController');

const router = express.Router();

// get all todos

router.get('/getalltodos', getAllTodos);

//get todo by Id
router.get('/:id', getToDoById);

//Add a todo

router.post('/createtodo', createTodo);

//delete a todo

router.delete('/deletetodo/:id', deleteTodo);

//Update a todo by id

router.patch('/updatetodo/:id', updateTodo);

module.exports = router;
