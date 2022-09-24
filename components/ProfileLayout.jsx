import { Stack, Box, Paper, Alert, Typography, Button } from "@mui/material";
import React from "react";
import Head from "next/head";
import ProfileOptions from "./ProfileOptions";
import axios from "axios";
import useSWR from "swr";
const checkAlert = (url) => axios.get(url).then((res) => res.data);
export default function Profile({ children, pageTitle, id }) {
  const { data, error } = useSWR(`/api/alumni/checkAlert?id=${id}`, checkAlert);
  return (
    <>
      <Head>
        <title>
          {pageTitle
            ? "Alumni System | " + pageTitle
            : "Wellcome to alumni system"}
        </title>
      </Head>
      <Stack direction="row" sx={{ backgroundColor: "#F9FBFA" }}>
        <Box
          sx={{
            display: { xs: "none", sm: "none", md: "block" },
            minHeight: "100vh",
            width: "250px",
          }}
        >
          <Paper
            sx={{
              position: "fixed",
              width: "280px",
              height: "100vh",
            }}
          >
            <ProfileOptions />
          </Paper>
        </Box>
        <Box
          sx={{
            flexGrow: 1,
            minHeight: "100vh",
          }}
        >
          <Typography align="center" color="error"  mt={2}>
            {data ? data : null}
          </Typography>

          {children}
        </Box>
      </Stack>
    </>
  );
}
