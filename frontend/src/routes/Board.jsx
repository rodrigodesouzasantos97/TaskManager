const Board = () => {
  return (
    <div className="board">
      <div className="filter-bar">
        <input type="text" name="search" placeholder="Procure uma task" />
        <button>Filter</button>
        <button>Create Category</button>
      </div>
      <div className="categories">
        <div className="category">
          <h3>Backlog</h3>
          <div className="tasks">
            <div className="task">
              <p>Nome da Task</p>
            </div>

            <div className="task">
              <p>Nome da Task</p>
            </div>

            <div className="task">
              <p>Nome da Task</p>
            </div>
          </div>
          <button>Add Task</button>
        </div>

        <div className="category">
          <h3>In Progress</h3>
          <div className="tasks">
            <div className="task">
              <p>Nome da Task</p>
            </div>

            <div className="task">
              <p>Nome da Task</p>
            </div>

            <div className="task">
              <p>Nome da Task</p>
            </div>
          </div>
          <button>Add Task</button>
        </div>

        <div className="category">
          <h3>Finished</h3>
          <div className="tasks">
            <div className="task">
              <p>Nome da Task</p>
            </div>

            <div className="task">
              <p>Nome da Task</p>
            </div>

            <div className="task">
              <p>Nome da Task</p>
            </div>
          </div>
          <button>Add Task</button>
        </div>
      </div>
    </div>
  );
};

export default Board;
