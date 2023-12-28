const Conference = ({ attended, presented }) => {
  return (
    <div id="conference" className="mb-5">
      <h1>Conferences</h1>
      <div className="border border-2 p-3 border-rounded rounded-3 profile-box">
        {attended && (
          <div>
            <h4>Conferences attended</h4>
            <ol>
              {attended.map((conf, idx) => {
                return (
                  <li key={idx}>
                    <div className="h6">
                      {conf.title}
                      <span className="small text-secondary ps-2">
                        {conf.period && "- " + conf.period}
                      </span>
                    </div>
                  </li>
                );
              })}
            </ol>
          </div>
        )}
        {presented && (
          <div>
            <h4>Conferences Presented</h4>
            <ol>
              {presented.map((conf, idx) => {
                return (
                  <li key={idx}>
                    <div className="h6">
                      {conf.title} -
                      <span className="small text-secondary ps-2">
                        {conf.period}
                      </span>
                    </div>
                  </li>
                );
              })}
            </ol>
          </div>
        )}
      </div>
    </div>
  );
};
export default Conference;
