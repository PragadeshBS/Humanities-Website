import { Link } from "react-router-dom";

const Students = () => {
  return (
    <li className="nav-item dropdown">
      <a
        href="#"
        id="menu"
        data-bs-toggle="dropdown"
        className="nav-link px-2 navbarLink dropdown-toggle"
        data-bs-display="static"
      >
        Students
      </a>
      <ul className="dropdown-menu">
        <li>
          <Link to="/infrastructure" className="dropdown-item">
            UG
          </Link>
        </li>
        <li>
          <Link to="/characterization-facilities" className="dropdown-item">
            PG
          </Link>
        </li>
        <li>
          <Link to="/characterization-facilities" className="dropdown-item">
            Research scholar
          </Link>
        </li>
      </ul>
    </li>
  );
};

export default Students;
