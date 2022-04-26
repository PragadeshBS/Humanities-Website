import { useEffect } from "react";

function Home() {
  useEffect(() => {
    document.title = "Home | Dept of human";
  }, []);
  return (
    <h1>Homepage and hod desk</h1>
  )
}

export default Home