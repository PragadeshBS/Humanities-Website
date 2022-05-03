import "./cardStyles/Card.css";
import Cardimg from "./Cardimg";
import CardContent from "./CardContent";
function Card(props) {
  console.log(props.content);

  return (
    <div className="card  mt-4 mb-4">
      <Cardimg src={props.content.img}></Cardimg>
      <CardContent content={props.content}></CardContent>
    </div>
  );
}

export default Card;
