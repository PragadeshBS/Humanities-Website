import Headings from "../headings";
const Training=()=>{
    return (
        <div class="accordion-item">
          <Headings data={"Training Programmes, Short term courses and Workshop attended by the Faculty members in other Institutions"} id={"panelsStayOpen-headingTwo9"} target={"#panelsStayOpen-collapseTwo9"} aria={"panelsStayOpen-collapseTwo9"}/>  
          <div id="panelsStayOpen-collapseTwo9" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo9">
            <div className="table-responsive m-5">
              <table class="table table-bordered mt-3 mb-3 block">
                <tr><th>Sl. No.</th><th>Name of the Faculty and Designation</th><th>Date</th><th>Title of the Programme attended</th><th>Venue</th></tr>
              </table>
            </div>
          </div>
        </div>)
}
export default Training;