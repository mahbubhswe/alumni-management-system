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
      <Timeline position="alternate" sx={{ mt: "50px" }}>
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
                {`Daffodil International University (DIU) is recognized in independent government assessments as one of top graded universities in Bangladesh. The university has been founded by Daffodil Group with the approval of the Ministry of Education under the Private University Act of 1992 and its amendment in 1998 and Daffodil International University came into being on 24th January 2002, the University today combines impressive modern facilities and a dynamic approach to teaching and research with its proud heritage of service and achievement. software engineering  department is one of the best department of this university.and there alumni are working in many  IT company. By  establising SWE alumni accosiation Association is playing a vital role for the students of the Department.daffodil International University. Member of the alumni association creating job opportunities for the new students . This association organizizes annul general meeting, picnic etc for the members of the association.`}
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
                {`Daffodil International University (DIU) is recognized in independent government assessments as one of top graded universities in Bangladesh. The university has been founded by Daffodil Group with the approval of the Ministry of Education under the Private University Act of 1992 and its amendment in 1998 and Daffodil International University came into being on 24th January 2002, the University today combines impressive modern facilities and a dynamic approach to teaching and research with its proud heritage of service and achievement. Computer science engineering  department is one of the best department of this university.and there alumni are working in many  IT company. By  establising CSE alumni accosiation Association is playing a vital role for the students of the Department.daffodil International University. Member of the alumni association creating job opportunities for the new students . This association organizizes annul general meeting, picnic etc for the members of the association.`}
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
                {`Daffodil International University (DIU) is recognized in independent government assessments as one of top graded universities in Bangladesh. The university has been founded by Daffodil Group with the approval of the Ministry of Education under the Private University Act of 1992 and its amendment in 1998 and Daffodil International University came into being on 24th January 2002, the University today combines impressive modern facilities and a dynamic approach to teaching and research with its proud heritage of service and achievement. Electrical and Electronics Engineering (EEE)  department is one of the best department of this university.and there alumni are working in many company. By  establising EEE  alumni accosiation Association can  playing a vital role for the students of the Department.daffodil International University. Member of the alumni association creating job opportunities for the new students . This association organizizes annul general meeting, picnic etc for the members of the association.`}
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
                {`Daffodil International University (DIU) is recognized in independent government assessments as one of top graded universities in Bangladesh. The university has been founded by Daffodil Group with the approval of the Ministry of Education under the Private University Act of 1992 and its amendment in 1998 and Daffodil International University came into being on 24th January 2002, the University today combines impressive modern facilities and a dynamic approach to teaching and research with its proud heritage of service and achievement. Business Administration (BBA) department is one of the best department of this university.and there alumni are working in many company. By  establising BBA  alumni accosiation Association can  playing a vital role for the students of the Department.daffodil International University. Member of the alumni association creating job opportunities for the new students . This association organizizes annul general meeting, picnic etc for the members of the association.`}
              </Typography>
            </Fade>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </div>
  );
}
