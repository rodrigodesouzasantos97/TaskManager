import Board from "../components/Board";

const Workpace = ({ title }) => {
  return (
    <div className="workpace">
      <h2>{title}</h2>
      <div className="boards">
        <Board title="Board 1" />
        <Board title="Board 2" />
        <button className="new-board-btn">
          <i className="fa-solid fa-plus"></i>Criar novo quadro
        </button>
      </div>
    </div>
  );
};

export default Workpace;
