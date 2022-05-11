import CardItem from "./CardItem";
import "./cardStyles/CardContent.css";
function NonTeachingCardContent({ content }) {
  var staff = content;
  return (
    <div className="card-row">
      <div className="card-content p-3">
        <div className="card-content h4 fw-bold">{staff.name}</div>
        <div className="card-content h6">{staff.designation}</div>
        <hr></hr>
        <div>
          <span className="fa fa-phone icon"></span>
          <span className="card-content small">044-2251{staff.extnNo}</span>
        </div>
      </div>
    </div>
  );
}
export default NonTeachingCardContent;
