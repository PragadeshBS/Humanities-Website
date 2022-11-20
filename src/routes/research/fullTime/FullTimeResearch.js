import TabbedContent from "../../../components/tabbedContent/TabbedContent";
import Title from "../../../components/Title";
import completedResearch from "../../../data/research/fullTime/completed";
import ongoingResearch from "../../../data/research/fullTime/ongoing";
import { useEffect } from "react";

const FullTimeResearch = () => {
  useEffect(() => {
    document.title =
      "Full Time Research Scholars | Department of Applied Sciences & Humanities, MIT Campus, Anna University";
  }, []);
  const content = {
    "Completed Research": completedResearch,
    "Ongoing Research": ongoingResearch,
  };
  return (
    <div className="container my-3">
      <Title text="Full-time Research Scholars" />
      <div className="my-3">
        <TabbedContent
          content={content}
          defaultTab="Completed Research"
          contentType="research"
        />
      </div>
    </div>
  );
};

export default FullTimeResearch;
