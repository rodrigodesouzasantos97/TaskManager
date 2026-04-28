import "./Home.css"

import Workpace from "../components/Workpace";

const Home = () => {
  return (
    <div className="home">
      <Workpace title="Workpace 1" />
      <Workpace title="Workpace 2" />
    </div>
  );
};

export default Home;
