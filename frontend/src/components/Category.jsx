import { useState } from "react";

import Task from "./Task";

const Category = ({ title, searchValue }) => {
  const [tasks, setTasks] = useState([]);

  const createTask = () => {
    const newTask = {
      id: Date.now(),
      description: `Nova tarefa ${Date.now()}`,
    };

    setTasks([...tasks, newTask]);
  };

  const filteredTasks = tasks.filter((task) =>
    task.description.includes(searchValue || "")
  );

  return (
    <div className="category">
      <h3>{title}</h3>
      <div className="tasks">
        {filteredTasks.map((task) => (
          <Task key={task.id} description={task.description} />
        ))}
      </div>
      <button onClick={createTask}>
        <i className="fa-solid fa-plus"></i>Adicionar tarefa
      </button>
    </div>
  );
};

export default Category;
