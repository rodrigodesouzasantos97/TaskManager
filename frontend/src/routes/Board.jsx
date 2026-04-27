import Category from "../components/Category";

const Board = () => {
  return (
    <div className="board">
      <div className="filter-bar">
        <input type="text" name="search" placeholder="Procure uma task" />
        <button>Filter</button>
        <button>Create Category</button>
      </div>
      <div className="categories">
        <Category title="Backlog" />
        <Category title="In Progress" />
        <Category title="Done" />
      </div>
    </div>
  );
};

export default Board;
