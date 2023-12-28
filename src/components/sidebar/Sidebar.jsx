import "../../components/global.css";

export default function SideBar({ views, curView, changeCurView }) {    
  var curid = curView.id;

  return (
    <div className="col-sm-12 col-md-3">
      <ul className="staff-type">
        {views.map((view, index) => {
          return (
            <li
              key={index}
              className={`fw-bold ${
                curid === view.id ? "activeType" : "inactiveType"
              }`}
              onClick={() => {
                changeCurView(view.id);
              }}
            >
              {view.name}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
