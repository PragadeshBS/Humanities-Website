import React from "react";
import { useParams } from "react-router-dom";
import getProfileData from "../../../data/staffs/profile/profileData";
import Title from "../../../components/Title";
import PersonalInfo from "./details/PersonalInfo";
import Education from "./details/Education";
import Experience from "./details/Experience";
import Project from "./details/Project";
import Publication from "./details/Publication";
import Conference from "./details/Conference";
import Fdp from "./details/Fdp";
import Research from "./details/Research";
import Others from "./details/Others";
import SectionSelect from "./SectionSelect";

const Profile = () => {
  const { staffId } = useParams();
  const data = getProfileData(staffId);
  return (
    <div className="mb-5">
      <Title text={data.personalInfo.name} />
      <div className="container row">
        <div className="col-lg-3 py-5" id="profile-sidebar">
          <SectionSelect data={data} />
        </div>
        <div className="col-lg-9">
          <PersonalInfo pinfo={data.personalInfo} />
          <Education eduData={data.education} />
          <Experience expData={data.experience} />
          {data.project && <Project />}
          <Publication pub={data.publications} />
          {(data.conferencesAttended || data.conferencesPresented) && (
            <Conference
              attended={data.conferencesAttended}
              presented={data.conferencesPresented}
            />
          )}
          {(data.fdpAttended || data.fdpPresented) && (
            <Fdp attended={data.fdpAttended} presented={data.fdpPresented} />
          )}
          {data.research && <Research />}
          {data.others && <Others />}
        </div>
      </div>
    </div>
  );
};
export default Profile;
