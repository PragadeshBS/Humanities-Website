import "./cardStyles/CardContent.css";
import {
  FaChevronRight,
  FaExternalLinkAlt,
  FaStar,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";

function TeachingCardContent({ content }) {
  let staff = content;
  return (
    <div className="card-row">
      <div className="card-content p-3">
        {staff.detailUrl && (
          <div id="profile-expand">
            {staff.externalDetail ? (
              <a
                style={{ color: "inherit" }}
                href={staff.detailUrl}
                target="_blank"
                rel="noreferrer"
              >
                <FaChevronRight />
              </a>
            ) : (
              <a href={staff.detailUrl}>
                <span style={{ cursor: "pointer", fontSize: "1.3rem" }}>
                  <FaChevronRight />
                </span>
              </a>
            )}
          </div>
        )}
        <div className="card-content h4 fw-bold">{staff.name}</div>
        <div className="card-content h6">{staff.designation}</div>
        <hr></hr>
        {staff.areaOfInterest !== "" && (
          <div>
            <FaStar className="icon" />
            <span className="card-content h6">{staff.areaOfInterest}</span>
          </div>
        )}
        <div>
          <FaEnvelope className="icon" />
          <span className="card-content h6">{staff.email}</span>
        </div>
        <div>
          <FaPhoneAlt className="icon" />
          {String(staff.extnNo).length === 4 ? (
            <span className="card-content h6">044 - 2251 {staff.extnNo}</span>
          ) : String(staff.extnNo).length === 8 ? (
            <span className="card-content h6">044 - {staff.extnNo}</span>
          ) : (
            <span className="card-content h6">{staff.extnNo}</span>
          )}
        </div>
        {staff.academicaLink && (
          <a
            href={staff.academicaLink}
            target="_blank"
            rel="noreferrer"
            className="mt-1 btn px-3"
            id="academica-profile-link"
          >
            <div className="d-flex gap-2 align-items-center">
              <div>Academica Profile</div>
              <div>
                <FaExternalLinkAlt />
              </div>
            </div>
          </a>
        )}
      </div>
    </div>
  );
}
export default TeachingCardContent;
