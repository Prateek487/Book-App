import { Link } from "react-router-dom";
import Login from "../Components/Login";
import Logout from "../Components/Logout";

const Home = (props) => {
  return (
    <div>
      <Login />
      <br />
      <Logout />
      <br />
      <h2>Search for Books</h2>
      <Link to="/search">Here</Link>
    </div>
  );
};

export default Home;
