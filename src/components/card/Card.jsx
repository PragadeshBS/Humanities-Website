import "./cardStyles/Card.css";
import Cardimg from "./Cardimg";
import NonTeachingCardContent from "./NonTeachingCardContent";
import TeachingCardContent from "./TeachingCardContent";

function Card({ content, type }) {
  return (
    <div className={`card my-4 ${type==="teachingStaff"&&"w-100"}`}>
      <Cardimg src={content.image}></Cardimg>
      {/* for teaching staff */}
      {type === "teachingStaff" && <TeachingCardContent content={content} />}
      {/* for non teaching staff */}
      {type === "nonTeachingStaff" && (
        <NonTeachingCardContent content={content} />
      )}
    </div>
  );
}

export default Card;
