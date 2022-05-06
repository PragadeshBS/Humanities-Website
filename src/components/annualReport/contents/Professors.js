import Topheading from "../topheading";
const Professors=()=>{
    return (
        <div class="accordion-item nesteditem">
              <Topheading data={"Professors, Associate Professors, Assistant Professors and their Ph.D. Specialization"}/>
              <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                <div className="table-responsive m-5">
                  <table class="table table-bordered mt-3 mb-3 block">
                    <tr><th>Sl No</th><th>Name of the faculty</th><th>Designation</th><th>Email</th><th>Field of spectification</th></tr>
                    <tr><td>1</td><td>Dr.V.Ponnusamy</td><td>Professor</td><td>vps@annauniv.edu,ponnu@mitindia.edu</td><td>Luminescence,
                      Radioactivity,Applied
                      spectroscopy</td></tr>
                  </table>
                </div>
              </div>
        </div>
    )
}
export default Professors;