import { useEffect } from "react";
import Title from "../../components/Title";
import "./courses.css";
const Courses = () => {
  useEffect(() => {
    document.title =
      "Courses | Department of Applied Sciences & Humanities, MIT Campus, Anna University";
  }, []);
  return (
    <div className="container">
      <div className="row responsive mb-5">
        <Title text="Courses Offered" />
        <div className="table-responsive">
          <table className="table table-hover table-striped table-bordered">
            <thead className="table-dark">
              <tr className="fs-5">
                <th>Degree</th>
                <th>Name of the Program</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>PG</td>
                <td>M.Sc Applied Mathematics</td>
              </tr>
              <tr>
                <td>PG</td>
                <td>M.Phil Mathematics</td>
              </tr>
              <tr>
                <td>Ph.d</td>
                <td>English</td>
              </tr>
              <tr>
                <td>Ph.d</td>
                <td>Mathematics</td>
              </tr>
              <tr>
                <td>Ph.d</td>
                <td>Physical Sciences</td>
              </tr>
              <tr>
                <td>Ph.d</td>
                <td>Chemical Sciences</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Courses;
