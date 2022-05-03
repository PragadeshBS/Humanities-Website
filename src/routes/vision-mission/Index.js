import Mission from "./Mission";
import Vision from "./Vision";
import Title from "../../components/Title";
import "./styles.css"

const VisionMission = () => {
  return (
    <>
      <Title text="Vision &amp; Mission" />
      <div className="vm-content my-5">
          <Vision />
          <Mission />
      </div>
    </>
  );
};

export default VisionMission;
