const NavbarLink = ({ text, link }) => {
  return (
    <li
      className="nav-item m-2"
      style={{ display: "flex", alignItems: "center" }}
    >
      <a
        className="nav-link p-0 navbarLink text-center"
        id="navbarLink"
        aria-current="page"
        href={link}
      >
        {text}
      </a>
    </li>
  );
};

export default NavbarLink;
