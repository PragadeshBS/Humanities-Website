import Infrastructure from "./navlinks/Infrastructure";
import People from "./navlinks/People";
import Research from "./navlinks/Research";
import NavbarLink from "./NavbarLink";
import Academics from "./navlinks/Academics";
import Achievements from "./navlinks/Achievements";
import navStyles from "./navStyles.module.css";

const NavbarLinks = () => {
  return (
    <>
      <NavbarLink text="Vision &amp; Mission" link="/vision-mission" />
      <NavbarLink text="HOD's Desk" link="/hod" />
      <li className={`nav-item dropdown ${navStyles.navItem}`}>
        <ul style={{ listStyleType: "none" }} className="m-0 p-0">
          <People />
        </ul>
      </li>
      <li className={`nav-item dropdown ${navStyles.navItem}`}>
        <ul style={{ listStyleType: "none" }} className="m-0 p-0">
          <Academics />
        </ul>
      </li>
      <li className={`nav-item dropdown ${navStyles.navItem}`}>
        <ul style={{ listStyleType: "none" }} className="m-0 p-0">
          <Infrastructure />
        </ul>
      </li>
      <li className={`nav-item dropdown ${navStyles.navItem}`}>
        <ul style={{ listStyleType: "none" }} className="m-0 p-0">
          <Research />
        </ul>
      </li>
      <NavbarLink text="Placements" link="/placements" />
      <li className={`nav-item dropdown ${navStyles.navItem}`}>
        <ul style={{ listStyleType: "none" }} className="m-0 p-0">
          <Achievements />
        </ul>
      </li>
      <NavbarLink text="Events" link="/page-under-construction" />
      <NavbarLink text="Alumni" link="/page-under-construction" />
      <NavbarLink text="Archive" link="/page-under-construction" />
    </>
  );
};

export default NavbarLinks;
