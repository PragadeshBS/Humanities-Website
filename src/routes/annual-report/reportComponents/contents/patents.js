import Headings from "../headings";
const Patents = () => {
  return (
    <div className="accordion-item nesteditem">
      <Headings
        data={"Patents Obtained"}
        id={"panelsStayOpen-headingTwo17"}
        target={"#panelsStayOpen-collapseOne17"}
        aria={"panelsStayOpen-collapseOne17"}
      />
      <div
        id="panelsStayOpen-collapseOne17"
        className="accordion-collapse collapse"
        aria-labelledby="panelsStayOpen-headingTwo17"
      >
        <div className="table-responsive m-5">
          <table className="table table-bordered mt-3 mb-3 block">
            <thead>
              <tr>
                <th>Sl No</th>
                <th>Title of the Patent</th>
                <th>Inventors</th>
                <th>Patent Number</th>
                <th>Patent Organization</th>
                <th>Month and Year</th>
              </tr>
            </thead>
          </table>
        </div>
      </div>
    </div>
  );
};
export default Patents;
