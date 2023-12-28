import StudentPdf from "./StudentPdf";
import StudentTable from "./StudentsTable";

const Content = ({ type, data }) => {
  switch (type) {
    case "students":
      return <StudentTable students={data} />;
    case "ugStudents":
      return <StudentPdf pdfFile={data} />;
  }
  return <div>Content</div>;
};

export default Content;
