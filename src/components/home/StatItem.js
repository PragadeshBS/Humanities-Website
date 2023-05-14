import classes from "./stats.module.css";

const StatItem = ({ label, value, icon }) => {
  return (
    <div className="col-6 col-md-4">
      <div className={`mx-auto mb-4 col-6 col-md-4 ${classes.statItem}`}>
        <div className="display-3 fw-bold">{value}</div>
        <div>
          <span className="fs-4">{icon}</span>
          <span className="fs-6 ms-1">{label}</span>
        </div>
      </div>
    </div>
  );
};
export default StatItem;
