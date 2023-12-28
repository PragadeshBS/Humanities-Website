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
  );
};

export default Students;
