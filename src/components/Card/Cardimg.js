import "./Cardimg.css";
function Cardimg(props) {
  return (
    <div className="card-img">
      <img src={props.src} alt="iamageo"></img>
    </div>
  );
}
export default Cardimg;
