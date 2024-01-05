const People = () => {
  return (
    <li className="nav-item dropdown">
      <a
        href="#"
        id="menu"
        data-bs-toggle="dropdown"
        className="nav-link px-2 navbarLink dropdown-toggle"
        data-bs-display="static"
      >
        People
      </a>
      <ul className="dropdown-menu">
        <li>
          <a href="/faculty/teaching/english" className="dropdown-item">
            Faculty
          </a>
        </li>
        <li>
          <a href="/faculty/non-teaching" className="dropdown-item">
            Staff
          </a>
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
              <a href="/students/ug" className="dropdown-item">
                UG
              </a>
            </li>
            <li>
              <a href="/students/msc/math" className="dropdown-item">
                M.Sc
              </a>
            </li>
            <li>
              <a href="/students/mphil/math" className="dropdown-item">
                M.Phil
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </li>
  );
};

export default People;
