import Task from "./Task";

const Category = ({ title }) => {
  return (
    <div className="category">
      <h3>{title}</h3>
      <div className="tasks">
        <Task description="Tarefa 1" />
        <Task description="Tarefa 2" />
        <Task description="Tarefa 3" />
      </div>
      <button>
        <i class="fa-solid fa-plus"></i>Adicionar tarefa
      </button>
    </div>
  );
};

export default Category;
