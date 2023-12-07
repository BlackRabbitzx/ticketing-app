import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="dhiwise-navigation">
      <h1>Homepage</h1>
      <p className="headline">
      </p>
      <ul>
        <li>
          <Link to="/desktopone">theater list</Link>
        </li>
      </ul>
    </div>
  );
};
export default Home;
