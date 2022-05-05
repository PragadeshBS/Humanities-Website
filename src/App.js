import { Outlet } from "react-router-dom";
import Footer from "./templates/Footer";
import Header from "./templates/Header";
import './appStyles.css'

function App() {
  return (
    <div>
      <Header />
      <div className="container">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default App;
