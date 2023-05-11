import StatItem from "./StatItem";
import classes from "./stats.module.css";
import { FaChalkboardTeacher, FaUserGraduate } from "react-icons/fa";
import { BiTestTube } from "react-icons/bi";
import { GiArchiveResearch } from "react-icons/gi";
import { BsFillJournalBookmarkFill, BsFillPeopleFill } from "react-icons/bs";
import { HiLightBulb } from "react-icons/hi";
import { SiGoogleclassroom, SiGooglescholar } from "react-icons/si";

const Stats = () => {
  const statsList = [
    {
      label: "Faculty",
      value: 37,
      icon: <FaChalkboardTeacher />,
    },
    {
      label: "Academic Laboratories",
      value: 4,
      icon: <BiTestTube />,
    },
    {
      label: "Research Laboratories",
      value: 3,
      icon: <GiArchiveResearch />,
    },
    {
      label: "Publications",
      value: 121,
      icon: <BsFillJournalBookmarkFill />,
    },
    {
      label: "Projects",
      value: 2,
      icon: <HiLightBulb />,
    },
    {
      label: "UG Students",
      value: 750,
      icon: <SiGoogleclassroom />,
    },
    {
      label: "PG Students",
      value: 9,
      icon: <FaUserGraduate />,
    },
    {
      label: "Research Scholars",
      value: 16,
      icon: <SiGooglescholar />,
    },
    {
      label: "Staff",
      value: 4,
      icon: <BsFillPeopleFill />,
    },
  ];
  return (
    <div
      style={{
        background: "url('/static/images/home/stats.jpg')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      className={`mt-3 ${classes.stats}`}
    >
      <div className="row text-center align-items-center justify-content-center me-0">
        {statsList.map((stat) => (
          <StatItem label={stat.label} value={stat.value} icon={stat.icon} />
        ))}
      </div>
    </div>
  );
};
export default Stats;
