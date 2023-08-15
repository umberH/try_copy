import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";

function Experience() {
  return (
    <div>
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentStyle={{ background: "rgb(33, 150, 243)", color: "#000" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          date="2022 - Present"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            PhD Student, Macquarie University, Sydney Australia
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            {" "}
            Working on Arttificial Intelligence,
          </h4>
          <p>
            {" "}
            My thesis work is focused on explaining the ML results to the variou
            saudience groups.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--experience"
          contentStyle={{ background: "rgb(255,255,255)", color: "#000" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(155, 150,155)" }}
          date="2021 - 2022"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Masters by Research, Macquarie University, Sydney Australia
          </h3>
          <h4>Developed Evidence based system for XAI, High Distinction</h4>
          <p>
            {" "}
            Master thesis scoped to develop an interactive and visualization
            based explanation system for evidence identification for a machine
            learning Model.{" "}
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(255,255,255)", color: "#000" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(155, 150,155)" }}
          date="2021 - 2022"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Data Scientist, Prospa, Sydney Australia
          </h3>
          <h4>Developed Evidence based system for XAI</h4>
          <p>
            {" "}
            Master thesis scoped to develop an interactive and visualization
            based explanation system for evidence identification for a machine
            learning Model.{" "}
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
