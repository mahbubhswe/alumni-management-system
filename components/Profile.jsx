import { Container, Typography, Stack, Divider, Paper } from "@mui/material";
import axios from "axios";
import Link from "next/link";
import React from "react";
import { FadeLoader } from "react-spinners";
import useSWR from "swr";
const getProfileInfo = (url) => axios.get(url).then((res) => res.data);
export default function Profile({ userEmail }) {
  const { data } = useSWR(
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
        marginY: "10px",
        paddingX: {
          xs: "10px",
          sm: "10px",
          md: "50px",
        },
      }}
    >
      <Typography align="center" color="error" py={1}>
        {data.profileStatus == "Completed"
          ? null
          : "We found incomplete your profile. Please complete your profile"}
      </Typography>
      <Stack spacing={1} direction={{ xs: "column", sm: "row", md: "row" }}>
        <Paper
          className="item"
          sx={{
            width: { xs: "100%", sm: "100%", md: "50%" },
            padding: "15px",
          }}
        >
          <Typography sx={{ color: "gray" }} variant="bold" component="h3">
            Personal Information
          </Typography>
          <Typography sx={{ fontSize: "18px" }}>
            <strong>Name:</strong> {data.profileData.name}
          </Typography>
          <Typography sx={{ fontSize: "18px" }}>
            <strong>E-mail:</strong> {data.profileData.email}
          </Typography>
          <Typography sx={{ fontSize: "18px" }}>
            <strong>Phone:</strong> {data.profileData.phone}
          </Typography>
          <Typography sx={{ fontSize: "18px" }}>
            <strong>Gender:</strong> {data.profileData.gander}
          </Typography>
          <Typography sx={{ fontSize: "18px" }}>
            <strong>Marital Status:</strong> {data.profileData.maritalStatus}
          </Typography>
          <Typography sx={{ fontSize: "18px" }}>
            <strong>Date of Birth: </strong>
            {data.profileData.dateOfBirth}
          </Typography>
          <Typography sx={{ fontSize: "18px" }}>
            <strong>Address:</strong> {data.profileData.address}
          </Typography>
        </Paper>
        <Paper
          className="item"
          sx={{ width: { xs: "100%", sm: "100%", md: "50%" }, padding: "15px" }}
        >
          <Typography sx={{ color: "gray" }} variant="bold" component="h3">
            Skills
          </Typography>

          <Typography sx={{ fontSize: "18px" }}>
            <strong>Skills: </strong>
            {data.profileData.skills
              ? `${data.profileData.skills.skill1},
              ${data.profileData.skills.skill1},
              ${data.profileData.skills.skill3},
              ${data.profileData.skills.skill4},
              ${data.profileData.skills.skill5},
              ${data.profileData.skills.skill6},
              ${data.profileData.skills.skill7}`
              : null}
          </Typography>
        </Paper>
      </Stack>
      <br></br>
      <Stack spacing={1} direction={{ xs: "column", sm: "row", md: "row" }}>
        <Paper
          className="item"
          sx={{ width: { xs: "100%", sm: "100%", md: "50%" }, padding: "15px" }}
        >
          <Typography sx={{ color: "gray" }} variant="bold" component="h3">
            Educational Information
          </Typography>

          <Typography sx={{ fontSize: "18px" }}>
            <strong>Versity:</strong> {data.profileData.vrstyName}
          </Typography>
          <Typography sx={{ fontSize: "18px" }}>
            <strong>Department: </strong>
            {data.profileData.dep}
          </Typography>
          <Typography sx={{ fontSize: "18px" }}>
            <strong>Batch:</strong> {data.profileData.batch}
          </Typography>
          <Typography sx={{ fontSize: "18px" }}>
            <strong>Passing Year: </strong>
            {data.profileData.passingYear}
          </Typography>
          <Typography sx={{ fontSize: "18px" }}>
            <strong>CGPA:</strong> {data.profileData.cgpa}
          </Typography>
          <Typography sx={{ fontSize: "18px" }}>
            <strong>Vavorit Subject: </strong>
            {data.profileData.favoritSubject}
          </Typography>
        </Paper>
        <Paper
          className="item"
          sx={{ width: { xs: "100%", sm: "100%", md: "50%" }, padding: "15px" }}
        >
          <Typography sx={{ color: "gray" }} variant="bold" component="h3">
            Professional Information
          </Typography>

          <Typography sx={{ fontSize: "18px" }}>
            <strong>Professional title:</strong>{" "}
            {data.profileData.professionalTitle}
          </Typography>
          <Typography sx={{ fontSize: "18px" }}>
            <strong>Job EXP or Frasher:</strong> {data.profileData.expOrFra}
          </Typography>
          <Typography sx={{ fontSize: "18px" }}>
            <strong>Currently working place:</strong>
            {data.profileData.currentJob}
          </Typography>
          <Typography sx={{ fontSize: "18px" }}>
            <strong>Joined:</strong> {data.profileData.createdAt}
          </Typography>
        </Paper>
      </Stack>
      <br></br>
      <Stack spacing={1} direction={{ xs: "column", sm: "row", md: "row" }}>
        <Paper
          className="item"
          sx={{ width: { xs: "100%", sm: "100%", md: "50%" }, padding: "15px" }}
        >
          <Typography sx={{ color: "gray" }} variant="bold" component="h3">
            Social Media Link
          </Typography>

          <Typography sx={{ fontSize: "18px" }}>
            <Link
              href={`${
                data.profileData.socialLinks
                  ? data.profileData.socialLinks.facebook
                  : null
              }`}
            >
              <a>Facebook</a>
            </Link>
          </Typography>
          <Typography sx={{ fontSize: "18px" }}>
            <Link
              href={`${
                data.profileData.socialLinks
                  ? data.profileData.socialLinks.linkedin
                  : null
              }`}
            >
              <a>Linkedin</a>
            </Link>
          </Typography>
          <Typography sx={{ fontSize: "18px" }}>
            <Link
              href={`${
                data.profileData.socialLinks
                  ? data.profileData.socialLinks.twitter
                  : null
              }`}
            >
              <a>Twitter</a>
            </Link>
          </Typography>
          <Typography sx={{ fontSize: "18px" }}>
            <Link
              href={`${
                data.profileData.socialLinks
                  ? data.profileData.socialLinks.github
                  : null
              }`}
            >
              <a>Github</a>
            </Link>
          </Typography>
        </Paper>
        <Paper
          className="item"
          sx={{ width: { xs: "100%", sm: "100%", md: "50%" }, padding: "15px" }}
        >
          <Typography sx={{ color: "gray" }} variant="bold" component="h3">
            Accounts Information
          </Typography>

          <Typography sx={{ fontSize: "18px" }}>
            Acount Satatus:
            {data.profileData.isVerified ? (
              <span style={{ color: "green" }}> Verified</span>
            ) : (
              <span style={{ color: "red" }}> Unverified</span>
            )}
          </Typography>
          <Typography>
            {data.profileData.isVerified ? (
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
