import Headings from "../headings";
import Training from "./training";
import TrainingConducted from "./trainingConduc";
import Conference from "./conferences";
const ContinuousTraining = () => {
  return (
    <div className="accordion-item nesteditem">
      <Headings
        data={"Continuing Education Programmes"}
        id={"panelsStayOpen-headingThree7"}
        target={"#panelsStayOpen-collapseThree7"}
        aria={"panelsStayOpen-collapseThree7"}
      />
      <div
        id="panelsStayOpen-collapseThree7"
        className="accordion-collapse collapse"
        aria-labelledby="panelsStayOpen-headingThree7"
      >
        <div className="accordion m-5" id="accordionPanelsStayOpenExample">
          <TrainingConducted />
          <Training />
          <Conference />
        </div>
      </div>
    </div>
  );
};
export default ContinuousTraining;
