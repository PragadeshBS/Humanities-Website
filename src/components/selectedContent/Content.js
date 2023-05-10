import StudentPdf from "../../routes/students/StudentPdf";
import StudentTable from "../../routes/students/StudentsTable";

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
