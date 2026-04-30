import { useState } from "react";

import BoardVisualization from "./BoardVisualization";

const Workspace = ({ title }) => {
  const [boards, setBoards] = useState([]);
  const [boardVisConfigScreenIsOpen, setBoardVisConfigScreenIsOpen] =
    useState(false);
  const [boardVisTitle, setBoardVisTitle] = useState("");

  const createBoardVis = (e) => {
    e.preventDefault();

    const newBoard = {
      id: Date.now(),
      title: boardVisTitle,
    };

    setBoards([...boards, newBoard]);

    setBoardVisTitle("");
    toggleBoardVisConfigScreen();
  };

  const toggleBoardVisConfigScreen = () => {
    setBoardVisConfigScreenIsOpen(!boardVisConfigScreenIsOpen);
  };

  return (
    <div className="workspace">
      <h2>{title}</h2>
      <div className="boards">
        {boards.map((board) => (
          <BoardVisualization key={board.id} title={board.title} />
        ))}
        <button
          onClick={toggleBoardVisConfigScreen}
          className="new-board-vis-btn"
        >
          <i className="fa-solid fa-plus"></i>Criar novo quadro
        </button>
        {boardVisConfigScreenIsOpen && (
          <form onSubmit={createBoardVis} className="board-vis-config-screen">
            <button type="button" onClick={toggleBoardVisConfigScreen}>
              <i className="fa-solid fa-xmark"></i>
            </button>
            <h3>Criar quadro</h3>
            <label>
              <span>Digite um título:</span>
              <input
                type="text"
                name="title"
                onChange={(e) => setBoardVisTitle(e.target.value)}
              />
            </label>
            <input type="submit" value="Criar" />
          </form>
        )}
      </div>
    </div>
  );
};

export default Workspace;
