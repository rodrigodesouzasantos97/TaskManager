import { useState } from "react";

import "./Board.css";

import Category from "../components/Category";

const Board = () => {
  const [categories, setCategories] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  const createCategory = () => {
    const newCategory = {
      id: Date.now(),
      title: "Nova categoria",
    };

    setCategories([...categories, newCategory]);
  };

  return (
    <div className="board">
      <div className="filter-bar">
        <input
          type="text"
          name="search"
          placeholder="Procurar tarefa"
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <button>
          <i className="fa-solid fa-filter"></i>
        </button>
        <button onClick={createCategory}>
          <i className="fa-solid fa-plus"></i>Criar categoria
        </button>
      </div>
      <div className="categories">
        {categories.map((category) => (
          <Category
            key={category.id}
            title={category.title}
            searchValue={searchValue}
          />
        ))}
      </div>
    </div>
  );
};

export default Board;
