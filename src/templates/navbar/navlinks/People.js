import { Link } from "react-router-dom";

const People = () => {
  return (
    <li className="nav-item dropdown">
      <a
        href="#"
        id="menu"
        data-bs-toggle="dropdown"
        className="nav-link navbarLink dropdown-toggle"
        data-bs-display="static"
      >
        People
      </a>
      <ul className="dropdown-menu">
        <li>
          <Link to="/faculty/teaching" className="dropdown-item">
            Faculty
          </Link>
        </li>
        <li>
          <Link to="/faculty/non-teaching" className="dropdown-item">
            Staff
          </Link>
        </li>
        <li className="dropdown-submenu">
          <a
            href="#"
            data-bs-toggle="dropdown"
            className="dropdown-item dropdown-toggle"
          >
            Students
          </a>
          <ul className="dropdown-menu">
            <li>
              <Link to="students/msc/math" className="dropdown-item">
                M.Sc
              </Link>
            </li>
            <li>
              <Link to="students/mphil/math" className="dropdown-item">
                M.Phil
              </Link>
            </li>
          </ul>
        </li>
      </ul>
    </li>
  );
};

export default People;
