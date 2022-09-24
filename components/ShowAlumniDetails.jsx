import React from "react";
import { Container, Typography, Stack } from "@mui/material";
export default function ShowAlumniDetails({ alumni }) {
  return (
    <Container sx={{padding:"30px"}}>
  
        <Stack spacing={2}>
          <Typography
           
            align="center"
            variant="bold"
            component="h2"
          >
            Personal Information
          </Typography>
          <Typography>Name: {alumni.name}</Typography>
          <Typography>
            E-mail: {alumni.email}
          </Typography>
          <Typography>
            Phone: {alumni.phone}
          </Typography>
          <Typography>
            Gender: {alumni.gander}
          </Typography>
          <Typography>
            Marital Status: {alumni.maritalStatus}
          </Typography>
          <Typography>
            Data of Birth: {alumni.dateOfBirth}
          </Typography>
          <Typography>
            Address: {alumni.address}
          </Typography>

          <Typography
           
            align="center"
            variant="bold"
            component="h2"
          >
            Educational Information
          </Typography>

          <Typography>
            Versity: {alumni.vrstyName}
          </Typography>
          <Typography>
            Department:{alumni.dep}
          </Typography>
          <Typography>
            Batch: {alumni.batch}
          </Typography>
          <Typography>
            Passing Year:{alumni.passingYear}
          </Typography>
          <Typography>CGPA: {alumni.cgpa}</Typography>
          <Typography>
            Vavorit Subject:{alumni.favoritSubject}
          </Typography>

          <Typography
           
            align="center"
            variant="bold"
            component="h2"
          >
            Professional Information
          </Typography>

          <Typography>
            Professional: {alumni.professionalTitle}
          </Typography>
          <Typography>
            Job EXP or Frasher: {alumni.expOrFra}
          </Typography>
          <Typography>
            Currently working place: {alumni.currentJob}
          </Typography>
          <Typography>
            Joined: {alumni.createdAt}
          </Typography>
        </Stack>
      
    </Container>
  );
}
