const Academics = () => {
  return (
    <li className="nav-item dropdown">
      <a
        href="#"
        id="menu"
        data-bs-toggle="dropdown"
        className="nav-link px-2 navbarLink dropdown-toggle"
        data-bs-display="static"
      >
        Academics
      </a>
      <ul className="dropdown-menu">
        <li>
          <a href="/courses" className="dropdown-item">
            Courses Offered
          </a>
        </li>
        <li>
          <a href="/page-under-construction" className="dropdown-item">
            Curriculum
          </a>
        </li>
      </ul>
    </li>
  );
};

export default Academics;
