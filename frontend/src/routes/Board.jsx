import "./Board.css";

import Category from "../components/Category";

const Board = () => {
  return (
    <div className="board">
      <div className="filter-bar">
        <input type="text" name="search" placeholder="Procurar tarefa" />
        <button>
          <i class="fa-solid fa-filter"></i>
        </button>
        <button>
          <i class="fa-solid fa-plus"></i>Criar categoria
        </button>
      </div>
      <div className="categories">
        <Category title="Backlog" />
        <Category title="In Progress" />
        <Category title="Done" />
        <button><i class="fa-solid fa-plus"></i>Criar categoria</button>
      </div>
    </div>
  );
};

export default Board;
