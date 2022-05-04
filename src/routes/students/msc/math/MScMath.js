import students2016 from "../../../../data/students/MSc/math/2016";
import students2017 from "../../../../data/students/MSc/math/2017";
import students2018 from "../../../../data/students/MSc/math/2018";
import students2019 from "../../../../data/students/MSc/math/2019";
import students2020 from "../../../../data/students/MSc/math/2020";
import students2021 from "../../../../data/students/MSc/math/2021";
import Title from "../../../../components/Title";
import SelectedContent from "../../../../components/selectedContent/SelectedContent";

const MScMath = () => {
  const content = {
    2016: students2016,
    2017: students2017,
    2018: students2018,
    2019: students2019,
    2020: students2020,
    2021: students2021,
  };
  return (
    <div className="container mb-5">
      <Title text="M.Sc Students" />
      <SelectedContent content={content} defaultTab={2016} />
    </div>
  );
};

export default MScMath;
