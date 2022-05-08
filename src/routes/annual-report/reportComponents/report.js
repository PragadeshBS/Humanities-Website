import Achievements from "./contents/achievements";
import Books from "./contents/books";
import ContinuousTraining from "./contents/continuousTraining";
import Degrees from "./contents/degrees";
import Industrial from "./contents/industrial";
import Journals from "./contents/journals";
import Patents from "./contents/patents";
import Professors from "./contents/Professors";
import Research from "./contents/research";
import Researchprojects from "./contents/researchprojects";
import Title from "./contents/title";
import Document from "./document";
const Report=()=>{
    return (
        <div className="container mt-5 mb-5">
        <div className="row">
          <Title/>
          <Document/>
          <div className="accordion" id="accordionPanelsStayOpenExample">
            <Professors/>
            <Degrees/>
            <Researchprojects/>
            <Industrial/>
            <ContinuousTraining/>
            <Research/>
            <Journals/>
            <Books/>
            <Patents/>
            <Achievements/>
          </div>
        </div>
      </div>
    )
}

export default Report;