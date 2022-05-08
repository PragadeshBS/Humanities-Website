import Headings from "../headings";
const Conference = () => {
  return (
    <div className="accordion-item">
      <Headings
        data={
          "Conferences / Seminars / Symposiumconducted by the Department / Centre / Institute"
        }
        id={"panelsStayOpen-headingThree10"}
        target={"#panelsStayOpen-collapseThree10"}
        aria={"panelsStayOpen-collapseThree10"}
      />
      <div
        id="panelsStayOpen-collapseThree10"
        className="accordion-collapse collapse"
        aria-labelledby="panelsStayOpen-headingThree10"
      >
        <div className="table-responsive m-5">
          <h3 id="title">CONFERENCES</h3>
          <table className="table table-bordered mt-3 mb-5 block">
            <thead>
              <tr>
                <th>Sl. No.</th>
                <th>Name of the Conference conducted</th>
                <th>Date</th>
                <th>Number of participants</th>
                <th>Venue</th>
                <th>Sponsoring Agency</th>
              </tr>
            </thead>
          </table>
          <h3 id="title">SEMINARS</h3>
          <table className="table table-bordered mt-3 mb-5 block">
            <thead>
              <tr>
                <th>Sl. No.</th>
                <th>Names of the Seminar conducted</th>
                <th>Date</th>
                <th>Number of participants</th>
                <th>Venue</th>
                <th>Sponsoring Agency</th>
              </tr>
            </thead>
          </table>
          <h3 id="title">SYMPOSIUM</h3>
          <table className="table table-bordered mt-3 mb-5 block">
            <thead>
              <tr>
                <th>Sl. No.</th>
                <th>Names of Symposium conducted</th>
                <th>Date</th>
                <th>Number of participants</th>
                <th>Venue</th>
                <th>Sponsoring Agency</th>
              </tr>
            </thead>
          </table>
        </div>
      </div>
    </div>
  );
};
export default Conference;
