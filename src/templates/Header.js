import { Link } from "react-router-dom";
import AnnaUnivLogo from "../static/images/app/auLogo.png";
import './templateStyles.css'

const Header = () => {
  return (
    <div>
      <div className="container">
        <img src={AnnaUnivLogo} alt="annauniv-logo" className="logo-img mt-2" />
        <span className="ms-3 h5">Department of Applied Sciences and Humanities</span>
      </div>
      Navbar:
      <nav>
        <Link to="/">Home</Link> <Link to="/faculty/teaching">Teaching</Link>{" "}
        <Link to="/faculty/non-teaching">Non-Teaching</Link>
      </nav>
    </div>
  );
};

export default Header;
