import Headings from "../headings";
const Researchprojects=()=>{
    return (<div class="accordion-item nesteditem">
    <Headings data={"Sponsored Research Projects Sanctioned"} id={"panelsStayOpen-headingThree6"} target={"#panelsStayOpen-collapseThree6"} aria={"panelsStayOpen-collapseThree6"}/>
    <div id="panelsStayOpen-collapseThree6" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree6">
      <div className="table-responsive m-5">
        <table class="table table-bordered mt-3 mb-3 block">
          <tr><th>Sl. No.</th><th>Name of the Project</th><th>Name of the Co-ordinator</th><th>Amount(Rs. in lakh)</th><th>Sponsoring Agency</th></tr>
        </table>
      </div>
    </div>
  </div>)
}
export default Researchprojects;