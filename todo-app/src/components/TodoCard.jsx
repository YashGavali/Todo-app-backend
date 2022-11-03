import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import styles from './todoCard.module.css';
import { FaRegEdit } from 'react-icons/fa';
import { MdDone } from 'react-icons/md';
import { MdDelete } from 'react-icons/md';

const TodoCard = ({ todoItem, getTodoData }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [inputVal, setInputVal] = useState('');
  return (
    <div className={styles.cardContainer}>
      {!isEditing && todoItem.task}

      {isEditing && (
        <input
          className={styles.editText}
          type="text"
          onChange={(e) => setInputVal(e.target.value)}
          value={inputVal}
          placeholder={todoItem.task}
        />
      )}
      <div>
        <span
          onClick={() => {
            setIsEditing(!isEditing);
          }}
        >
          <FaRegEdit />
        </span>
        {isEditing && (
          <span
            onClick={() => {
              console.log(todoItem.id);
              axios
                .patch(`/updatetodo/${todoItem.id}`, {
                  task: inputVal,
                })
                .then(() => {
                  setIsEditing(false);
                });
            }}
          >
            <MdDone />
          </span>
        )}
        <span
          onClick={() => {
            axios.delete(`/deletetodo/${todoItem.id}`);
          }}
        >
          <MdDelete />
        </span>
      </div>
    </div>
  );
};

export default TodoCard;
