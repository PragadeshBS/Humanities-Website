import NavbarLinks from "./NavbarLinks";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-xl navbar-dark accent-bg">
      <div className="container">
        <a href="/" className="nav-link fw-bold" style={{ color: "white" }}>
          Home
        </a>
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
            <NavbarLinks />
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
