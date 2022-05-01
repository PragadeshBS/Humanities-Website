import { Link } from "react-router-dom";
import AnnaUnivLogo from "../static/images/app/auLogo.png";
import "./templateStyles.css";

const Header = () => {
  return (
    <div>
      <div className="container my-2">
        <div className="top">
          <div>
            <img src={AnnaUnivLogo} alt="annauniv-logo" className="logo-img" />
          </div>
          <div className="ms-3 title">
            <span className="h4">
              Department of Applied Sciences & Humanities
            </span>
            <span className="h5">MIT Campus, Anna University</span>
          </div>
        </div>
      </div>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark accent-bg">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/hod">
                  HOD Desk
                </Link>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Faculty
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Link className="dropdown-item" to="/faculty/teaching">
                      Teaching Staff
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/faculty/non-teaching">
                      Non-Teaching Staff
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/infrastructure">
                  Infrastructure
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/courses">
                  Courses
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/students">
                  Students
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/research">
                  Research
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="characterization-facilities">
                  Characterization Facilities
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="annual-report">
                  Annual Report
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="sponsors">
                  Sponsors
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
