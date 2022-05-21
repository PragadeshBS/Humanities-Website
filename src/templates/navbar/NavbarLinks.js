import Facilities from "./navlinks/Facilities";
import People from "./navlinks/People";
import Research from "./navlinks/Research";
import NavbarLink from "./NavbarLink";

const NavbarLinks = () => {
  return (
    <>
      <NavbarLink text="HOD's Desk" link="/hod" />
      <NavbarLink text="Vision &amp; Mission" link="/vision-mission" />
      <People />
      <Facilities />
      <NavbarLink text="Courses" link="/courses" />
      <Research />
      <NavbarLink text="Annual Report" link="/annual-report" />
      <NavbarLink text="Contact" link="/contact" />
    </>
  );
};

export default NavbarLinks;
