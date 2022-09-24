import {
  Divider,
  Grid,
  Typography,
  Box,
  Slide,
  Button,
  Dialog,
  AppBar,
  Toolbar,
  IconButton,
} from "@mui/material";
import React from "react";
import NextImg from "next/image";
import { HashLoader } from "react-spinners";
import AdjustIcon from "@mui/icons-material/Adjust";
import axios from "axios";
import useSWR from "swr";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import ShowAlumniDetails from "./ShowAlumniDetails";
import { Fade } from "react-reveal";
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
const getAlumni = (url) => axios.get(url).then((res) => res.data);
export default function AlumniInfo() {
  const { data, error } = useSWR(`/api/alumni/getAlumni`, getAlumni);
  const [showDailog, setShowDailog] = useState(false);
  const [alumni, setAlumni] = useState();
  if (!data) {
    return (
      <Box
        sx={{
          height: "100vh",
          width: "100vw",
          display: "grid",
          placeContent: "center",
        }}
      >
        <HashLoader size={70} color={"#F70000"} />
      </Box>
    );
  }
  return (
    <div style={{ backgroundColor: "#FFFFFF", padding: "100px 0px" }}>
      <Typography
        sx={{ color: "#BB3D6E" }}
        pt={10}
        align="center"
        variant="bold"
        component="h1"
      >
        Alumni
      </Typography>
      <Divider>
        <AdjustIcon fontSize="3" />
        <AdjustIcon fontSize="3" />
        <AdjustIcon fontSize="3" />
      </Divider>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        {data.map((item) => (
          <Fade bottom key={item._id}>
            <Grid
              item
              sx={{
                height: "270px",
                width: "180px",
                border: "1px solid #ccc",
                borderRadius: "4px",
                margin: "8px",
                boxShadow: "0 1px 4px 0 rgb(0 0 0 / 50%)",
              }}
            >
              <Typography align="center">
                <NextImg
                  src={item.img ? item.img : "/img/altPic.jpg"}
                  height={180}
                  width={180}
                  quality={100}
                />
              </Typography>
              <Typography align="center" my={1}>
                {item.name.substring(0, 20)}
              </Typography>
              <Typography align="center">
                <Button
                  onClick={() => {
                    setAlumni(item);
                    setShowDailog(true);
                  }}
                  variant="contained"
                  size="small"
                  color="secondary"
                >
                  Details
                </Button>
              </Typography>{" "}
            </Grid>{" "}
          </Fade>
        ))}
      </Grid>
      {/* //show details */}
      <Dialog
        fullScreen
        open={showDailog}
        onClose={() => setShowDailog(!showDailog)}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: "relative", background: "#0D1013" }}>
          <Toolbar>
            <Typography
              sx={{ ml: 2, flex: 1 }}
              variant="h6"
              component="div"
              align="center"
            >
              Check Alumni Details
            </Typography>
            <IconButton
              edge="start"
              color="inherit"
              onClick={() => setShowDailog(false)}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
          </Toolbar>
        </AppBar>

        <ShowAlumniDetails alumni={alumni} />
      </Dialog>
    </div>
  );
}
