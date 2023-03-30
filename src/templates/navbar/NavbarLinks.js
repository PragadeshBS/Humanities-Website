import Infrastructure from "./navlinks/Infrastructure";
import People from "./navlinks/People";
import Research from "./navlinks/Research";
import NavbarLink from "./NavbarLink";
import Academics from "./navlinks/Academics";
import Students from "./navlinks/Students";
import Achievements from "./navlinks/Achievements";
import navStyles from "./navStyles.module.css";

const NavbarLinks = () => {
  return (
    <>
      <NavbarLink text="Vision&amp; Mission" link="/vision-mission" />
      <NavbarLink text="HOD's Desk" link="/hod" />
      <li className={`nav-item dropdown ${navStyles.navItem}`}>
        <People />
      </li>
      <li className={`nav-item dropdown ${navStyles.navItem}`}>
        <Academics />
      </li>
      <li className={`nav-item dropdown ${navStyles.navItem}`}>
        <Infrastructure />
      </li>
      <li className={`nav-item dropdown ${navStyles.navItem}`}>
        <Research />
      </li>
      <NavbarLink text="Placements" link="/placements" />
      <li className={`nav-item dropdown ${navStyles.navItem}`}>
        <Achievements />
      </li>
      <NavbarLink text="Events" link="/" />
      <NavbarLink text="Alumni" link="/" />
      <NavbarLink text="Archive" link="/" />
    </>
  );
};

export default NavbarLinks;
