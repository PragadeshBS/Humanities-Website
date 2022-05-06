import Headings from "../headings";
const TrainingConducted=()=>{
    return (
    <div class="accordion-item">
    <Headings data={"Training Programmes/Short Term Courses/Workshop Conducted"} id={"panelsStayOpen-headingTwo8"} target={"#panelsStayOpen-collapseOne8"} aria={"panelsStayOpen-collapseOne8"}/>
      <div id="panelsStayOpen-collapseOne8" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo8">
        <div className="table-responsive m-5">
          <h3 id="title">TRAINING PROGRAMMES</h3>
          <table class="table table-bordered mt-3 mb-5">
            <tr><th>Sl. No.</th><th>Title of the Training Programme</th><th>Date</th><th>Number of participants</th><th>Name of the Co-ordinator</th><th>Sponsoring Agency</th></tr>
          </table>
          <h3 id="title">SHORT TERM COURSES</h3>
          <table class="table table-bordered mt-3 mb-5">
            <tr><th>Sl. No.</th><th>Title of the Short Term Course</th><th>Date</th><th>Number of participants</th><th>Name of the Co-ordinator</th><th>Sponsoring Agency</th></tr>
          </table>
          <h3 id="title">WORKSHOP</h3>
          <table class="table table-bordered mt-3 mb-5">
            <tr><th>Sl. No.</th><th>Title of the Workshop</th><th>Date</th><th>Number of participants</th><th>Name of the Co-ordinator</th><th>Sponsoring Agency</th></tr>
            <tr><td>1</td><td>“Research Oriented 2
              day FDP on Essentials of
              SEM Analysis”</td><td>31st Jan and
                01st Feb 2020
              </td><td></td><td>Dr.V.
                Ponnusamy
              </td><td> Anna
                University</td></tr>
          </table>
        </div>
      </div>
    </div>)
}
export default TrainingConducted;