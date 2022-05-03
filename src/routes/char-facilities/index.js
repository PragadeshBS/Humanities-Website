import Title from "../../components/Title";
import "./styles.css";

const CharacterizationFacilities = () => {
  return (
    <div>
      <Title text="Characterization Facilites" />
      <div>
        <p className="lead">
          The faculty members,research scholars and students can avail R&amp;D
          facilities upon payment of nominal fees. The form can be downloaded
          below.
        </p>
      </div>
      <div id="char-content" className="mb-3">
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
            <div className="display-6 mb-2">Facilities</div>
            <ul className="list-group list-group-flush w-50">
              <li className="list-group-item">
                Scanning Electron Microscope with EDAX
              </li>
              <li className="list-group-item">UV-Vis Spectrometer</li>
              <li className="list-group-item">Impedance Studies</li>
            </ul>
          </div>
        </div>
        <div className="flex-item" id="image-section">
          <img
            src="/static/images/characterization/img1.jpg"
            alt="labImage"
            id="labImage"
            className="img-fluid p-3"
          />
        </div>
      </div>
    </div>
  );
};

export default CharacterizationFacilities;
