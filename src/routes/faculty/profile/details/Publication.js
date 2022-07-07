const Publication = ({ pub }) => {
  return (
    <div id="publication" className="mb-5">
      <h1>Publications</h1>
      <div className="border border-2 p-3 border-rounded rounded-3 profile-box">
        {pub.map((p, idx) => {
          return (
            <div key={idx}>
              <h6>
                <a href={p.link} target="_blank">
                  {p.title}
                </a>
              </h6>
              <p className="small text-secondary">{p.people}</p>
              <p>{p.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Publication;
