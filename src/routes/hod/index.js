import "./index.css";
const Hod = () => {
  return (
    <div className="hod-page">
      <div className="hod-title m-4 display-5">
        <p>Message from the Head of Department</p>
      </div>
      <div className="hod-body">
        <div className="hod-image my-sm-2 my-lg-5 ml-lg-3">
          <img src="/static/images/HOD/hod.jpg" alt="HOD"></img>
        </div>
        <div className="hod-message m-sm-2 mb-sm-4 m-lg-4 p-5 display-2">
          <div className="message">
            The Department of Applied Sciences & Humanities has four
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
          <div className="sign">-Dr V Ponnusamy</div>
        </div>
      </div>
    </div>
  );
};

export default Hod;
