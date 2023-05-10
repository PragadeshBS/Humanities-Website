import { useEffect } from "react";
import Title from "../../../components/Title";
import SelectedContent from "../../../components/selectedContent/SelectedContent";

const UgStudents = () => {
  useEffect(() => {
    document.title =
      "UG Students | Department of Applied Sciences & Humanities, MIT Campus, Anna University";
  }, []);
  return (
    <div className="container mb-5">
      <Title text="UG Students" />
      <SelectedContent
        content={{
          "2019-2020": "/static/docs/students/ug/2019-20.pdf",
          "2020-2021": "/static/docs/students/ug/2020-21.pdf",
          "2021-2022": "/static/docs/students/ug/2021-22.pdf",
          "2022-2023": "/static/docs/students/ug/2022-23.pdf",
        }}
        defaultView="2022-2023"
        contentType="ugStudents"
        selectTitle="Year of Admission"
      />
    </div>
  );
};

export default UgStudents;
