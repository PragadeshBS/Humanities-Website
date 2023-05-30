import { Link } from "react-router-dom";

const Infrastructure = () => {
  return (
    <li className="nav-item dropdown">
      <a
        href="#"
        id="menu"
        data-bs-toggle="dropdown"
        className="nav-link px-2 navbarLink dropdown-toggle"
        data-bs-display="static"
      >
        Infrastructure
      </a>
      <ul className="dropdown-menu">
        <li>
          <Link to="/infrastructure" className="dropdown-item">
            Lab
          </Link>
        </li>
        <li>
          <Link to="/infrastructure/library" className="dropdown-item">
            Department Library
          </Link>
        </li>
        <li>
          <Link to="/characterization-facilities" className="dropdown-item">
            Other Facilities
          </Link>
        </li>
      </ul>
    </li>
  );
};

export default Infrastructure;
