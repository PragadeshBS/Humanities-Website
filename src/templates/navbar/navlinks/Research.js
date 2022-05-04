import { Link } from "react-router-dom";
const Research = () => {
  return (
    <li className="nav-item dropdown">
      <a
        href="#"
        id="menu"
        data-bs-toggle="dropdown"
        className="nav-link navbarLink dropdown-toggle"
        data-bs-display="static"
      >
        Research
      </a>
      <ul className="dropdown-menu">
        <li>
          <Link to="/research/funded" className="dropdown-item">
            Funded Research Projects
          </Link>
        </li>
        <li className="dropdown-submenu">
          <a
            href="#"
            data-bs-toggle="dropdown"
            className="dropdown-item dropdown-toggle"
          >
            Research Scholars
          </a>
          <ul className="dropdown-menu">
            <li>
              <Link to="/research/full-time" className="dropdown-item">
                Full Time
              </Link>
            </li>
            <li>
              <Link to="/research/part-time" className="dropdown-item">
                Part Time
              </Link>
            </li>
          </ul>
        </li>
      </ul>
    </li>
  );
};

export default Research;
