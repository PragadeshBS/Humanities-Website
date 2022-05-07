import "./cardStyles/Cardimg.css";
function Cardimg(props) {
  return (
    <div className="card-img">
      <div className="card-row">
        <img src={props.src} alt="iamageo"></img>
      </div>
    </div>
  );
}
export default Cardimg;
