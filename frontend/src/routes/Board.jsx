import { useState } from "react";

import "./Board.css";

import Category from "../components/Category";

const Board = () => {
  const [categories, setCategories] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [categoryConfigScreenIsOpen, setCategoryConfigScreenIsOpen] =
    useState(false);
  const [categoryTitle, setCategoryTitle] = useState("");

  const createCategory = (e) => {
    e.preventDefault();

    const newCategory = {
      id: Date.now(),
      title: categoryTitle,
    };

    setCategories([...categories, newCategory]);

    setCategoryTitle("");
    toggleCategoryConfigScreen();
  };

  const toggleCategoryConfigScreen = () => {
    setCategoryConfigScreenIsOpen(!categoryConfigScreenIsOpen);
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
        <button onClick={toggleCategoryConfigScreen}>
          <i className="fa-solid fa-plus"></i>Criar categoria
        </button>
        {categoryConfigScreenIsOpen && (
          <form onSubmit={createCategory} className="category-config-screen">
            <button type="button" onClick={toggleCategoryConfigScreen}>
              <i className="fa-solid fa-xmark"></i>
            </button>
            <h3>Criar categoria</h3>
            <label>
              <span>Digite um título:</span>
              <input
                type="text"
                name="title"
                onChange={(e) => setCategoryTitle(e.target.value)}
              />
            </label>
            <input type="submit" value="Criar" />
          </form>
        )}
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
