import { useEffect } from "react";
import { getdetails } from "../../data/nonteaching-faculty";
import Title from "../../components/Title";
import Card from "../../components/Card/Card";
export default function NonTeaching() {
  useEffect(() => {
    document.title = "NonTeaching staff";
  }, []);
  var data = getdetails();
  return (
    <div className="mt-3 mb-5">
      <Title text="NonTeaching Staff" />
      <div className="row">
        <div className="col-sm-12">
          {data.map((data, index) => (
            <Card content={data} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
