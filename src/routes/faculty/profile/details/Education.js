const Education = ({ eduData }) => {
  return (
    <div id="education" className="mb-5">
      <h1>Educational Qualification</h1>
      <div className="border border-2 p-3 border-rounded rounded-3 profile-box">
        <div className="my-2">
          <span className="h4 px-3">UG</span>
          {eduData.ug} {eduData.ugBranch} {eduData.ugCollege}
        </div>
        <div className="my-2">
          <span className="h4 px-3">PG</span>
          {eduData.pg} {eduData.pgBranch} {eduData.pgCollege}
        </div>
        {eduData.phdSpecialisation && (
          <div className="my-2">
            <span className="h4 px-3">PhD</span> {eduData.phdSpecialisation}{" "}
            {eduData.phdCollege}
          </div>
        )}
        {eduData.others && (
          <div className="my-2">
            <span className="h4 px-3">Others</span> {eduData.others}
          </div>
        )}
      </div>
    </div>
  );
};
export default Education;
