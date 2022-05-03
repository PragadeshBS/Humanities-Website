const StudentTable = ({ students }) => {
  return (
    <table className="table table-striped">
      <thead>
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
              <td></td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default StudentTable;
