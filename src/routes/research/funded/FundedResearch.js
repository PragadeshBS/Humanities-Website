import Title from "../../../components/Title";
import fundedResearchData from "../../../data/research/funded";
import { useEffect } from "react";

const FundedResearch = () => {
  useEffect(() => {
    document.title =
      "Funded Research Projects | Department of Applied Sciences & Humanities, MIT Campus, Anna University";
  }, []);
  return (
    <div>
      <Title text="Funded Research Projects" />
      <div className="table-responsive">
        <table className="table table-striped table-bordered table-hover">
          <thead className="table-dark">
            <tr>
              <th>S. No.</th>
              <th>Principal Investigator</th>
              <th>Title</th>
              <th>Sponsoring Agency</th>
              <th>Duration</th>
              <th>Year of completion</th>
            </tr>
          </thead>
          <tbody>
            {fundedResearchData.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item.principalInvestigator}</td>
                  <td>{item.title}</td>
                  <td>{item.sponsoringAgency}</td>
                  <td>{item.duration}</td>
                  <td>{item.yearOfCompletion}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FundedResearch;
