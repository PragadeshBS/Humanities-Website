import "./annual.css";
import { useEffect } from "react";
import annualReport from "./Applied_Science_Report_2019-2020.pdf";
const AnnualReport = () => {
  useEffect(() => {
    document.title =
      "Annual Report | Department of Applied Sciences & Humanities, MIT Campus, Anna University";
  }, []);
  return (
    <div>
      <div className="container mt-5 mb-5">
        <div className="row">
          <div className="col-10">
            <h1 className="display">ANNUAL REPORT</h1>
            <h3 id="title"> FOR THE YEAR 2019-2020 – MARCH TO FEBRUARY</h3>
          </div>
          <div className="col-2">
            <a href={annualReport} download>
              <button class="btn btn-outline-primary" type="submit">
                <i class="fa fa-download" aria-hidden="true"></i>
              </button>
            </a>
          </div>
          <div class="accordion" id="accordionPanelsStayOpenExample">
            <div class="accordion-item nesteditem">
              <h2 class="accordion-header" id="panelsStayOpen-headingOne">
                <button
                  class="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#panelsStayOpen-collapseOne"
                  aria-expanded="true"
                  aria-controls="panelsStayOpen-collapseOne"
                >
                  Professors, Associate Professors, Assistant Professors and
                  their Ph.D. Specialization
                </button>
              </h2>
              <div
                id="panelsStayOpen-collapseOne"
                class="accordion-collapse collapse show"
                aria-labelledby="panelsStayOpen-headingOne"
              >
                <div className="table-responsive m-5">
                  <table class="table table-bordered mt-3 mb-3">
                    <tr>
                      <th>Sl No</th>
                      <th>Name of the faculty</th>
                      <th>Designation</th>
                      <th>Email</th>
                      <th>Field of spectification</th>
                    </tr>
                    <tr>
                      <td>1</td>
                      <td>Dr.V.Ponnusamy</td>
                      <td>Professor</td>
                      <td>vps@annauniv.edu,ponnu@mitindia.edu</td>
                      <td>Luminescence, Radioactivity,Ap plied spectroscopy</td>
                    </tr>
                  </table>
                </div>
              </div>
            </div>
            <div class="accordion-item nesteditem">
              <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#panelsStayOpen-collapseTwo"
                  aria-expanded="false"
                  aria-controls="panelsStayOpen-collapseTwo"
                >
                  Degrees Awarded
                </button>
              </h2>
              <div
                id="panelsStayOpen-collapseTwo"
                class="accordion-collapse collapse"
                aria-labelledby="panelsStayOpen-headingTwo"
              >
                <div>
                  <div
                    class="accordion m-5"
                    id="accordionPanelsStayOpenExample"
                  >
                    <div class="accordion-item">
                      <h2
                        class="accordion-header"
                        id="panelsStayOpen-headingOne1"
                      >
                        <button
                          class="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#panelsStayOpen-collapseOne1"
                          aria-expanded="false"
                          aria-controls="panelsStayOpen-collapseOne1"
                        >
                          M.Phil
                        </button>
                      </h2>
                      <div
                        id="panelsStayOpen-collapseOne1"
                        class="accordion-collapse collapse"
                        aria-labelledby="panelsStayOpen-headingOne1"
                      >
                        <div className="table-responsive m-5">
                          <table class="table table-bordered mt-3 mb-3">
                            <tr>
                              <th>Sl. No.</th>
                              <th>Title of the Thesis</th>
                              <th>Name of the Scholar</th>
                              <th>Name of the Supervisor</th>
                              <th>Month and Year if the Viva-voce conducted</th>
                            </tr>
                          </table>
                        </div>
                      </div>
                    </div>
                    <div class="accordion-item">
                      <h2
                        class="accordion-header"
                        id="panelsStayOpen-headingTwo2"
                      >
                        <button
                          class="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#panelsStayOpen-collapseTwo2"
                          aria-expanded="false"
                          aria-controls="panelsStayOpen-collapseTwo2"
                        >
                          M.E./M.Tech./M.Arch./M.Plan./MBA / MCA
                        </button>
                      </h2>
                      <div
                        id="panelsStayOpen-collapseTwo2"
                        class="accordion-collapse collapse"
                        aria-labelledby="panelsStayOpen-headingTwo2"
                      >
                        <div className="table-responsive m-5">
                          <table class="table table-bordered mt-3 mb-3">
                            <tr>
                              <th>Sl. No.</th>
                              <th>Title of the Thesis</th>
                              <th>Name of the Scholar</th>
                              <th>Name of the Supervisor</th>
                              <th>Month and Year if the Viva-voce conducted</th>
                            </tr>
                          </table>
                        </div>
                      </div>
                    </div>
                    <div class="accordion-item">
                      <h2
                        class="accordion-header"
                        id="panelsStayOpen-headingThree3"
                      >
                        <button
                          class="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#panelsStayOpen-collapseThree3"
                          aria-expanded="false"
                          aria-controls="panelsStayOpen-collapseThree3"
                        >
                          M.Sc. (2 years)
                        </button>
                      </h2>
                      <div
                        id="panelsStayOpen-collapseThree3"
                        class="accordion-collapse collapse"
                        aria-labelledby="panelsStayOpen-headingThree3"
                      >
                        <div className="table-responsive m-5">
                          <table class="table table-bordered mt-3 mb-3">
                            <tr>
                              <th>Sl. No.</th>
                              <th>Title of the Thesis</th>
                              <th>Name of the Scholar</th>
                              <th>Name of the Supervisor</th>
                              <th>Month and Year if the Viva-voce conducted</th>
                            </tr>
                          </table>
                        </div>
                      </div>
                    </div>
                    <div class="accordion-item">
                      <h2
                        class="accordion-header"
                        id="panelsStayOpen-headingThree4"
                      >
                        <button
                          class="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#panelsStayOpen-collapseThree4"
                          aria-expanded="false"
                          aria-controls="panelsStayOpen-collapseThree4"
                        >
                          M.Sc. (5 years)
                        </button>
                      </h2>
                      <div
                        id="panelsStayOpen-collapseThree4"
                        class="accordion-collapse collapse"
                        aria-labelledby="panelsStayOpen-headingThree4"
                      >
                        <div className="table-responsive m-5">
                          <table class="table table-bordered mt-3 mb-3">
                            <tr>
                              <th>Sl. No.</th>
                              <th>Title of the Thesis</th>
                              <th>Name of the Scholar</th>
                              <th>Name of the Supervisor</th>
                              <th>Month and Year if the Viva-voce conducted</th>
                            </tr>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="accordion-item nesteditem">
              <h2 class="accordion-header" id="panelsStayOpen-headingThree6">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#panelsStayOpen-collapseThree6"
                  aria-expanded="false"
                  aria-controls="panelsStayOpen-collapseThree6"
                >
                  Sponsored Research Projects Sanctioned
                </button>
              </h2>
              <div
                id="panelsStayOpen-collapseThree6"
                class="accordion-collapse collapse"
                aria-labelledby="panelsStayOpen-headingThree6"
              >
                <div className="table-responsive m-5">
                  <table class="table table-bordered mt-3 mb-3">
                    <tr>
                      <th>Sl. No.</th>
                      <th>Name of the Project</th>
                      <th>Name of the Co-ordinator</th>
                      <th>Amount(Rs. in lakh)</th>
                      <th>Sponsoring Agency</th>
                    </tr>
                  </table>
                </div>
              </div>
            </div>
            <div class="accordion-item nesteditem">
              <h2 class="accordion-header" id="panelsStayOpen-headingThree">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#panelsStayOpen-collapseThree"
                  aria-expanded="false"
                  aria-controls="panelsStayOpen-collapseThree"
                >
                  Industrial Consultancy and Testing work undertaken
                </button>
              </h2>
              <div
                id="panelsStayOpen-collapseThree"
                class="accordion-collapse collapse"
                aria-labelledby="panelsStayOpen-headingThree"
              >
                <div className="table-responsive m-5">
                  <h3 id="title">CONSULTANCY</h3>
                  <table class="table table-bordered mt-3 mb-5">
                    <tr>
                      <th>Sl. No.</th>
                      <th>Title of the Consultancy</th>
                      <th>Name of the Co-ordinator</th>
                      <th>Amount(Rs. in lakh)</th>
                      <th>Sponsoring Agency</th>
                    </tr>
                  </table>
                  <h3 id="title">TESTING WORK</h3>
                  <table class="table table-bordered mt-3 mb-5">
                    <tr>
                      <th>Sl. No.</th>
                      <th>Title of Testing work</th>
                      <th>Name of the Co-ordinator</th>
                      <th>Amount(Rs. in lakh)</th>
                      <th>Sponsoring Agency</th>
                    </tr>
                  </table>
                </div>
              </div>
            </div>
            <div class="accordion-item nesteditem">
              <h2 class="accordion-header" id="panelsStayOpen-headingThree7">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#panelsStayOpen-collapseThree7"
                  aria-expanded="false"
                  aria-controls="panelsStayOpen-collapseThree7"
                >
                  Continuing Education Programmes
                </button>
              </h2>
              <div
                id="panelsStayOpen-collapseThree7"
                class="accordion-collapse collapse"
                aria-labelledby="panelsStayOpen-headingThree7"
              >
                <div class="accordion m-5" id="accordionPanelsStayOpenExample">
                  <div class="accordion-item">
                    <h2
                      class="accordion-header"
                      id="panelsStayOpen-headingTwo8"
                    >
                      <button
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#panelsStayOpen-collapseOne8"
                        aria-expanded="false"
                        aria-controls="panelsStayOpen-collapseOne8"
                      >
                        Training Programmes/Short Term Courses/Workshop
                        Conducted
                      </button>
                    </h2>
                    <div
                      id="panelsStayOpen-collapseOne8"
                      class="accordion-collapse collapse"
                      aria-labelledby="panelsStayOpen-headingTwo8"
                    >
                      <div className="table-responsive m-5">
                        <h3 id="title">TRAINING PROGRAMMES</h3>
                        <table class="table table-bordered mt-3 mb-5">
                          <tr>
                            <th>Sl. No.</th>
                            <th>Title of the Training Programme</th>
                            <th>Date</th>
                            <th>Number of participants</th>
                            <th>Name of the Co-ordinator</th>
                            <th>Sponsoring Agency</th>
                          </tr>
                        </table>
                        <h3 id="title">SHORT TERM COURSES</h3>
                        <table class="table table-bordered mt-3 mb-5">
                          <tr>
                            <th>Sl. No.</th>
                            <th>Title of the Short Term Course</th>
                            <th>Date</th>
                            <th>Number of participants</th>
                            <th>Name of the Co-ordinator</th>
                            <th>Sponsoring Agency</th>
                          </tr>
                        </table>
                        <h3 id="title">WORKSHOP</h3>
                        <table class="table table-bordered mt-3 mb-5">
                          <tr>
                            <th>Sl. No.</th>
                            <th>Title of the Workshop</th>
                            <th>Date</th>
                            <th>Number of participants</th>
                            <th>Name of the Co-ordinator</th>
                            <th>Sponsoring Agency</th>
                          </tr>
                          <tr>
                            <td>1</td>
                            <td>
                              “Research Oriented 2 day FDP on Essentials of SEM
                              Analysis”
                            </td>
                            <td>31st Jan and 01st Feb 2020</td>
                            <td></td>
                            <td>Dr.V. Ponnusamy</td>
                            <td> Anna University</td>
                          </tr>
                        </table>
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <h2
                      class="accordion-header"
                      id="panelsStayOpen-headingTwo9"
                    >
                      <button
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#panelsStayOpen-collapseTwo9"
                        aria-expanded="false"
                        aria-controls="panelsStayOpen-collapseTwo9"
                      >
                        Training Programmes, Short term courses and Workshop
                        attended by the Faculty members in other Institutions
                      </button>
                    </h2>
                    <div
                      id="panelsStayOpen-collapseTwo9"
                      class="accordion-collapse collapse"
                      aria-labelledby="panelsStayOpen-headingTwo9"
                    >
                      <div className="table-responsive m-5">
                        <table class="table table-bordered mt-3 mb-3">
                          <tr>
                            <th>Sl. No.</th>
                            <th>Name of the Faculty and Designation</th>
                            <th>Date</th>
                            <th>Title of the Programme attended</th>
                            <th>Venue</th>
                          </tr>
                        </table>
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <h2
                      class="accordion-header"
                      id="panelsStayOpen-headingThree10"
                    >
                      <button
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#panelsStayOpen-collapseThree10"
                        aria-expanded="false"
                        aria-controls="panelsStayOpen-collapseThree10"
                      >
                        Conferences / Seminars / Symposiumconducted by the
                        Department / Centre / Institute
                      </button>
                    </h2>
                    <div
                      id="panelsStayOpen-collapseThree10"
                      class="accordion-collapse collapse"
                      aria-labelledby="panelsStayOpen-headingThree10"
                    >
                      <div className="table-responsive m-5">
                        <h3 id="title">CONFERENCES</h3>
                        <table class="table table-bordered mt-3 mb-5">
                          <tr>
                            <th>Sl. No.</th>
                            <th>Name of the Conference conducted</th>
                            <th>Date</th>
                            <th>Number of participants</th>
                            <th>Venue</th>
                            <th>Sponsoring Agency</th>
                          </tr>
                        </table>
                        <h3 id="title">SEMINARS</h3>
                        <table class="table table-bordered mt-3 mb-5">
                          <tr>
                            <th>Sl. No.</th>
                            <th>Names of the Seminar conducted</th>
                            <th>Date</th>
                            <th>Number of participants</th>
                            <th>Venue</th>
                            <th>Sponsoring Agency</th>
                          </tr>
                        </table>
                        <h3 id="title">SYMPOSIUM</h3>
                        <table class="table table-bordered mt-3 mb-5">
                          <tr>
                            <th>Sl. No.</th>
                            <th>Names of Symposium conducted</th>
                            <th>Date</th>
                            <th>Number of participants</th>
                            <th>Venue</th>
                            <th>Sponsoring Agency</th>
                          </tr>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="accordion-item nesteditem">
              <h2 class="accordion-header" id="panelsStayOpen-headingTwo11">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#panelsStayOpen-collapseOne11"
                  aria-expanded="false"
                  aria-controls="panelsStayOpen-collapseOne11"
                >
                  Faculty Development
                </button>
              </h2>
              <div
                id="panelsStayOpen-collapseOne11"
                class="accordion-collapse collapse"
                aria-labelledby="panelsStayOpen-headingTwo11"
              >
                <div className="table-responsive m-5">
                  <h1>
                    {" "}
                    Conferences / Seminars / Symposium attended by the Faculty
                    Members of Anna University
                  </h1>
                  <h3 id="title">At National Level(within India)</h3>
                  <table class="table table-bordered mt-3 mb-5">
                    <tr>
                      <th>Sl. No.</th>
                      <th>Faculty name and Designation</th>
                      <th>
                        Names of the conference/seminar/symposium attended
                      </th>
                      <th>date</th>
                      <th>Address of organized Institute</th>
                    </tr>
                  </table>
                  <h3 id="title">At International Level(within India)</h3>
                  <table class="table table-bordered mt-3 mb-5">
                    <tr>
                      <th>Sl. No.</th>
                      <th>Faculty name and Designation</th>
                      <th>
                        Names of the conference/seminar/symposium attended
                      </th>
                      <th>date</th>
                      <th>Address of organized Institute</th>
                    </tr>
                    <tr>
                      <td>1</td>
                      <td>Dr.V Ponnusamy Professor </td>
                      <td>
                        Synthesis and photoluminescence of Europium Doped Sodium
                        zirconate silicate Phosphor
                      </td>
                      <td>20-21 February 2020</td>
                      <td>
                        2nd International Conference on Materials for Energy and
                        Environment (ICMEE-2020) at Loyola Institute of Frontier
                        Energy (LIFE), Loyola College (Autonomous),
                      </td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Dr.V Ponnusamy Professor </td>
                      <td>
                        Photoluminescence properties of Eu3+ Activated SrY2O4
                        Red emitting Phosphor For Solid State Lighting
                        Application
                      </td>
                      <td>20-21 February 2020</td>
                      <td>
                        2nd International Conference on Materials for Energy and
                        Environment (ICMEE-2020) at Loyola Institute of Frontier
                        Energy (LIFE), Loyola College (Autonomous), Chennai-34
                      </td>
                    </tr>
                  </table>
                  <h3 id="title">At International Level(outside India)</h3>
                  <table class="table table-bordered mt-3 mb-5">
                    <tr>
                      <th>Sl. No.</th>
                      <th>Faculty name and Designation</th>
                      <th>Names of the programme attended</th>
                      <th>Name of the country visited</th>
                      <th>Name of travel grant used</th>
                      <th>Date</th>
                    </tr>
                  </table>
                  <h3 id="title">
                    Lectures delivered by the Anna University Faculty members at
                    other Institute
                  </h3>
                  <table class="table table-bordered mt-3 mb-5">
                    <tr>
                      <th>Sl. No.</th>
                      <th>Faculty name and Designation</th>
                      <th>
                        Names of the conference/seminar/symposium attended
                      </th>
                      <th>date</th>
                      <th>Address of organized Institute</th>
                    </tr>
                  </table>
                  <h3 id="title">
                    Honours / Awards received from State / National /
                    International bodies by the AU Faculty Members
                  </h3>
                  <table class="table table-bordered mt-3 mb-5">
                    <tr>
                      <th>Sl. No.</th>
                      <th>Name of the Faculty</th>
                      <th>Designation</th>
                      <th>Name of the Honour / Award</th>
                      <th>
                        Name of the institute/organization issued the Honours /
                        Awards
                      </th>
                    </tr>
                  </table>
                </div>
              </div>
            </div>
            <div class="accordion-item nesteditem">
              <h2 class="accordion-header" id="panelsStayOpen-headingTwo12">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#panelsStayOpen-collapseOne12"
                  aria-expanded="false"
                  aria-controls="panelsStayOpen-collapseOne12"
                >
                  Visitors to the Departments/Centres/Institute other than Anna
                  University Faculty
                </button>
              </h2>
              <div
                id="panelsStayOpen-collapseOne12"
                class="accordion-collapse collapse"
                aria-labelledby="panelsStayOpen-headingTwo12"
              >
                <div className="table-responsive m-5">
                  <table class="table table-bordered mt-3 mb-3">
                    <tr>
                      <th>Sl No</th>
                      <th>Name of the Visitor</th>
                      <th>Designation</th>
                      <th>Address of Office / organization</th>
                      <th>Purpose of Visit</th>
                      <th>Date of Visit</th>
                    </tr>
                  </table>
                </div>
              </div>
            </div>
            <div class="accordion-item nesteditem">
              <h2 class="accordion-header" id="panelsStayOpen-headingTwo12">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#panelsStayOpen-collapseOne13"
                  aria-expanded="false"
                  aria-controls="panelsStayOpen-collapseOne13"
                >
                  New Equipment / Instruments purchased costing above Rs.5.00
                  lakh
                </button>
              </h2>
              <div
                id="panelsStayOpen-collapseOne13"
                class="accordion-collapse collapse"
                aria-labelledby="panelsStayOpen-headingTwo13"
              >
                <div className="table-responsive m-5">
                  <table class="table table-bordered mt-3 mb-3">
                    <tr>
                      <th>Sl No</th>
                      <th>Name of the New Equipment / Instrument purchased</th>
                      <th>
                        Nature of work / function of the equipment / instrument
                      </th>
                      <th>Purchase Cost(Above Rs.5.00 Lakh)</th>
                    </tr>
                  </table>
                </div>
              </div>
            </div>
            <div class="accordion-item nesteditem">
              <h2 class="accordion-header" id="panelsStayOpen-headingTwo14">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#panelsStayOpen-collapseOne14"
                  aria-expanded="false"
                  aria-controls="panelsStayOpen-collapseOne14"
                >
                  Research
                </button>
              </h2>
              <div
                id="panelsStayOpen-collapseOne14"
                class="accordion-collapse collapse"
                aria-labelledby="panelsStayOpen-headingTwo14"
              >
                <div className="table-responsive m-5">
                  <h1>Research Paper Presentation</h1>
                  <h3 id="title">
                    In National Conferences / Seminars / Symposium / Workshop{" "}
                  </h3>
                  <table class="table table-bordered mt-3 mb-3">
                    <tr>
                      <th>Sl No</th>
                      <th>Facuilty Nam and Designatione</th>
                      <th>Title of the Research Paper Presented</th>
                      <th>Name of the Conference and Venue</th>
                      <th>Date</th>
                    </tr>
                  </table>
                  <h3 id="title">
                    In International Conferences / Seminars / Symposium /
                    Workshop{" "}
                  </h3>
                  <table class="table table-bordered mt-3 mb-3">
                    <tr>
                      <th>Sl No</th>
                      <th>Facuilty Nam and Designatione</th>
                      <th>Title of the Research Paper Presented</th>
                      <th>Name of the Conference and Venue</th>
                      <th>Date</th>
                    </tr>
                  </table>
                </div>
              </div>
            </div>
            <div class="accordion-item nesteditem">
              <h2 class="accordion-header" id="panelsStayOpen-headingTwo15">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#panelsStayOpen-collapseOne15"
                  aria-expanded="false"
                  aria-controls="panelsStayOpen-collapseOne15"
                >
                  Journals Published
                </button>
              </h2>
              <div
                id="panelsStayOpen-collapseOne15"
                class="accordion-collapse collapse"
                aria-labelledby="panelsStayOpen-headingTwo15"
              >
                <div className="table-responsive m-5">
                  <h1> Research Papers published</h1>
                  <h3 id="title">In National Journals</h3>
                  <table class="table table-bordered mt-3 mb-3">
                    <tr>
                      <th>Sl No</th>
                      <th>Title</th>
                      <th>Author's Name</th>
                      <th>Name of the Publisher</th>
                      <th>Month and Year</th>
                    </tr>
                  </table>
                  <h3 id="title">In International Journals</h3>
                  <table class="table table-bordered mt-3 mb-3">
                    <tr>
                      <th>Sl No</th>
                      <th>Title</th>
                      <th>Author's Name</th>
                      <th>Name of the Publisher</th>
                      <th>Month and Year</th>
                    </tr>
                    <tr>
                      <td>1</td>
                      <td>
                        A development of new red phosphor based on europium
                        doped as well as substituted Barium Lanthanum Aluminate
                        (BaLaAlO4: Eu3+){" "}
                      </td>
                      <td>A.Azhagiria, V.Ponnusamy,R.Satheesh Kumar</td>
                      <td>
                        ScienceDirect (Elsevier B.V) Optical materials, Volume
                        90, Pages 127-138
                      </td>
                      <td>April 2019</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>
                        Development of novel Na2Mg3Zn2Si12O30:Eu3+red phosphor
                        for white light emitting diodes{" "}
                      </td>
                      <td>G.V.Kanmani, V.Ponnusamy, G.Rajkumar, M.T.Jose.</td>
                      <td>
                        ScienceDirect (Elsevier B.V) Optical materials, Volume
                        96, 109350
                      </td>
                      <td>October 2019</td>
                    </tr>
                  </table>
                </div>
              </div>
            </div>
            <div class="accordion-item nesteditem">
              <h2 class="accordion-header" id="panelsStayOpen-headingTwo16">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#panelsStayOpen-collapseOne16"
                  aria-expanded="false"
                  aria-controls="panelsStayOpen-collapseOne16"
                >
                  Books written by the Faculty members
                </button>
              </h2>
              <div
                id="panelsStayOpen-collapseOne16"
                class="accordion-collapse collapse"
                aria-labelledby="panelsStayOpen-headingTwo16"
              >
                <div className="table-responsive m-5">
                  <table class="table table-bordered mt-3 mb-3">
                    <tr>
                      <th>Sl No</th>
                      <th>Name of the Book</th>
                      <th>Name of the Faculty</th>
                      <th>Name of the Publisher</th>
                      <th>Month and Year</th>
                    </tr>
                  </table>
                </div>
              </div>
            </div>
            <div class="accordion-item nesteditem">
              <h2 class="accordion-header" id="panelsStayOpen-headingTwo17">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#panelsStayOpen-collapseOne17"
                  aria-expanded="false"
                  aria-controls="panelsStayOpen-collapseOne17"
                >
                  Patents obtained
                </button>
              </h2>
              <div
                id="panelsStayOpen-collapseOne17"
                class="accordion-collapse collapse"
                aria-labelledby="panelsStayOpen-headingTwo17"
              >
                <div className="table-responsive m-5">
                  <table class="table table-bordered mt-3 mb-3">
                    <tr>
                      <th>Sl No</th>
                      <th>Title of the Patent</th>
                      <th>Inventors</th>
                      <th>Patent Number</th>
                      <th>Patent Organization</th>
                      <th>Month and Year</th>
                    </tr>
                  </table>
                </div>
              </div>
            </div>
            <div class="accordion-item nesteditem">
              <h2 class="accordion-header" id="panelsStayOpen-headingTwo18">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#panelsStayOpen-collapseOne18"
                  aria-expanded="false"
                  aria-controls="panelsStayOpen-collapseOne18"
                >
                  Achievements
                </button>
              </h2>
              <div
                id="panelsStayOpen-collapseOne18"
                class="accordion-collapse collapse"
                aria-labelledby="panelsStayOpen-headingTwo18"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnnualReport;
