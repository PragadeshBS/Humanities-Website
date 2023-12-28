import ResearchTable from "../ResearchTable";

const TabContentBody = ({ data, type }) => {
  if (type === "research") {
    return <ResearchTable data={data} />;
  }
  return <div></div>;
};

export default TabContentBody;
