import classes from "./stats.module.css";

const Stats = () => {
  return (
    <div
      style={{
        background: "url('/static/images/home/stats.jpg')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      className={`mt-3 ${classes.stats}`}
    >
      <div className="row text-center align-items-center justify-content-center me-0">
        <div className="my-4 col-6 col-md-4">
          <div className="display-3">4</div>
          <div className="fs-6 fw-bold">Staff</div>
        </div>
        <div className="my-4 col-6 col-md-4">
          <div className="display-3">37</div>
          <div className="fs-6 fw-bold">Faculty</div>
        </div>
        <div className="my-4 col-6 col-md-4">
          <div className="display-3">750</div>
          <div className="fs-6 fw-bold">UG Students</div>
        </div>
        <div className="my-4 col-6 col-md-4">
          <div className="display-3">09</div>
          <div className="fs-6 fw-bold">PG Students</div>
        </div>
        <div className="mb-4 col-6 col-md-4">
          <div className="display-3">16</div>
          <div className="fs-6 fw-bold">Research Scholars</div>
        </div>
        <div className="mb-4 col-6 col-md-4">
          <div className="display-3">121</div>
          <div className="fs-6 fw-bold">Publications</div>
        </div>
        <div className="mb-4 col-6 col-md-4">
          <div className="display-3">02</div>
          <div className="fs-6 fw-bold">Projects</div>
        </div>
        <div className="mb-4 col-6 col-md-4">
          <div className="display-3">4</div>
          <div className="fs-6 fw-bold">Academic Laboratories</div>
        </div>
        <div className="mb-4 col-6 col-md-4">
          <div className="display-3">3</div>
          <div className="fs-6 fw-bold">Research Laboratories</div>
        </div>
      </div>
    </div>
  );
};
export default Stats;
