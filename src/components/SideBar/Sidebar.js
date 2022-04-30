import "../../components/global.css";
const SideBar = (props) => {
  var data = props.views;
  var curdept = props.curView;
  var curid = curdept.id;

  return (
    <div className="col-sm-12 col-md-3">
      <ul className="staff-type">
        {data.map((data, index) => {
          return (
            <li
              key={index}
              className={`fw-bold ${
                curid === data.id ? "activeType" : "inactiveType"
              }`}
              onClick={() => {
                props.changeCurView(data.id);
              }}
            >
              {data.dept}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default SideBar;
