import Headings from "../headings";
const Journals = () => {
  return (
    <div className="accordion-item nesteditem">
      <Headings
        data={"Journals Published"}
        id={"panelsStayOpen-headingTwo15"}
        target={"#panelsStayOpen-collapseOne15"}
        aria={"panelsStayOpen-collapseOne15"}
      />
      <div
        id="panelsStayOpen-collapseOne15"
        className="accordion-collapse collapse"
        aria-labelledby="panelsStayOpen-headingTwo15"
      >
        <div className="table-responsive m-5">
          <h1> Research Papers published</h1>
          <h3 id="title">In National Journals</h3>
          <table className="table table-bordered mt-3 mb-3 block">
            <thead>
              <tr>
                <th>Sl No</th>
                <th>Title</th>
                <th>Author's Name</th>
                <th>Name of the Publisher</th>
                <th>Month and Year</th>
              </tr>
            </thead>
          </table>
          <h3 id="title">In International Journals</h3>
          <table className="table table-bordered mt-3 mb-3 block">
            <thead>
              <tr>
                <th>Sl No</th>
                <th>Title</th>
                <th>Author's Name</th>
                <th>Name of the Publisher</th>
                <th>Month and Year</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>
                  A development of new red phosphor based on europium doped as
                  well as substituted Barium Lanthanum Aluminate (BaLaAlO4:
                  Eu3+){" "}
                </td>
                <td>A.Azhagiria, V.Ponnusamy,R.Satheesh Kumar</td>
                <td>
                  ScienceDirect (Elsevier B.V) Optical materials, Volume 90,
                  Pages 127-138
                </td>
                <td>April 2019</td>
              </tr>
              <tr>
                <td>2</td>
                <td>
                  Development of novel Na2Mg3Zn2Si12O30:Eu3+red phosphor for
                  white light emitting diodes{" "}
                </td>
                <td>G.V.Kanmani, V.Ponnusamy, G.Rajkumar, M.T.Jose.</td>
                <td>
                  ScienceDirect (Elsevier B.V) Optical materials, Volume 96,
                  109350
                </td>
                <td>October 2019</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
export default Journals;
