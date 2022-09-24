import * as React from "react";
import { Typography, Divider } from "@mui/material";
import TimelineContent from "@mui/lab/TimelineContent";
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
    
        
         
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <Typography variant="h6" component="span">
              SWE Alumni Association
            </Typography>
            <Fade bottom delay={300} duration={2000}>
              <Typography className="AlumniTextSectionLeft">
                {`Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.`}
              </Typography>
            </Fade>
          </TimelineContent>
      
         
      
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <Typography variant="h6" component="span">
              CSE Alumni Association
            </Typography>
            <Fade left delay={200} duration={2000}>
              <Typography  className="AlumniTextSectionLeft">
                {`Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.`}
              </Typography>
            </Fade>
          </TimelineContent>
     
      
         
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <Typography variant="h6" component="span">
              EEE Alumni Association
            </Typography>
            <Fade bottom delay={100} duration={1000}>
              <Typography  className="AlumniTextSectionLeft">
                {`Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.`}
              </Typography>
            </Fade>
          </TimelineContent>
    
         
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <Typography variant="h6" component="span">
              Business Alumni Association
            </Typography>
            <Fade left delay={200} duration={2000}>
              <Typography  className="AlumniTextSectionLeft">
                {`Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.`}
              </Typography>
            </Fade>
          </TimelineContent>
   
      
    </div>
  );
}
