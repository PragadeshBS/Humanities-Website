const Education = ({ eduData }) => {
  return (
    <div id="education" className="mb-5">
      <h1>Educational Qualification</h1>
      <div className="border border-2 p-3 border-rounded rounded-3 profile-box d-flex flex-row">
        <div className="my-2 me-3 d-flex flex-column">
          <span>UG</span>
          <span>PG</span>
          <span>PhD</span>
          <span>Others</span>
        </div>
        <div className="my-2 d-flex flex-column">
          <span>
            {eduData.ug} {eduData.ugBranch} {eduData.ugCollege}
          </span>
          <span>
            {eduData.pg} {eduData.pgBranch} {eduData.pgCollege}
          </span>
          <span>
            {eduData.phdSpecialisation} {eduData.phdCollege}
          </span>
          <span> {eduData.others}</span>
        </div>
      </div>
    </div>
  );
};
export default Education;
