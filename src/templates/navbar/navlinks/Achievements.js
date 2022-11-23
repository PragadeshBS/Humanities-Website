import { Link } from "react-router-dom";

const Achievements = () => {
  return (
    <li className="nav-item dropdown">
      <a
        href="#"
        id="menu"
        data-bs-toggle="dropdown"
        className="nav-link px-2 navbarLink dropdown-toggle"
        data-bs-display="static"
      >
        Achievements
      </a>
      <ul className="dropdown-menu">
        <li>
          <Link to="/" className="dropdown-item">
            Staff
          </Link>
        </li>
        <li>
          <Link to="/" className="dropdown-item">
            Students
          </Link>
        </li>
      </ul>
    </li>
  );
};

export default Achievements;
