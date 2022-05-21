import "./cardStyles/CardContent.css";
function TeachingCardContent({ content }) {
  let staff = content;
  return (
    <div className="card-row">
      <div className="card-content p-3">
        <div className="card-content h4 fw-bold">{staff.name}</div>
        <div className="card-content h6">{staff.designation}</div>
        <hr></hr>
        {staff.areaOfInterest !== "" && <div>
          <span className="fa fa-star icon"></span>
          <span className="card-content h6">{staff.areaOfInterest}</span>
        </div>}
        <div>
          <span className="fa fa-envelope icon"></span>
          <span className="card-content h6">{staff.email}</span>
        </div>
        <div>
          <span className="fa fa-phone icon"></span>
          <span className="card-content h6">044-2251{staff.extnNo}</span>
        </div>
      </div>
    </div>
  );
}
export default TeachingCardContent;
