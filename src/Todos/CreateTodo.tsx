import React, { useState } from 'react';
import { Todosformdatadata } from '../TypeTodo/InterfaceTypeTodo';
import axios from 'axios';
import './Todos.css';

const CreateTodo = () => {
  const initialstate: Todosformdatadata = {
    TodoName: '',
    Created_By: '',
    Age: '',
    isCompleted: false,
  };

  const [formdata, setFormdata] = useState(initialstate);

  const Handlechange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormdata({ ...formdata, [name]: value });
  };

  const Handlesubmit = (e: React.FormEvent) => {
    e.preventDefault();
    axios.post('http://localhost:8080/Todos', formdata)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    setFormdata(initialstate);
  };

  const { TodoName, Created_By, Age, isCompleted } = formdata;

  return (
    <div className="create-todo-container">
      <h1 className="create-todo-title">Create Todo</h1>
      <form onSubmit={Handlesubmit} className="create-todo-form">
        <input
          type="text"
          placeholder="Todo Name"
          name="TodoName"
          value={TodoName}
          onChange={Handlechange}
          className="create-todo-input"
        />
        <input
          type="text"
          placeholder="Created By"
          name="Created_By"
          value={Created_By}
          onChange={Handlechange}
          className="create-todo-input"
        />
        <input
          type="text"
          placeholder="Age"
          name="Age"
          value={Age}
          onChange={Handlechange}
          className="create-todo-input"
        />
        <select
          name="isCompleted"
          value={isCompleted.toString()}
          onChange={Handlechange}
          className="create-todo-select"
        >
          <option>Status of Task</option>
          <option value="true">Completed</option>
          <option value="false">Incomplete</option>
        </select>
        <input type="submit" className="create-todo-submit" />
      </form>
    </div>
  );
};

export default CreateTodo;
