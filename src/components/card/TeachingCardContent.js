import { useNavigate } from "react-router-dom";
import "./cardStyles/CardContent.css";
function TeachingCardContent({ content }) {
  let staff = content;
  let navigate = useNavigate();
  const handleClick = (url) => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    navigate(url);
  };
  return (
    <div className="card-row">
      {staff.detailUrl && (
        <div id="profile-expand">
          <span
            style={{ cursor: "pointer", fontSize: "1.3rem" }}
            onClick={() => handleClick(staff.detailUrl)}
          >
            <i className="bi bi-chevron-right"></i>
          </span>
        </div>
      )}
      <div className="card-content p-3">
        <div className="card-content h4 fw-bold">{staff.name}</div>
        <div className="card-content h6">{staff.designation}</div>
        <hr></hr>
        {staff.areaOfInterest !== "" && (
          <div>
            <span className="fa fa-star icon"></span>
            <span className="card-content h6">{staff.areaOfInterest}</span>
          </div>
        )}
        <div>
          <span className="fa fa-envelope icon"></span>
          <span className="card-content h6">{staff.email}</span>
        </div>
        <div>
          <span className="fa fa-phone icon"></span>
          {String(staff.extnNo).length === 4 ? (
            <span className="card-content h6">044 - 2251 {staff.extnNo}</span>
          ) : String(staff.extnNo).length === 8 ? (
            <span className="card-content h6">044 - {staff.extnNo}</span>
          ) : (
            <span className="card-content h6">{staff.extnNo}</span>
          )}
        </div>
      </div>
    </div>
  );
}
export default TeachingCardContent;
