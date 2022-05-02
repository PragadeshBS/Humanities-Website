import { useEffect } from "react";

function Home() {
  useEffect(() => {
    document.title = "Home | Dept of human";
  }, []);
  return (
    <div>
      <div className="display-6 text-center mt-3">
        Welcome to the Department of Applied Sciences and Humanities
      </div>
      <img src="static/images/home/slides.gif" className="img-fluid slides" alt="slides" />
      <p className="mb-3">
        The Department of Applied Sciences & Humanities has the following
        disciplines:
      </p>
      <ol>
        <li>Mathematics</li>
        <li>Physics</li>
        <li>Chemistry</li>
        <li>English</li>
      </ol>
      <p>
        The department has made rapid strides in fostering engineering education
        that blends scientifically designed doses of academics with co and
        extracurricular activities guaranteed to promote the all-round
        development and growth of its students, thanks to the efforts of
        enthusiastic and experienced faculty members. The department offers
        M.Sc. and M.Phil. mathematics programs in addition to meeting the needs
        of all engineering and science students in UG and PG programs. It also
        provides research-based Ph.D. and M.S. programs.
      </p>
    </div>
  );
}

export default Home;
