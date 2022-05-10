import "./cardStyles/Cardimg.css";
function Cardimg({ src }) {
  return (
    <div className="card-img">
      <div className="card-row">
        <img src={src} alt="iamageo"></img>
      </div>
    </div>
  );
}
export default Cardimg;
