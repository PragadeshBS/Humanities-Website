import Infrastructure from "./navlinks/Infrastructure";
import People from "./navlinks/People";
import Research from "./navlinks/Research";
import NavbarLink from "./NavbarLink";

const NavbarLinks = () => {
  return (
    <>
      <NavbarLink text="Vision &amp; Mission" link="/vision-mission" />
      <NavbarLink text="HOD's Desk" link="/hod" />
      <People />
      <NavbarLink text="Academics" link="/courses" />
      <Infrastructure />
      <Research />
      <NavbarLink text="Placements" link="/" />
      <NavbarLink text="Students" link="/" />
      <NavbarLink text="Achievements" link="/" />
      <NavbarLink text="Events" link="/" />
      <NavbarLink text="Alumni" link="/" />
      {/* <NavbarLink text="Department Library" link="/" /> */}
      <NavbarLink text="Archive" link="/" />
      {/* <NavbarLink text="Annual Report" link="/annual-report" /> */}
      {/* <NavbarLink text="Contact" link="/contact" /> */}
    </>
  );
};

export default NavbarLinks;
