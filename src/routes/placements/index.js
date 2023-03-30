import Title from "../../components/Title";
import placementsData from "../../data/placements/placements";
import { useEffect } from "react";

const Placements = () => {
  useEffect(() => {
    document.title =
      "Placements | Department of Applied Sciences & Humanities, MIT Campus, Anna University";
  }, []);
  return (
    <div className="container">
      <Title text="Placements" />
      <div className="table-responsive mb-3">
        <table className="table table-striped table-bordered table-hover">
          <thead className="table-dark">
            <tr>
              <th>S. No.</th>
              <th>Student Name</th>
              <th>Batch</th>
              <th>Designation</th>
              <th>Institute/Company Name</th>
            </tr>
          </thead>
          <tbody>
            {placementsData.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item.studentName}</td>
                  <td>{item.batch}</td>
                  <td>{item.designation}</td>
                  <td>{item.instituteCompanyName}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Placements;
