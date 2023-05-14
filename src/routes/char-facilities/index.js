import Title from "../../components/Title";
import { useEffect } from "react";
import "./styles.css";

const CharacterizationFacilities = () => {
  useEffect(() => {
    document.title =
      "Characterization Facilities | Department of Applied Sciences & Humanities, MIT Campus, Anna University";
  }, []);
  const data = [
    {
      name: "Scanning Electron Microscope with EDAX",
      photo: "",
      specification: "",
      form: "",
    },
    {
      name: "UV-Vis Spectrometer",
      photo: "",
      specification: "",
      form: "",
    },
    {
      name: "Impedance Studies",
      photo: "",
      specification: "",
      form: "",
    },
  ];
  return (
    <div className="container mb-3">
      <Title text="Characterization Facilites" />
      <div>
        <p className="lead">
          The faculty members,research scholars and students can avail R&amp;D
          facilities upon payment of nominal fees. The form can be downloaded
          below.
        </p>
      </div>
      <div className="flex-item" id="text-section">
        <div className="my-3">
          <div className="display-6 mb-2">Downloads</div>
          <ul className="fs-5">
            <li>
              <a
                href="https://mitindia.edu/images/mit/Departments/science_humanities/SEM_Rate.pdf"
                className="text-decoration-none"
                target="_blank"
                rel="noreferrer"
              >
                <span className="pe-3">Fees </span>
                <i className="text-dark bi bi-filetype-pdf"></i>
              </a>
            </li>
            <li>
              <a
                href="https://mitindia.edu/images/SEM_FORM.pdf"
                className="text-decoration-none"
                target="_blank"
                rel="noreferrer"
              >
                <span className="pe-3">Form</span>
                <i className="text-dark bi bi-filetype-pdf"></i>
              </a>
            </li>
          </ul>
        </div>
        <div>
          <div className="table-responsive">
            <table className="table table-hover table-striped table-bordered">
              <thead className="table-dark">
                <tr className="fs-5">
                  <th>S. no.</th>
                  <th>Instrument Name</th>
                  {/* <th>Photo</th>
                  <th>Specification</th>
                  <th>Form</th> */}
                </tr>
              </thead>
              <tbody>
                {data.map((item, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{item.name}</td>
                    {/* <td>{item.photo}</td>
                    <td>{item.specification}</td>
                    <td>{item.form}</td> */}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharacterizationFacilities;
