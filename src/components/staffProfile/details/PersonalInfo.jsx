const PersonalInfo = ({ pinfo }) => {
  return (
    <div id="personalInfo" className="mb-5">
      <h1>Personal Details</h1>
      <div className="row border border-2 p-3 border-rounded rounded-3 profile-box">
        <div className="col-lg-4">
          <img
            className="img-fluid border-rounded rounded-3 my-4"
            src={pinfo.image}
          />
        </div>
        <div className="col-lg-8">
          <h3>{pinfo.name}</h3>
          <h5>{pinfo.designation}</h5>
          <div>
            <i className="bi bi-telephone-fill me-3"></i>
            <span className="h6">{pinfo.contact}</span>
          </div>
          <div>
            <i className="bi bi-envelope-fill me-3"></i>
            <span className="h6">{pinfo.email}</span>
          </div>
          <h3 className="mt-3">
            <i className="bi bi-star-fill me-3"></i>Area of Interest
          </h3>
          <div>{pinfo.areaOfInterest}</div>
        </div>
      </div>
    </div>
  );
};
export default PersonalInfo;
