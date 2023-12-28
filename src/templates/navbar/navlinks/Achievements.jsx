const Achievements = () => {
  return (
    <li className="nav-item dropdown">
      <a
        href="#"
        id="menu"
        data-bs-toggle="dropdown"
        className="nav-link px-2 navbarLink dropdown-toggle"
        data-bs-display="static"
      >
        Achievements
      </a>
      <ul className="dropdown-menu">
        <li>
          <a href="/page-under-construction" className="dropdown-item">
            Staff
          </a>
        </li>
        <li>
          <a href="/page-under-construction" className="dropdown-item">
            Students
          </a>
        </li>
      </ul>
    </li>
  );
};

export default Achievements;
