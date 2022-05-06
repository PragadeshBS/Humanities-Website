import Headings from "../headings";
const Mphil=()=>{
    return (<div class="accordion-item">
    <Headings data={"M.Phil"} id={"panelsStayOpen-headingOne1"} target={"#panelsStayOpen-collapseOne1"} aria={"panelsStayOpen-collapseOne1"}/>
    <div id="panelsStayOpen-collapseOne1" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingOne1">
      <div className="table-responsive m-5">
        <table class="table table-bordered mt-3 mb-3 block">
          <tr><th>Sl. No.</th><th>Title of the Thesis</th><th>Name of the Scholar</th><th>Name of the Supervisor</th><th>Month and Year if the Viva-voce conducted</th></tr>
        </table>
      </div>
    </div>
  </div>)
}
export default Mphil;