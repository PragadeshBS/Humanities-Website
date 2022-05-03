import Title from "../../components/Title";
import "./index.css";
const Hod = () => {
  return (
    <div className="container my-3">
      <Title text="HOD's Desk" />
      <div className="display-6 mb-3">Dr. V. Ponnusamy</div>
      <div className="hod-content">
        <div className="flex-image ">
          <img
            src="/static/images/HOD/hod.jpg"
            alt="HOD"
            id="hodImg"
            className="img-fluid mb-3"
          />
        </div>
        <div className="hod-text">
          <div className="hod-message p-4">
            The Department of Applied Sciences &amp; Humanities has four
            disciplines: Mathematics, Physics, Chemistry and English. Powered by
            enthusiastic and experienced faculty members, the department has
            made rapid strides in fostering engineering education that blends
            scientifically designed doses of academics with co and
            extracurricular activities guaranteed to promote the all-round
            development and growth of its students. The department offers M.Sc
            Mathematics and M.Phil Mathematics courses, besides catering to the
            needs of all UG and PG Programmes of all engineering and science
            students. It also offers Ph.D and M.S by Research Programmes.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hod;
