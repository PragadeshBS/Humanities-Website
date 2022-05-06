import Headings from "../headings";
const Msc2=()=>{
    return (<div class="accordion-item">
    <Headings data={"M.Sc. (2 years)"} id={"panelsStayOpen-headingThree3"} target={"#panelsStayOpen-collapseThree3"} aria={"panelsStayOpen-collapseThree3"}/>
    <div id="panelsStayOpen-collapseThree3" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree3">
      <div className="table-responsive m-5">
        <table class="table table-bordered mt-3 mb-3 block">
          <tr><th>Sl. No.</th><th>Title of the Thesis</th><th>Name of the Scholar</th><th>Name of the Supervisor</th><th>Month and Year if the Viva-voce conducted</th></tr>
        </table>
      </div>
    </div>
  </div>)
}
export default Msc2;