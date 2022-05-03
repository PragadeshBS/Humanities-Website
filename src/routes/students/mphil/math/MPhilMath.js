import TabbedContent from "../../../../components/tabbedContent/TabbedContent";
import students2016 from "../../../../data/students/MPhil/math/2016";
import students2017 from "../../../../data/students/MPhil/math/2017";
import students2018 from "../../../../data/students/MPhil/math/2018";
import students2019 from "../../../../data/students/MPhil/math/2019";
import Title from "../../../../components/Title";

const MPhilMath = () => {
  const content = {
    2016: students2016,
    2017: students2017,
    2018: students2018,
    2019: students2019
  };
  return (
    <div className="container mb-5">
      <Title text="M.Phil Students" />
      <TabbedContent content={content} defaultTab={2016} />
    </div>
  );
};

export default MPhilMath;
