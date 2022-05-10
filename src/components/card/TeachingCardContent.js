import CardItem from "./CardItem";
import "./cardStyles/CardContent.css";
function TeachingCardContent(props) {
  var staff = props.content;
  return (
    <div className="card-row">
      <div className="card-content">
        <CardItem name={staff.name} class="faculty-name" />
        <CardItem name={staff.designation} class="faculty-designation" />
        <hr></hr>
        <div className="contact-info">
          <div></div>
          <div>
            {staff.areaOfInterest && (
              <CardItem
                name={staff.areaOfInterest}
                icon="star"
                class="area-of-interest"
              />
            )}
            <CardItem name={staff.email} icon="mail" class="mail" />
            <CardItem
              name={`044-2251${staff.extnNo}`}
              icon="phone"
              class="phone"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
export default TeachingCardContent;
