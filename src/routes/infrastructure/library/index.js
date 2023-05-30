import Title from "../../../components/Title";

const Library = () => {
  return (
    <div className="container mb-5">
      <Title text="Library" />
      <h1 className="fs-4">
        List of Books available in the Department Library
      </h1>
      <embed
        src="/static/docs/library/bookList.pdf"
        width="100%"
        height="500px"
      ></embed>
    </div>
  );
};
export default Library;
