import React, { useEffect, useState } from 'react';
import { Todosformdatadata } from '../TypeTodo/InterfaceTypeTodo';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './Todos.css'; 

const EditTodo = () => {
  const { id } = useParams();
  let initialstate: Todosformdatadata = {
    TodoName: '',
    Created_By: '',
    Age: '',
    isCompleted: false,
  };

  const [formdata, setFormdata] = useState(initialstate);

  const Getdata = () => {
    axios.get(`http://localhost:8080/Todos/${id}`)
      .then((res) => {
        setFormdata(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    Getdata();
  }, []);

  const Handlechange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormdata({ ...formdata, [name]: value });
  };

  const Handlesubmit = (e: React.FormEvent) => {
    e.preventDefault();
    axios.patch(`http://localhost:8080/Todos/${id}`, formdata)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    setFormdata(initialstate);
  };

  const { TodoName, Created_By, Age, isCompleted }: Todosformdatadata = formdata;

  return (
    <div   className="edit-todo-container">
      <h1 className="edit-todo-title">Edit Todo</h1>
      <form onSubmit={Handlesubmit} className="edit-todo-form">
        <input
          type="text"
          placeholder="Todo Name"
          name="TodoName"
          value={TodoName}
          onChange={Handlechange}
          className="edit-todo-input"
        />
        <input
          type="text"
          placeholder="Created By"
          name="Created_By"
          value={Created_By}
          onChange={Handlechange}
          className="edit-todo-input"
        />
        <input
          type="text"
          placeholder="Age"
          name="Age"
          value={Age}
          onChange={Handlechange}
          className="edit-todo-input"
        />
        <select
          name="isCompleted"
          value={isCompleted.toString()}
          onChange={Handlechange}
          className="edit-todo-select"
        >
          <option>Status of Task</option>
          <option value="true">Completed</option>
          <option value="false">Incomplete</option>
        </select>
        <input type="submit" className="edit-todo-submit" />
      </form>
    </div>
  );
};

export default EditTodo;
