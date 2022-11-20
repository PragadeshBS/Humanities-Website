import Mission from "./Mission";
import Vision from "./Vision";
import Title from "../../components/Title";
import "./styles.css";
import { useEffect } from "react";

const VisionMission = () => {
  useEffect(() => {
    document.title =
      "Vission & Mission | Department of Applied Sciences & Humanities, MIT Campus, Anna University";
  }, []);
  return (
    <div className="container">
      <Title text="Vision &amp; Mission" />
      <div className="vm-content my-5">
        <Vision />
        <Mission />
      </div>
    </div>
  );
};

export default VisionMission;
