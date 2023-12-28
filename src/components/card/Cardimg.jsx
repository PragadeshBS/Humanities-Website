import "./cardStyles/Cardimg.css";
import { useEffect, useState } from "react";
import { BounceLoader } from "react-spinners";
import { BsPersonCircle } from "react-icons/bs";

function Cardimg({ src }) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const cssOverride = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
  };
  useEffect(() => {
    if (src === undefined) {
      setError(true);
      setLoading(false);
      return;
    }
    setLoading(true);
    setError(false);
  }, [src]);
  return (
    <div className="card-img">
      <div
        className={`card-row ${
          (loading || error) && "align-items-center justify-content-center"
        }`}
        style={{ minHeight: `${(loading || error) && "150px"}` }}
      >
        {!error && (
          <img
            src={src}
            alt="staff-img"
            onLoad={() => {
              setLoading(false);
            }}
            style={{ display: loading ? "none" : "block" }}
          />
        )}
        <BounceLoader
          color="white"
          loading={loading}
          cssOverride={cssOverride}
          size={100}
        />
        {error && (
          <div className="text-light">
            <BsPersonCircle size={100} />
          </div>
        )}
      </div>
    </div>
  );
}
export default Cardimg;
