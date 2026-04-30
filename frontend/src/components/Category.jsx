import { useState } from "react";

import Task from "./Task";

const Category = ({ title, searchValue }) => {
  const [tasks, setTasks] = useState([]);
  const [taskConfigScreenIsOpen, setTaskConfigScreenIsOpen] = useState(false);
  const [taskDescription, setTaskDescription] = useState("");

  const createTask = (e) => {
    e.preventDefault();

    const newTask = {
      id: Date.now(),
      description: taskDescription,
    };

    setTasks([...tasks, newTask]);

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
          <Task key={task.id} description={task.description} />
        ))}
      </div>
      <button onClick={toggleTaskConfigScreen}>
        <i className="fa-solid fa-plus"></i>Adicionar tarefa
      </button>
      {taskConfigScreenIsOpen && (
        <form onSubmit={createTask} className="category-config-screen">
          <button type="button" onClick={toggleTaskConfigScreen}>
            <i className="fa-solid fa-xmark"></i>
          </button>
          <h3>Criar tarefa</h3>
          <label>
            <span>Digite um título:</span>
            <input
              type="text"
              name="title"
              onChange={(e) => setTaskDescription(e.target.value)}
            />
          </label>
          <input type="submit" value="Criar" />
        </form>
      )}
    </div>
  );
};

export default Category;
