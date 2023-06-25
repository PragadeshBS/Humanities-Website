import { useEffect } from "react";
import Stats from "../../components/home/Stats";
import Notification from "../../components/notification/Notification";

function Home() {
  useEffect(() => {
    document.title =
      "Home | Department of Applied Sciences & Humanities, MIT Campus, Anna University";
  }, []);
  return (
    <div>
      <div className="display-5 text-center mt-3">
        Welcome to the Department of Applied Sciences and Humanities
      </div>
      <div className="container">
        <Notification />
      </div>
      <div className="container">
        <img
          src="static/images/home/dash-hero.jpg"
          className="img-fluid slides rounded my-3"
          alt="slides"
        />
        <p className="mb-3">
          The Department of Applied Sciences &amp; Humanities has the following
          disciplines:
        </p>
        <ol>
          <li>Mathematics</li>
          <li>Physics</li>
          <li>Chemistry</li>
          <li>English</li>
        </ol>
        <p>
          The department has made rapid strides in fostering engineering
          education that blends scientifically designed doses of academics with
          co and extracurricular activities guaranteed to promote the all-round
          development and growth of its students, thanks to the efforts of
          enthusiastic and experienced faculty members. The department offers
          M.Sc. and M.Phil. mathematics programs in addition to meeting the
          needs of all engineering and science students in UG and PG programs.
          It also provides research-based Ph.D. and M.S. programs.
        </p>
      </div>
      <Stats />
    </div>
  );
}

export default Home;
