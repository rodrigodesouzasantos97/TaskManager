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

    if (!categoryTitle) return;

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
          className="search"
          placeholder="Procurar tarefa"
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <button className="filter-bar-btn">
          <i className="fa-solid fa-filter"></i>
        </button>
        <div className="open-screen">
          <button
            onClick={toggleCategoryConfigScreen}
            className="filter-bar-btn"
          >
            <i className="fa-solid fa-plus"></i>Criar categoria
          </button>
          {categoryConfigScreenIsOpen && (
            <form onSubmit={createCategory} className="config-screen">
              <button
                type="button"
                onClick={toggleCategoryConfigScreen}
                className="close-btn"
              >
                <i className="fa-solid fa-xmark"></i>
              </button>
              <h3>Criar categoria</h3>
              <label>
                <span>Digite um título:</span>
                <input
                  type="text"
                  name="title"
                  required
                  onChange={(e) => setCategoryTitle(e.target.value)}
                />
              </label>
              <button type="submit" className="btn">
                Criar
              </button>
            </form>
          )}
        </div>
      </div>
      <div className="categories-container">
        <div className="categories">
          {categories.length === 0 && (
            <p>
              Você ainda não tem nenhuma categoria
              <i className="fa-solid fa-face-frown"></i>
            </p>
          )}
          {categories.map((category) => (
            <Category
              key={category.id}
              title={category.title}
              searchValue={searchValue}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Board;
