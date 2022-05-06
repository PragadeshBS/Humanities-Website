import Headings from "../headings";
const Books=()=>{
    return (
    <div class="accordion-item nesteditem">
    <Headings data={"Books written by the Faculty members"} id={"panelsStayOpen-headingTwo16"} target={"#panelsStayOpen-collapseOne16"} aria={"panelsStayOpen-collapseOne16"}/>  
    <div id="panelsStayOpen-collapseOne16" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo16">
      <div className="table-responsive m-5">
        <table class="table table-bordered mt-3 mb-3 block">
          <tr><th>Sl No</th><th>Name of the Book</th><th>Name of the Faculty</th><th>Name of the Publisher</th><th>Month and Year</th></tr>
        </table>
      </div>
    </div>
  </div>)
}
export default Books;