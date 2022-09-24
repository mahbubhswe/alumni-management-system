import { Container, Typography } from "@mui/material";
import axios from "axios";
import React from "react";

export default function Index({ apiRes }) {
  return (
    <Container sx={{ my: "50px" }}>
      <Typography
        sx={{
          color:
            apiRes == "Sorry, token has been broken. Please try again"
              ? "red"
              : "green",
          textAlign: "center",
        }}
      >
        {apiRes}
      </Typography>
    </Container>
  );
}

export async function getServerSideProps(context) {
  const { params } = context;
  const { data } = await axios.get(
    `${process.env.url}/api/alumni/getTokenAndVerify?token=${params.token}`
  );

  return { props: { apiRes: data } };
}
