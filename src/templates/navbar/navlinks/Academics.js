import { Link } from "react-router-dom";

const Academics = () => {
  return (
    <li className="nav-item dropdown">
      <a
        href="#"
        id="menu"
        data-bs-toggle="dropdown"
        className="nav-link navbarLink dropdown-toggle"
        data-bs-display="static"
      >
        Academics
      </a>
      <ul className="dropdown-menu">
        <li>
          <Link to="/courses" className="dropdown-item">
            Courses Offered
          </Link>
        </li>
        <li>
          <Link to="/page-under-construction" className="dropdown-item">
            Curriculum
          </Link>
        </li>
      </ul>
    </li>
  );
};

export default Academics;
