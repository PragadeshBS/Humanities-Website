import { useEffect } from "react";
import Title from "../../components/Title";
import "./courses.css";
const Courses = () => {
  useEffect(() => {
    document.title =
      "Courses | Department of Applied Sciences & Humanities, MIT Campus, Anna University";
  }, []);
  return (
    <div className="container mt-5 shadow-lg p-3 mb-5 bg-body rounded">
      <div className="row responsive mb-5">
        <Title text="Courses Offered" />
        <div className="table-responsive">
          <table className="table table-bordered deg-off ">
            <tr className="fs-5">
              <th>COURSES OFFERED</th>
              <th>NAME OF THE PROGRAM</th>
            </tr>
            <tr>
              <td className="rounded">PG</td>
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
          </table>
        </div>
      </div>
    </div>
  );
};

export default Courses;
