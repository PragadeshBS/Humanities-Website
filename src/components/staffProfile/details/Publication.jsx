const Publication = ({ pub }) => {
  return (
    <div id="publication" className="mb-5">
      <h1>Publications</h1>
      <div className="border border-2 p-3 border-rounded rounded-3 profile-box">
        {pub.map((p, idx) => {
          return (
            <div key={idx} className="border-bottom mb-3">
              <h6>
                {p.link ? (
                  <a
                    href={p.link}
                    target={p.link !== "#" ? "_blank" : ""}
                    rel="noreferrer"
                  >
                    {p.title}
                  </a>
                ) : (
                  <p>{p.title}</p>
                )}
              </h6>
              <p className="small text-secondary">
                {p.people} {p.year}
              </p>
              <p>{p.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Publication;
