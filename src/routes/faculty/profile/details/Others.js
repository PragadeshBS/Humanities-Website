const Others = ({ data }) => {
  return (
    <div id="others" className="mb-5">
      <h1>Other Info</h1>
      <div className="border border-2 p-3 border-rounded rounded-3 profile-box">
        <ul>
          {data.map((r, idx) => {
            return (
              <li className="my-2" key={idx}>
                {r}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
export default Others;
