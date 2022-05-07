import CardItem from "./CardItem";
import "./cardStyles/CardContent.css";
function CardContent(props) {
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
            <CardItem
              name={staff.area_of_interest}
              icon="star"
              class="area-of-interest"
            />
            <CardItem name={staff.mail} icon="mail" class="mail" />
            <CardItem name={staff.phone} icon="phone" class="phone" />
          </div>
        </div>
      </div>
    </div>
  );
}
export default CardContent;
