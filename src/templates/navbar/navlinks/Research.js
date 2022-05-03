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
          <a href="#" className="dropdown-item">
            Funded Research Projects
          </a>
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
              <a href="#" className="dropdown-item">
                Full Time
              </a>
            </li>
            <li>
              <a href="#" className="dropdown-item">
                Part Time
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </li>
  );
};

export default Research;
