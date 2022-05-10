import "./cardStyles/Card.css";
import Cardimg from "./Cardimg";
import CardContent from "./CardContent";
import NonTeachingCardContent from "./NonTeachingCardContent";
function Card({ content, type }) {
  return (
    <div className="card  mt-4 mb-4">
      <Cardimg src={content.img}></Cardimg>
      {/* for teaching staff */}
      {type === "teachingStaff" && <CardContent content={content} />}
      {/* for non teaching staff */}
      {type === "nonTeachingStaff" && (
        <NonTeachingCardContent content={content} />
      )}
    </div>
  );
}

export default Card;
