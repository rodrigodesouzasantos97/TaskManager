import "./Home.css";

import Workpace from "../components/Workpace";

const Home = () => {
  return (
    <div className="home">
      <div className="filter-bar">
        <input type="text" name="search" placeholder="Procurar espaço de trabalho" />
        <button><i class="fa-solid fa-plus"></i>Criar novo espaço</button>
      </div>
      <div className="Workpaces">
        <Workpace title="Workpace 1" />
        <Workpace title="Workpace 2" />
      </div>
    </div>
  );
};

export default Home;
