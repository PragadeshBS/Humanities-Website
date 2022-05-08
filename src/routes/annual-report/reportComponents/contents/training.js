import Headings from "../headings";
const Training = () => {
  return (
    <div className="accordion-item">
      <Headings
        data={
          "Training Programmes, Short term courses and Workshop attended by the Faculty members in other Institutions"
        }
        id={"panelsStayOpen-headingTwo9"}
        target={"#panelsStayOpen-collapseTwo9"}
        aria={"panelsStayOpen-collapseTwo9"}
      />
      <div
        id="panelsStayOpen-collapseTwo9"
        className="accordion-collapse collapse"
        aria-labelledby="panelsStayOpen-headingTwo9"
      >
        <div className="table-responsive m-5">
          <table className="table table-bordered mt-3 mb-3 block">
            <thead>
              <tr>
                <th>Sl. No.</th>
                <th>Name of the Faculty and Designation</th>
                <th>Date</th>
                <th>Title of the Programme attended</th>
                <th>Venue</th>
              </tr>
            </thead>
          </table>
        </div>
      </div>
    </div>
  );
};
export default Training;
