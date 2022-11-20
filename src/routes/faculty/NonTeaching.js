import { useEffect } from "react";
import Title from "../../components/Title";
import Cards from "../../components/card/Cards";
import data from "../../data/staffs/nonTeaching";
export default function NonTeaching() {
  useEffect(() => {
    document.title =
      "Non-Teaching Staff | Department of Applied Sciences & Humanities, MIT Campus, Anna University";
  }, []);
  return (
    <div className="container mb-5">
      <Title text="Non-Teaching Staff" />
      <div className="row">
        <div className="col-sm-12">
          <Cards items={data} type="nonTeachingStaff" />
        </div>
      </div>
    </div>
  );
}
