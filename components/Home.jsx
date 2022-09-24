import { Stack, Box, Typography, Button } from "@mui/material";
import React from "react";
import NextLink from "next/link";
import Fade from "react-reveal/Fade";
import { useLocalStorage } from "@rehooks/local-storage";
import AlumniInfo from "./AlumniInfo";
import useSWR from "swr";
import axios from "axios";
import moment from "moment";
import Typewriter from "typewriter-effect";
import { HashLoader } from "react-spinners";
import WhyJoin from "./WhyJoin";
import AlumniList from "./AlumniList";
import WelcomeToAlumni from "./WelcomeToAlumni";
import WelcomeToAlumniMobile from "./WelcomeToAlumniMobile";
import Footer from "./Footer";
const currentDate = moment(new Date()).format("YYYY-MM-DD");
const getAlumniInfo = (url) => axios.get(url).then((res) => res.data);

export default function Home() {
  const { data, error } = useSWR(
    `/api/alumni/getAlumniInfo?date=${currentDate}`,
    getAlumniInfo
  );

  const [userInfo] = useLocalStorage("userInfo");
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
    <div>
      <Stack direction="row" spacing={1} className="homeBg">
        <Box
          sx={{
            display: {
              xs: "none",
              sm: "none",
              md: "block",
              lg: "block",
              xl: "block",
            },
            width: "50%",

            paddingLeft: "8px",
          }}
        >
          <div
            style={{
              height: "500px",
              display: "grid",
              placeContent: "center",
            }}
          >
            <Fade left>
              <Typography
                variant="bold"
                component="h1"
                sx={{
                  fontSize: {
                    xs: "50px",
                    sm: "50px",
                    md: "60px",
                    lg: "60px",
                    xl: "60px",
                  },
                  color: "#FED00D",
                }}
              >
                Congratulation...!
              </Typography>
            </Fade>
            <Fade bottom delay={300} duration={4000}>
              <Typography
                variant="bold"
                fontSize={25}
                fontFamily="georgia"
                sx={{ color: "#FFFFFF" }}
              >
                {
                  "Let's join to our comunity by registration throuth this website."
                }
              </Typography>
            </Fade>
          </div>
        </Box>
        <Box
          sx={{
            flexGrow: 1,
            height: "500px",
            display: "grid",
            placeContent: "center",
          }}
        >
          <Stack spacing={2} alignItems="center">
            <Typography
              sx={{ color: "#ffffff" }}
              align="center"
              variant="bold"
              component="h1"
            >
              <Typewriter
                options={{
                  strings: "Welcome to Alumni System",
                  autoStart: true,
                  loop: true,
                }}
              />
            </Typography>

            <NextLink
              href={
                userInfo
                  ? userInfo.isAdmin
                    ? "/dashboard/manage-alumni"
                    : "/alumni/profile"
                  : "/alumni/registration"
              }
              passHref
            >
              <Button
                sx={{
                  backgroundColor: "#2E3094",
                  color: "red",
                  border: "1px solid red",
                }}
                disableElevation={true}
                variant="outlined"
                component="a"
                size="large"
              >
                {userInfo
                  ? userInfo.isAdmin
                    ? "Go to dashboard"
                    : "Go to profile"
                  : "Join Now"}
              </Button>
            </NextLink>
          </Stack>
        </Box>
      </Stack>
      <Box sx={{ display: { xs: "none", sm: "none", md: "block" } }}>
        <WelcomeToAlumni />
      </Box>
      <Box sx={{ display: { xs: "block", sm: "block", md: "none" } }}>
        <WelcomeToAlumniMobile />
      </Box>

      <WhyJoin />
      <AlumniInfo data={data} />
      <AlumniList />
      <Footer />
    </div>
  );
}
