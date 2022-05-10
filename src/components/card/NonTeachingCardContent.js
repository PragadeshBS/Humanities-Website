import CardItem from "./CardItem";
import "./cardStyles/CardContent.css";
function NonTeachingCardContent({ content }) {
  var staff = content;
  return (
    <div className="card-row">
      <div className="card-content">
        <CardItem name={staff.name} class="faculty-name" />
        <CardItem name={staff.designation} class="faculty-designation" />
        <hr></hr>
        <div className="contact-info">
          <div>
            <CardItem
              name={"044 - 2251" + staff.extnNo}
              icon="phone"
              class="phone"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
export default NonTeachingCardContent;
