const Infrastructure = () => {
  return (
    <li className="nav-item dropdown">
      <a
        href="#"
        id="menu"
        data-bs-toggle="dropdown"
        className="nav-link px-2 navbarLink dropdown-toggle"
        data-bs-display="static"
      >
        Infrastructure
      </a>
      <ul className="dropdown-menu">
        <li>
          <a href="/infrastructure" className="dropdown-item">
            Lab
          </a>
        </li>
        <li>
          <a href="/infrastructure/library" className="dropdown-item">
            Department Library
          </a>
        </li>
        <li>
          <a href="/characterization-facilities" className="dropdown-item">
            Other Facilities
          </a>
        </li>
      </ul>
    </li>
  );
};

export default Infrastructure;
