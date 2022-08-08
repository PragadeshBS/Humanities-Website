const Experience = ({ expData }) => {
  return (
    <div id="experience" className="mb-5">
      <h1>Experience</h1>
      <div className="border border-2 p-3 border-rounded rounded-3 profile-box">
        <ul>
          {expData.map((exp, idx) => {
            const expDataArr = exp.split("-");
            return (
              <li className="my-2" key={idx}>
                <div className="my-1">
                  {expDataArr[0]}-{expDataArr[1]}
                </div>
                <div className="my-1">{expDataArr[2]}</div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
export default Experience;
