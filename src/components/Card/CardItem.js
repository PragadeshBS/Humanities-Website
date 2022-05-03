import CardIcons from "./CardIcons";
import "./cardStyles/CardItem.css";
function CardItem(props) {
  return (
    <div className={"card-item " + props.class}>
      <CardIcons name={props.icon} />
      <div>
        <h1>{props.name}</h1>
      </div>
    </div>
  );
}
export default CardItem;
