import { useState } from "react";

import Task from "./Task";

import "./Category.css";

const Category = ({ title, searchValue }) => {
  const [tasks, setTasks] = useState([]);
  const [taskConfigScreenIsOpen, setTaskConfigScreenIsOpen] = useState(false);
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");

  const createTask = (e) => {
    e.preventDefault();

    const newTask = {
      id: Date.now(),
      title: taskTitle,
      description: taskDescription,
    };

    setTasks([...tasks, newTask]);

    setTaskTitle("");
    setTaskDescription("");
    toggleTaskConfigScreen();
  };

  const filteredTasks = tasks.filter((task) =>
    task.description.includes(searchValue || ""),
  );

  const toggleTaskConfigScreen = () => {
    setTaskConfigScreenIsOpen(!taskConfigScreenIsOpen);
  };

  return (
    <div className="category">
      <h3>{title}</h3>
      <div className="tasks">
        {filteredTasks.map((task) => (
          <Task
            key={task.id}
            title={task.title}
            description={task.description}
          />
        ))}
      </div>
      <div className="open-create-task">
        {taskConfigScreenIsOpen && (
          <form onSubmit={createTask}>
            <h3>Criar tarefa</h3>
            <label>
              <span>Digite um título:</span>
              <input
                type="text"
                name="title"
                required
                onChange={(e) => setTaskTitle(e.target.value)}
              />
            </label>
            <label>
              <span>Digite uma descrição:</span>
              <textarea
                name="description"
                required
                onChange={(e) => setTaskDescription(e.target.value)}
              ></textarea>
            </label>
            <button type="submit" className="btn">
              Criar
            </button>
          </form>
        )}
        <button onClick={toggleTaskConfigScreen} className="btn">
          <i className="fa-solid fa-plus"></i>Adicionar tarefa
        </button>
      </div>
    </div>
  );
};

export default Category;
