import "./cardStyles/CardIcon.css";
function CardIcons(props) {
  if (props.name === "star") {
    return (
      <div>
        <span className="fa fa-star icon"></span>
      </div>
    );
  } else if (props.name === "mail") {
    return (
      <div>
        <span className="fa fa-envelope icon"></span>
      </div>
    );
  } else if (props.name === "phone") {
    return (
      <div>
        <span className="fa fa-phone icon"></span>
      </div>
    );
  } else {
    return;
  }
}
export default CardIcons;
