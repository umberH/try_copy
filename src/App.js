import "./styles.css";
// ?import LeftPositionedTimeline from "./LeftPositionedTimeLine";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import ProjectDisplay from "./pages/ProjectDisplay";
import * as React from "react";
import Navbar from "./components/Navbar";

import Footer from "./components/Footer";
// import Timeline from "./Timeline";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/Projects/:id" element={<ProjectDisplay />} />
          <Route path="/experience" element={<Experience />} />
        </Routes>
        <Footer />
      </Router>
      {/* <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <h2>Timeline</h2> */}
      {/* timeline=Timeline */}
      {/* <LeftPositionedTimeline /> */}
      {/* <Timeline /> */}
    </div>
  );
}
