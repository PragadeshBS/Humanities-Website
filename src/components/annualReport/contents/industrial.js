import Headings from "../headings";
const Industrial=()=>{
    return (
    <div class="accordion-item nesteditem">
    <Headings data={"Industrial Consultancy and Testing work undertaken"} id={"panelsStayOpen-headingThree"} target={"#panelsStayOpen-collapseThree"} aria={"panelsStayOpen-collapseThree"}/>
    <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
      <div className="table-responsive m-5">
        <h3 id="title">CONSULTANCY</h3>
        <table class="table table-bordered mt-3 mb-5 block">
          <tr><th>Sl. No.</th><th>Title of the Consultancy</th><th>Name of the Co-ordinator</th><th>Amount(Rs. in lakh)</th><th>Sponsoring Agency</th></tr>
        </table>
        <h3 id="title">TESTING WORK</h3>
        <table class="table table-bordered mt-3 mb-5 block">
          <tr><th>Sl. No.</th><th>Title of Testing work</th><th>Name of the Co-ordinator</th><th>Amount(Rs. in lakh)</th><th>Sponsoring Agency</th></tr>
        </table>
      </div>
    </div>
  </div>)
}
export default Industrial;