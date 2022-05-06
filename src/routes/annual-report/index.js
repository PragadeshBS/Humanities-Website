import "./annual.css";
import Report from "../../components/annualReport/report";
import { useEffect } from "react";
const AnnualReport = () => {
  useEffect(() => {
    document.title =
      "Annual Report | Department of Applied Sciences & Humanities, MIT Campus, Anna University";
  }, []);
  return (
    <div>
      <Report/>
    </div>
  );
};

export default AnnualReport;
