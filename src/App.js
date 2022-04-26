import { useEffect } from "react";
import { Outlet, Link } from "react-router-dom";

function App() {
  useEffect(() => {
    document.title = "Home | Dept of ap human";
  }, []);
  return (
    <div>
      <h5>APPLIED SCIENCE & HUMANITIES</h5>
      <h6>HEADER</h6>
      Navbar:
      <nav>
        <Link to="/">Home</Link>{" "}
        <Link to="/faculty/teaching">Teaching</Link>{" "}
        <Link to="/faculty/non-teaching">Non-Teaching</Link>
      </nav>
      <Outlet />
      <h5>Footer</h5>
    </div>
  );
}

export default App;
