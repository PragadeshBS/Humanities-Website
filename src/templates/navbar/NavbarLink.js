import { Link } from "react-router-dom";
const NavbarLink = ({ text, link }) => {
  return (
    <li
      className="nav-item mx-1"
      style={{ display: "flex", alignItems: "center" }}
    >
      <Link
        className="nav-link p-0 navbarLink text-center"
        id="navbarLink"
        aria-current="page"
        to={link}
      >
        {text}
      </Link>
    </li>
  );
};

export default NavbarLink;
