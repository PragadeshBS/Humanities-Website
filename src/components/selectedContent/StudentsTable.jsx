const StudentTable = ({ students }) => {
  return (
    <div className="table-responsive">
      <table className="table table-striped table-bordered table-hover">
        <thead className="table-dark">
          <tr>
            <th>S.No.</th>
            <th>Register No.</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{student.reg}</td>
                <td>{student.name}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default StudentTable;
