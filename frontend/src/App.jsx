import { Outlet } from "react-router-dom";

import "./App.css";

import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="app">
      <h1>Task Manager</h1>
      <NavBar />
      <Outlet />
    </div>
  );
}

export default App;
