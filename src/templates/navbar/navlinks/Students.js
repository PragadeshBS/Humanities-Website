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
  );
};

export default Students;
