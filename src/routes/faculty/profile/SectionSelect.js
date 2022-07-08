import ScrollIntoView from "react-scroll-into-view";
const SectionSelect = ({ data }) => {
  return (
    <div id="profile-sidebar">
      <ScrollIntoView selector="#personalInfo">
        <button className="p-1 my-4">Personal Details</button>
      </ScrollIntoView>
      {data.education && (
        <ScrollIntoView selector="#education">
          <button className="p-1 my-4">Education</button>
        </ScrollIntoView>
      )}
      {data.experience && (
        <ScrollIntoView selector="#experience">
          <button className="p-1 my-4">Experience</button>
        </ScrollIntoView>
      )}
      {data.project && (
        <ScrollIntoView selector="#project">
          <button className="p-1 my-4">Project</button>
        </ScrollIntoView>
      )}
      {data.publications && (
        <ScrollIntoView selector="#publication">
          <button className="p-1 my-4">Publications</button>
        </ScrollIntoView>
      )}
      {(data.conferencesAttended || data.conferencesPresented) && (
        <ScrollIntoView selector="#conference">
          <button className="p-1 my-4">Conferences</button>
        </ScrollIntoView>
      )}
      {(data.fdpAttended || data.fdpPresented) && (
        <ScrollIntoView selector="#fdp">
          <button className="p-1 my-4">FDP &amp; Workshops</button>
        </ScrollIntoView>
      )}
      {data.research && (
        <ScrollIntoView selector="#research">
          <button className="p-1 my-4">Research Guidance</button>
        </ScrollIntoView>
      )}
      {data.others && (
        <ScrollIntoView selector="#others">
          <button className="p-1 my-4">Other info</button>
        </ScrollIntoView>
      )}
    </div>
  );
};
export default SectionSelect;
