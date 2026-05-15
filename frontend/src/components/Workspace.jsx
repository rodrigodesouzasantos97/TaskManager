import { useState } from "react";

import { Link } from "react-router-dom";

import "./Workspace.css";

const Workspace = ({ id, title, image }) => {
  return (
    <div className="workspace">
      <h3>{title}</h3>
      <img src={image} alt={title} />
      <Link to={`/board/${id}`} className="btn">
        <i className="fa-solid fa-clipboard"></i> Ver quadro
      </Link>
    </div>
  );
};

export default Workspace;
