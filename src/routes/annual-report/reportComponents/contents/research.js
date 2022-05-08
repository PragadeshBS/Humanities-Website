import Headings from "../headings";
const Research = () => {
  return (
    <div className="accordion-item nesteditem">
      <Headings
        data={"Research"}
        id={"panelsStayOpen-headingTwo14"}
        target={"#panelsStayOpen-collapseOne14"}
        aria={"panelsStayOpen-collapseOne14"}
      />
      <div
        id="panelsStayOpen-collapseOne14"
        className="accordion-collapse collapse"
        aria-labelledby="panelsStayOpen-headingTwo14"
      >
        <div className="table-responsive m-5">
          <h1>Research Paper Presentation</h1>
          <h3 id="title">
            In National Conferences / Seminars / Symposium / Workshop{" "}
          </h3>
          <table className="table table-bordered mt-3 mb-3 block">
            <thead>
              <tr>
                <th>Sl No</th>
                <th>Facuilty Nam and Designatione</th>
                <th>Title of the Research Paper Presented</th>
                <th>Name of the Conference and Venue</th>
                <th>Date</th>
              </tr>
            </thead>
          </table>
          <h3 id="title">
            In International Conferences / Seminars / Symposium / Workshop{" "}
          </h3>
          <table className="table table-bordered mt-3 mb-3 block">
            <thead>
              <tr>
                <th>Sl No</th>
                <th>Facuilty Nam and Designatione</th>
                <th>Title of the Research Paper Presented</th>
                <th>Name of the Conference and Venue</th>
                <th>Date</th>
              </tr>
            </thead>
          </table>
        </div>
      </div>
    </div>
  );
};
export default Research;
