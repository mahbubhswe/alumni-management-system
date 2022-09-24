import { Container, Divider, Grid, Typography } from "@mui/material";
import React from "react";
import NextImg from "next/image";
import AdjustIcon from "@mui/icons-material/Adjust";
export default function AlumniInfo({ data }) {
  return (
    <div style={{ backgroundColor: "#FAFAFB" }}>
      <Typography
        sx={{ color: "#BB3D6E" }}
        pt={10}
        align="center"
        variant="bold"
        component="h1"
      >
        Our Community
      </Typography>
      <Divider>
        <AdjustIcon fontSize="3" />
        <AdjustIcon fontSize="3" />
        <AdjustIcon fontSize="3" />
      </Divider>
      <Grid container justifyContent="center">
        <Grid
          item
          sx={{
            background: "#FFFFFF",
            margin: "100px",
            border: "1px solid #ccc",
            padding: "30px",
            boxShadow: "0 1px 4px 0 rgb(0 0 0 / 50%)",
            borderRadius: "12px",
          }}
        >
          <div className="imgStyle">
            <NextImg
              src="/img/totalAlumni.png"
              alt="totalAlumni"
              width={200}
              height={200}
              quality={100}
            />
          </div>
          <Typography align="center" variant="bold" component="h2">
            Total Alumni
          </Typography>
          <Typography align="center" sx={{ color: "#21335C" }}>
            {data.totalAlumni ? data.totalAlumni : 0}
          </Typography>
        </Grid>
        <Grid
          item
          sx={{
            background: "#FFFFFF",
            margin: "100px",
            border: "1px solid #ccc",
            padding: "30px",
            boxShadow: "0 1px 4px 0 rgb(0 0 0 / 50%)",
            borderRadius: "12px",
          }}
        >
          <div className="imgStyle">
            <NextImg
              src="/img/joinToday.png"
              alt="joinToday"
              width={200}
              height={200}
              quality={100}
            />
          </div>
          <Typography align="center" variant="bold" component="h2">
            Join Today
          </Typography>
          <Typography align="center" sx={{ color: "#21335C" }}>
            {data.joinToday ? data.joinToday : 0}
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}
