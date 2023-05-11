import classes from "./stats.module.css";

const StatItem = ({ label, value, icon }) => {
  return (
    <div className={`mb-4 col-6 col-md-4 ${classes.statItem}`}>
      <div className="display-3 fw-bold">{value}</div>
      <div className="d-flex justify-content-center align-items-center">
        <span className="fs-4">{icon}</span>
        <span className="fs-6 ms-1">{label}</span>
      </div>
    </div>
  );
};
export default StatItem;
