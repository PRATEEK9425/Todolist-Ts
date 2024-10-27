import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Todosdata } from '../TypeTodo/InterfaceTypeTodo';
import { useNavigate } from 'react-router-dom';
import './Todos.css'; // Import the CSS file

const Todos = () => {
  const [data, setData] = useState<Todosdata[]>([]);

  const Getdata = async () => {
    try {
      axios.get<Todosdata[]>('http://localhost:8080/Todos')
        .then((res) => {
          setData(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (error) {
      console.log(error);
    }
  };

  const Deletefn = (id: number) => {
    axios.delete(`http://localhost:8080/Todos/${id}`)
      .then((res) => {
        console.log(res.data);
        Getdata();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const navigate = useNavigate();

  const EditfnNavigatePage = (id: number) => {
    navigate(`/editlist/${id}`);
  };

  useEffect(() => {
    if (data.length === 0) {
      Getdata();
    }
  }, [data.length]);

  return (
    <div className="todos-container">
      <h1 className="todos-title">Todo's List</h1>
      <div className="todos-grid">
        {data.length > 0 && data.map((item: Todosdata) => (
          <div key={item.id} className="todo-item">
            <h2 className="todo-name">Todo's Name - {item.TodoName}</h2>
            <h3 className="todo-created-by">Created By - {item.Created_By}</h3>
            <h3 className="todo-age">Age - {item.Age}</h3>
            <h3 className="todo-completed">
              Task Completed - {item.isCompleted ? 'Yes' : 'No'}
            </h3>
            <button onClick={() => Deletefn(item.id)} className="todo-btn delete-btn">
              Delete Task
            </button>
            <button onClick={() => EditfnNavigatePage(item.id)} className="todo-btn edit-btn">
              Edit
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default React.memo(Todos);
