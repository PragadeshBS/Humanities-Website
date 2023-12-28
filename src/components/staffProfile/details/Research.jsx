const Research = ({data}) => {
  return (
    <div id="research" className="mb-5">
      <h1>Research Guidance</h1>
      <div className="border border-2 p-3 border-rounded rounded-3 profile-box">
        <ul>
          {data.map((r, idx) => {
            return <li className="my-2" key={idx}>{r}</li>;
          })}
        </ul>
      </div>
    </div>
  )
}
export default Research