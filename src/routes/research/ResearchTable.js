const ResearchTable = ({ data }) => {
  return (
    <div className="mt-3 table-responsive">
      <table className="table table-hover table-striped table-bordered">
        <thead>
          <tr>
            <th>S. No.</th>
            <th>Discipline</th>
            <th>Research guide</th>
            <th>Scholar name</th>
            <th>Title</th>
            <th>Sponsoring agency (if any)</th>
            <th>Year of commencement</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.discipline}</td>
                <td>{item.researchGuide}</td>
                <td>{item.scholarName}</td>
                <td>{item.title}</td>
                <td>{item.sponsoringAgency}</td>
                <td>{item.yearOfCommencement}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ResearchTable;
