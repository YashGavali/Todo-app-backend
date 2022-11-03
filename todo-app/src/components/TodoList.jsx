import React from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
import TodoCard from './TodoCard';

const TodoList = () => {
  const [todoList, setTodoList] = useState([]);

  const [newTodo, setNewTodo] = useState('');

  const getTodoData = () => {
    axios.get('/getalltodos').then((res) => setTodoList(res.data));
  };

  useEffect(() => {
    getTodoData();
  }, [todoList]);

  return (
    <div>
      <div>
        <h4>PLEASE ENTER TASK</h4>
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button
          onClick={(e) => {
            setNewTodo(newTodo.trim());
            if (newTodo.length !== 0) {
              axios.post('/createtodo', {
                task: newTodo,
              });
            } else {
              alert('Please enter some task');
            }
          }}
        >
          Add
        </button>
      </div>

      <h3>TASK TO DO</h3>

      {todoList &&
        todoList.map((todoItem) => {
          return (
            <TodoCard
              todoItem={todoItem}
              key={todoItem.id}
              getTodoData={getTodoData}
            />
          );
        })}
    </div>
  );
};

export default TodoList;
