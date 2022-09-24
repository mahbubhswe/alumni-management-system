import * as React from "react";
import { Typography, Divider } from "@mui/material";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import SchoolIcon from "@mui/icons-material/School";
import AdjustIcon from "@mui/icons-material/Adjust";
import Fade from "react-reveal/Fade";
export default function CustomizedTimeline() {
  return (
    <div style={{ backgroundColor: "#FAFAFB", paddingBottom: "60px" }}>
      <Typography
        sx={{ color: "#BB64AE" }}
        pt={7}
        align="center"
        variant="bold"
        component="h1"
      >
        Welcome to Our Alumni
      </Typography>
      <Divider>
        <AdjustIcon fontSize="3" />
        <AdjustIcon fontSize="3" />
        <AdjustIcon fontSize="3" />
      </Divider>
      <Timeline
        position="alternate"
        sx={{ mt: "50px" }}
      >
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            align="right"
            variant="body2"
          >
            SWE Alumni Association
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot color="secondary">
              <SchoolIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <Typography variant="h6" component="span">
              SWE Alumni Association
            </Typography>
            <Fade bottom delay={300} duration={2000}>
              <Typography className="AlumniTextSectionLeft">
                {`Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s.`}
              </Typography>
            </Fade>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            variant="body2"
            color="secondary"
          >
            CSE Alumni Association
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot color="secondary">
              <SchoolIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <Typography variant="h6" component="span">
              CSE Alumni Association
            </Typography>
            <Fade left delay={200} duration={2000}>
              <Typography className="AlumniTextSectionRight">
              {`Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s.`}
              </Typography>
            </Fade>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            variant="body2"
            color="secondary"
          >
            EEE Alumni Association
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot color="secondary">
              <SchoolIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <Typography variant="h6" component="span">
              EEE Alumni Association
            </Typography>
            <Fade bottom delay={100} duration={1000}>
              <Typography className="AlumniTextSectionLeft">
              {`Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s.`}
              </Typography>
            </Fade>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            variant="body2"
            color="secondary"
          >
            Business Alumni Association
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot color="secondary">
              <SchoolIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <Typography variant="h6" component="span">
              Business Alumni Association
            </Typography>
            <Fade left delay={200} duration={2000}>
              <Typography className="AlumniTextSectionRight">
              {`Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s.`}
              </Typography>
            </Fade>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </div>
  );
}
