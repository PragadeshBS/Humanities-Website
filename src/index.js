import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Home from "./routes/Home";
import Teaching from "./routes/faculty/Teaching";
import NonTeaching from "./routes/faculty/NonTeaching";
import Test from "./routes/test";
import Hod from "./routes/hod";
import Infrastructure from "./routes/infrastructure";
import Courses from "./routes/courses";
import Students from "./routes/students";
import Research from "./routes/research";
import CharacterizationFacilities from "./routes/char-facilities";
import AnnualReport from "./routes/annual-report";
import Sponsors from "./routes/sponsors"

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="hod" element={<Hod />} />
        <Route path="faculty/teaching" element={<Teaching />}></Route>
        <Route path="faculty/non-teaching" element={<NonTeaching />}></Route>
        <Route path="infrastructure" element={<Infrastructure />} />
        <Route path="courses" element={<Courses />} />
        <Route path="students" element={<Students />} />
        <Route path="research" element={<Research />} />
        <Route
          path="characterization-facilities"
          element={<CharacterizationFacilities />}
        />        
        <Route path="annual-report" element={<AnnualReport />} />
        <Route path="sponsors" element={<Sponsors />} />
        {/* temp page */}
        <Route path="test" element={<Test />} />
      </Route>
      <Route
        path="*"
        element={
          <main style={{ padding: "1rem" }}>
            <p>There's nothing here!</p>
          </main>
        }
      />
    </Routes>
  </BrowserRouter>
);
