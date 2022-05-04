import TabbedContent from "../../../components/tabbedContent/TabbedContent";
import Title from "../../../components/Title";
import completedResearch from "../../../data/research/fullTime/completed";
import ongoingResearch from "../../../data/research/fullTime/ongoing";

const FullTimeResearch = () => {
  const content = {
    "Completed Research": completedResearch,
    "Ongoing Research": ongoingResearch,
  };
  return (
    <div className="my-3">
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
