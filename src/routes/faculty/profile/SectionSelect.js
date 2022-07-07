import ScrollIntoView from "react-scroll-into-view";
const SectionSelect = ({ data }) => {
  return (
    <div id="profile-sidebar">
      <ScrollIntoView selector="#personalInfo">
        <button className="p-1 my-4">Personal Details</button>
      </ScrollIntoView>
      <ScrollIntoView selector="#education">
        <button className="p-1 my-4">Education</button>
      </ScrollIntoView>
      <ScrollIntoView selector="#experience">
        <button className="p-1 my-4">Experience</button>
      </ScrollIntoView>
      {data.project && (
        <ScrollIntoView selector="#project">
          <button className="p-1 my-4">Project</button>
        </ScrollIntoView>
      )}
      <ScrollIntoView selector="#publication">
        <button className="p-1 my-4">Publications</button>
      </ScrollIntoView>
      <ScrollIntoView selector="#conference">
        <button className="p-1 my-4">Conferences</button>
      </ScrollIntoView>
      <ScrollIntoView selector="#fdp">
        <button className="p-1 my-4">FDP &amp; Workshops</button>
      </ScrollIntoView>
      {data.research && (
        <ScrollIntoView selector="#research">
          <button className="p-1 my-4">Research</button>
        </ScrollIntoView>
      )}
      {data.others && (
        <ScrollIntoView selector="#others">
          <button className="p-1 my-4">Others</button>
        </ScrollIntoView>
      )}
    </div>
  );
};
export default SectionSelect;
