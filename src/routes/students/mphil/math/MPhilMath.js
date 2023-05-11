import students2016 from "../../../../data/students/MPhil/math/2016";
import students2017 from "../../../../data/students/MPhil/math/2017";
import students2018 from "../../../../data/students/MPhil/math/2018";
import students2019 from "../../../../data/students/MPhil/math/2019";
import Title from "../../../../components/Title";
import SelectedContent from "../../../../components/selectedContent/SelectedContent";
import { useEffect } from "react";

const MPhilMath = () => {
  useEffect(() => {
    document.title =
      "M.Phil Math Students | Department of Applied Sciences & Humanities, MIT Campus, Anna University";
  }, []);
  const content = {
    2016: students2016,
    2017: students2017,
    2018: students2018,
    2019: students2019,
  };
  return (
    <div className="container mb-5">
      <Title text="M.Phil Students" />
      <SelectedContent
        content={content}
        defaultView={2019}
        contentType="students"
        selectTitle="Year of Admission"
      />
    </div>
  );
};

export default MPhilMath;
