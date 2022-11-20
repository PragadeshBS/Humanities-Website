import { Outlet } from "react-router-dom";
import Footer from "./templates/Footer";
import Header from "./templates/Header";
import "./appStyles.css";
import ScrollToTop from "./components/scrollToTop";

function App() {
  return (
    <div>
      <Header />
      <ScrollToTop />
      <div>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default App;
