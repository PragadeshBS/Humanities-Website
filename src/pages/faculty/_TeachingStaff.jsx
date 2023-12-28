import { useState } from "react";
import SideBar from "../../components/sidebar/Sidebar";
import Cards from "../../components/card/Cards";
import englishStaffs from "../../data/staffs/teaching/english";
import chemistryStaffs from "../../data/staffs/teaching/chemistry";
import physicsStaffs from "../../data/staffs/teaching/physics";
import mathStaffs from "../../data/staffs/teaching/maths";
import tamilStaffs from "../../data/staffs/teaching/tamil";

export default function Teaching() {
  const data = [
    { id: 0, name: "English", staffs: englishStaffs },
    { id: 1, name: "Chemistry", staffs: chemistryStaffs },
    { id: 2, name: "Physics", staffs: physicsStaffs },
    { id: 3, name: "Mathematics", staffs: mathStaffs },
    { id: 4, name: "Tamil", staffs: tamilStaffs },
  ];
  const [curSub, setcurSub] = useState(
    data[
      localStorage.getItem("facultySub")
        ? localStorage.getItem("facultySub")
        : 0
    ]
  );
  const changecurSub = (subId) => {
    localStorage.setItem("facultySub", subId);
    setcurSub(data.find((sub) => sub.id === subId));
  };
  return (
    <div className="row">
      <SideBar views={data} curView={curSub} changeCurView={changecurSub} />
      <div className="col-sm-12 col-xl-9">
        <Cards items={curSub.staffs} type="teachingStaff" />
      </div>
    </div>
  );
}
