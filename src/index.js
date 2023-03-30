import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Home from "./routes/home/Home";
import Teaching from "./routes/faculty/Teaching";
import NonTeaching from "./routes/faculty/NonTeaching";
import Hod from "./routes/hod";
import Infrastructure from "./routes/infrastructure";
import Courses from "./routes/courses";
import CharacterizationFacilities from "./routes/char-facilities";
import AnnualReport from "./routes/annual-report";
import MPhilMath from "./routes/students/mphil/math/MPhilMath";
import MScMath from "./routes/students/msc/math/MScMath";
import VisionMission from "./routes/vision-mission/Index";
import FundedResearch from "./routes/research/funded/FundedResearch";
import PartTimeResearch from "./routes/research/partTime/PartTimeResearch";
import FullTimeResearch from "./routes/research/fullTime/FullTimeResearch";
import Contact from "./routes/contact/Contact";
import Profile from "./routes/faculty/profile/Profile";
import BlankPage from "./routes/blank";
import Placements from "./routes/placements";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="hod" element={<Hod />} />
        <Route path="vision-mission" element={<VisionMission />} />
        <Route path="faculty">
          <Route path="teaching" element={<Teaching />}></Route>
          <Route path="non-teaching" element={<NonTeaching />}></Route>
          <Route path="profile/:staffId" element={<Profile />}></Route>
        </Route>
        <Route path="academics/curriculum" element={<BlankPage />} />
        <Route path="students/mphil/math" element={<MPhilMath />} />
        <Route path="students/msc/math" element={<MScMath />} />
        <Route path="infrastructure" element={<Infrastructure />} />
        <Route
          path="characterization-facilities"
          element={<CharacterizationFacilities />}
        />
        <Route path="courses" element={<Courses />} />
        <Route path="research/funded" element={<FundedResearch />} />
        <Route path="research/part-time" element={<PartTimeResearch />} />
        <Route path="research/full-time" element={<FullTimeResearch />} />
        <Route path="placements" element={<Placements />} />
        <Route path="annual-report" element={<AnnualReport />} />
        <Route path="contact" element={<Contact />} />
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
