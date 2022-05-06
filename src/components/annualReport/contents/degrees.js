import Mphil from "./mphil";
import Msc2 from "./msc2";
import Msc5 from "./msc5";
import Mthers from "./mthers";
import Headings from "../headings";
const Degrees=()=>{
    return (<div class="accordion-item nesteditem">
    <Headings data={"Degrees Awarded"} id={"panelsStayOpen-headingTwo"} target={"#panelsStayOpen-collapseTwo"} aria={"panelsStayOpen-collapseTwo"}/>
    <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
      <div>
        <div class="accordion m-5" id="accordionPanelsStayOpenExample">
          <Mphil/>
          <Mthers/>
          <Msc2/>
          <Msc5/>
        </div>
      </div>
    </div>
  </div>)
}
export default Degrees;