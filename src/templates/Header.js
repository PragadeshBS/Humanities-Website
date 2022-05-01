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
              Department of Applied Sciences &amp; Humanities
            </span>
            <span className="h5">MIT Campus, Anna University</span>
          </div>
        </div>
      </div>
      {/* Navbar */}
      <nav className="navbar navbar-expand-xl navbar-dark accent-bg">
        <div className="container">
          <Link className="navbar-brand" to="/">
            DASH
          </Link>
          <button
            className="navbar-toggler navbar-toggler-right"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbar1"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbar1">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/hod">
                  HOD Desk
                </Link>
              </li>
              <li className="nav-item dropdown">
                <a
                  href="#"
                  id="menu"
                  data-bs-toggle="dropdown"
                  className="nav-link dropdown-toggle"
                  data-bs-display="static"
                >
                  People
                </a>
                <ul className="dropdown-menu">
                  <li className="dropdown-submenu">
                    <a
                      href="#"
                      data-bs-toggle="dropdown"
                      className="dropdown-item dropdown-toggle"
                    >
                      Faculty
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <Link
                          to="/faculty/teaching"
                          className="dropdown-item"
                          onClick={(e)=>{console.log(e)}}                          
                        >
                          Teaching Staff
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/faculty/non-teaching"
                          className="dropdown-item"
                        >
                          Non-Teaching Staff
                        </Link>
                      </li>
                    </ul>
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
                        <a href="#" className="dropdown-item">
                          M.Phil Mathematics
                        </a>
                      </li>
                      <li>
                        <a href="#" className="dropdown-item">
                          M.Sc Mathemathics
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  aria-current="page"
                  to="/infrastructure"
                >
                  Infrastructure
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/courses">
                  Courses
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/research">
                  Research
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  aria-current="page"
                  to="characterization-facilities"
                >
                  Characterization Facilities
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  aria-current="page"
                  to="annual-report"
                >
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
