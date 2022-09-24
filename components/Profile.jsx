import { Container, Typography, Stack, Divider, Paper } from "@mui/material";
import axios from "axios";
import Link from "next/link";
import React from "react";
import { FadeLoader } from "react-spinners";
import useSWR from "swr";
const getProfileInfo = (url) => axios.get(url).then((res) => res.data);
export default function Profile({ userEmail }) {
  const { data, error } = useSWR(
    `/api/alumni/getProfileInfo?email=${userEmail}`,
    getProfileInfo
  );

  if (!data) {
    return (
      <div style={{ height: "100%", display: "grid", placeContent: "center" }}>
        <FadeLoader />
      </div>
    );
  }

  return (
    <Container
      sx={{
        marginY: "20px",
        paddingX: {
          xs: "0px",
          sm: "0px",
          md: "100px",
        },
      }}
    >
      <Stack spacing={2}>
        <Paper variant="outlined" sx={{ padding: "50px" }}>
          <Typography
            align="center"
            sx={{ color: "gray" }}
            variant="bold"
            component="h2"
          >
            Personal Information
          </Typography>
          <Typography sx={{ fontSize: "21px" }}>
            <strong>Name:</strong> {data.name}
          </Typography>
          <Typography sx={{ fontSize: "21px" }}>
            <strong>E-mail:</strong> {data.email}
          </Typography>
          <Typography sx={{ fontSize: "21px" }}>
            <strong>Phone:</strong> {data.phone}
          </Typography>
          <Typography sx={{ fontSize: "21px" }}>
            <strong>Gender:</strong> {data.gander}
          </Typography>
          <Typography sx={{ fontSize: "21px" }}>
            <strong>Marital Status:</strong> {data.maritalStatus}
          </Typography>
          <Typography sx={{ fontSize: "21px" }}>
            <strong>Date of Birth: </strong>
            {data.dateOfBirth}
          </Typography>
          <Typography sx={{ fontSize: "21px" }}>
            <strong>Address:</strong> {data.address}
          </Typography>
        </Paper>
        <Paper variant="outlined" sx={{ padding: "50px" }}>
          <Typography
            align="center"
            sx={{ color: "gray" }}
            variant="bold"
            component="h2"
          >
            Skills
          </Typography>

          <Typography sx={{ fontSize: "21px" }}>
            <strong>Skills: </strong>
            {data.skills?`${data.skills.skill1},
              ${data.skills.skill2},
              ${data.skills.skill3},
              ${data.skills.skill4},
              ${data.skills.skill5},
              ${data.skills.skill6},
              ${data.skills.skill7}`:null}
          </Typography>
        </Paper>
        <Paper variant="outlined" sx={{ padding: "50px" }}>
          <Typography
            align="center"
            sx={{ color: "gray" }}
            variant="bold"
            component="h2"
          >
            Educational Information
          </Typography>

          <Typography sx={{ fontSize: "21px" }}>
            <strong>Versity:</strong> {data.vrstyName}
          </Typography>
          <Typography sx={{ fontSize: "21px" }}>
            <strong>Department: </strong>
            {data.dep}
          </Typography>
          <Typography sx={{ fontSize: "21px" }}>
            <strong>Batch:</strong> {data.batch}
          </Typography>
          <Typography sx={{ fontSize: "21px" }}>
            <strong>Passing Year: </strong>
            {data.passingYear}
          </Typography>
          <Typography sx={{ fontSize: "21px" }}>
            <strong>CGPA:</strong> {data.cgpa}
          </Typography>
          <Typography sx={{ fontSize: "21px" }}>
            <strong>Vavorit Subject: </strong>
            {data.favoritSubject}
          </Typography>
        </Paper>
        <Paper variant="outlined" sx={{ padding: "50px" }}>
          <Typography
            align="center"
            sx={{ color: "gray" }}
            variant="bold"
            component="h2"
          >
            Professional Information
          </Typography>

          <Typography sx={{ fontSize: "21px" }}>
            <strong>Professional title:</strong> {data.professionalTitle}
          </Typography>
          <Typography sx={{ fontSize: "21px" }}>
            <strong>Job EXP or Frasher:</strong> {data.expOrFra}
          </Typography>
          <Typography sx={{ fontSize: "21px" }}>
            <strong>Currently working place:</strong> {data.currentJob}
          </Typography>
          <Typography sx={{ fontSize: "21px" }}>
            <strong>Joined:</strong> {data.createdAt}
          </Typography>
        </Paper>
        <Paper variant="outlined" sx={{ padding: "50px" }}>
          <Typography
            align="center"
            sx={{ color: "gray" }}
            variant="bold"
            component="h2"
          >
            Social Media Link
          </Typography>

          <Typography sx={{ fontSize: "21px" }}>
            <Link href={`${data.socialLinks?data.socialLinks.facebook:null}`}>
              <a>Facebook</a>
            </Link>
          </Typography>
          <Typography sx={{ fontSize: "21px" }}>
            <Link href={`${data.socialLinks?data.socialLinks.linkedin:null}`}>
              <a>Linkedin</a>
            </Link>
          </Typography>
          <Typography sx={{ fontSize: "21px" }}>
            <Link href={`${data.socialLinks?data.socialLinks.twitter:null}`}>
              <a>Twitter</a>
            </Link>
          </Typography>
          <Typography sx={{ fontSize: "21px" }}>
            <Link href={`${data.socialLinks?data.socialLinks.github:null}`}>
              <a>Github</a>
            </Link>
          </Typography>
        </Paper>
        <Paper variant="outlined" sx={{ padding: "50px" }}>
          <Typography
            align="center"
            sx={{ color: "gray" }}
            variant="bold"
            component="h2"
          >
            Accounts Information
          </Typography>

          <Typography sx={{ fontSize: "21px" }}>
            Acount Satatus:
            {data.isVerified ? (
              <span style={{ color: "green" }}> Verified</span>
            ) : (
              <span style={{ color: "red" }}> Unverified</span>
            )}
          </Typography>
          <Typography>
            {data.isVerified ? (
              <span style={{ color: "green" }}>
                Thank you for verify your mail address
              </span>
            ) : (
              <span style={{ color: "red" }}>
                Check your email to verify your account
              </span>
            )}
          </Typography>
        </Paper>
      </Stack>
    </Container>
  );
}