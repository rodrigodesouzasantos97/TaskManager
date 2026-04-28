import { useState } from "react";

import Board from "./Board";

const Workspace = ({ title }) => {
  const [boards, setBoards] = useState([]);

  const createBoard = () => {
    const newBoard = {
      id: Date.now(),
      title: "Novo quadro",
    };

    setBoards([...boards, newBoard]);
  };

  return (
    <div className="workspace">
      <h2>{title}</h2>
      <div className="boards">
        {boards.map((board) => (
          <Board key={board.id} title={board.title} />
        ))}
        <button onClick={createBoard} className="new-board-btn">
          <i className="fa-solid fa-plus"></i>Criar novo quadro
        </button>
      </div>
    </div>
  );
};

export default Workspace;
