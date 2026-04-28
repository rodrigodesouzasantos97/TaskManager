import { useState } from "react";

import "./Home.css";

import Workpace from "../components/Workpace";

const Home = () => {
  const [workpaces, setWorkpaces] = useState([]);
  const [filteredWorkpaces, setFilteredWorkpaces] = useState([]);

  const createWorkpace = () => {
    const newWorkpace = {
      id: Date.now(),
      title: `Novo espaço de trabalho ${Date.now()}`,
    };

    const updated = [...workpaces, newWorkpace];

    setWorkpaces(updated);
    setFilteredWorkpaces(updated);
  };

  const searchWorkpaces = (value) => {
    if (!value) {
      setFilteredWorkpaces(workpaces);
      return;
    }

    const filtered = workpaces.filter((workpace) =>
      workpace.title.includes(value),
    );

    setFilteredWorkpaces(filtered);
  };

  return (
    <div className="home">
      <div className="filter-bar">
        <input
          type="text"
          name="search"
          placeholder="Procurar espaço de trabalho"
          onChange={(e) => searchWorkpaces(e.target.value)}
        />
        <button onClick={createWorkpace}>
          <i className="fa-solid fa-plus"></i>Criar novo espaço
        </button>
      </div>
      <div className="Workpaces">
        {filteredWorkpaces.length === 0 && (
          <p>
            Você ainda não tem nenhum espaço de trabalho
            <i className="fa-solid fa-face-frown"></i>
          </p>
        )}
        {filteredWorkpaces.map((workpace) => (
          <Workpace key={workpace.id} title={workpace.title} />
        ))}
      </div>
    </div>
  );
};

export default Home;
