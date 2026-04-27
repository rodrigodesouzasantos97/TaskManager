const Home = () => {
  return (
    <div className="home">
      <div className="workpace">
        <h2>Workpaces 1</h2>
        <div className="boards">
          <div className="board">
            <h3>Primeiro Board</h3>
            <button>Ver Board</button>
          </div>
          <div className="board">
            <h3>Segundo Board</h3>
            <button>Ver Board</button>
          </div>
          <button className="new-board-btn">Create new Board</button>
        </div>
      </div>

      <div className="workpace">
        <h2>Workpaces 2</h2>
        <div className="boards">
          <div className="board">
            <h3>Primeiro Board</h3>
            <button>Ver Board</button>
          </div>
          <div className="board">
            <h3>Segundo Board</h3>
            <button>Ver Board</button>
          </div>
          <button className="new-board-btn">Create new Board</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
