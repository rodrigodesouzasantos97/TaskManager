import { useState } from "react";

import "./Home.css";

import Workspace from "../components/Workspace";
import { useActionData } from "react-router-dom";

const Home = () => {
  const [newWorkspaceTitle, setNewWorkspaceTitle] = useState("");
  const [newWorkspaceImage, setNewWorkspaceImage] = useState("");
  const [workspaces, setWorkspaces] = useState([]);
  const [filteredWorkspaces, setFilteredWorkspaces] = useState([]);

  const [workspaceConfigScreenIsOpen, setWorkspaceConfigScreenIsOpen] =
    useState(false);

  const createWorkspace = (e) => {
    e.preventDefault();

    if (!newWorkspaceTitle || !newWorkspaceImage) return;

    const newWorkspace = {
      id: Date.now(),
      title: newWorkspaceTitle,
      image: newWorkspaceImage,
    };

    const updated = [...workspaces, newWorkspace];

    setWorkspaces(updated);
    setFilteredWorkspaces(updated);

    setNewWorkspaceTitle("");
    toggleWorkspaceConfigScreen();
  };

  const searchWorkspaces = (value) => {
    if (!value) {
      setFilteredWorkspaces(workspaces);
      return;
    }

    const filtered = workspaces.filter((workspace) =>
      workspace.title.includes(value),
    );

    setFilteredWorkspaces(filtered);
  };

  const toggleWorkspaceConfigScreen = () => {
    setWorkspaceConfigScreenIsOpen(!workspaceConfigScreenIsOpen);
  };

  return (
    <div className="home">
      <div className="filter-bar">
        <input
          type="text"
          name="search"
          className="search"
          placeholder="Procurar espaço de trabalho"
          onChange={(e) => searchWorkspaces(e.target.value)}
        />
        <div className="open-screen">
          <button
            onClick={toggleWorkspaceConfigScreen}
            className="filter-bar-btn"
          >
            <i className="fa-solid fa-plus"></i>Criar novo espaço
          </button>
          {workspaceConfigScreenIsOpen && (
            <form onSubmit={createWorkspace} className="config-screen">
              <button
                type="button"
                onClick={toggleWorkspaceConfigScreen}
                className="close-btn"
              >
                <i className="fa-solid fa-xmark"></i>
              </button>
              <h3>Criar espaço de trabalho</h3>
              <label>
                <span>Digite um título:</span>
                <input
                  type="text"
                  name="title"
                  required
                  onChange={(e) => setNewWorkspaceTitle(e.target.value)}
                />
              </label>
              <label>
                <span>Link da imagem:</span>
                <input
                  type="text"
                  name="image"
                  required
                  onChange={(e) => setNewWorkspaceImage(e.target.value)}
                />
              </label>
              <button type="submit" className="btn">
                Criar
              </button>
            </form>
          )}
        </div>
      </div>
      <div className="Workspaces">
        {filteredWorkspaces.length === 0 && (
          <p>
            Você ainda não tem nenhum espaço de trabalho
            <i className="fa-solid fa-face-frown"></i>
          </p>
        )}
        {filteredWorkspaces.map((workspace) => (
          <Workspace
            key={workspace.id}
            id={workspace.id}
            title={workspace.title}
            image={workspace.image}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
