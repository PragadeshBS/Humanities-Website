const Education = ({ eduData }) => {
  return (
    <div id="education" className="mb-5">
      <h1>Educational Qualification</h1>
      <div className="border border-2 p-3 border-rounded rounded-3 profile-box">
        <div className="my-2 row align-items-center">
          <div className="col-md-2 h4 px-3">UG</div>
          <div className="col-md-10">
            {eduData.ug} {eduData.ugBranch} {eduData.ugCollege}
          </div>
        </div>
        <div className="my-2 row align-items-center">
          <div className="col-md-2 h4 px-3">PG</div>
          <div className="col-md-10">
            {eduData.pg} {eduData.pgBranch} {eduData.pgCollege}
          </div>
        </div>
        {eduData.phdSpecialisation && (
          <div className="my-2 row align-items-center">
            <div className="col-md-2 h4 px-3">PhD</div>
            <div className="col-md-10">
              {eduData.phdSpecialisation} {eduData.phdCollege}
            </div>
          </div>
        )}
        {eduData.others && (
          <div className="my-2 row align-items-center">
            <div className="col-md-2 h4 px-3">Others</div>
            <div className="col-md-10">

            {eduData.others}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default Education;
