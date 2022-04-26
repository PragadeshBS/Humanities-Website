import { useEffect } from "react";

function NonTeaching() {
  useEffect(() => {
    document.title = "Nonteching staf";
  }, []);
  return (
    <h1>NonTeaching staff</h1>
  )
}

export default NonTeaching  