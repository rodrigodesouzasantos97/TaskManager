import { useState } from "react";

import "./Workspace.css";

const Workspace = ({ title, image }) => {
  return (
    <div className="workspace">
      <h3>{title}</h3>
      <img src={image} alt={title} />
      <button className="btn">Ver quadro</button>
    </div>
  );
};

export default Workspace;
