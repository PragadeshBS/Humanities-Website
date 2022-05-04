import ResearchTable from "../../routes/research/ResearchTable";

const Content = ({ data, type }) => {
  if (type === "research") {
    return <ResearchTable data={data} />;
  }
  return <div></div>;
};

export default Content;
