import { Link } from "react-router-dom";
const NavbarLink = ({ text, link }) => {
  return (
    <li className="nav-item">
      <Link className="nav-link" aria-current="page" to={link}>
        {text}
      </Link>
    </li>
  );
};

export default NavbarLink;
