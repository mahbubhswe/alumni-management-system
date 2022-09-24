import { Stack, Box, Paper, Alert, Typography, Button } from "@mui/material";
import React from "react";
import Head from "next/head";
import ProfileOptions from "./ProfileOptions";
export default function Profile({ children, pageTitle }) {
 
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
          {children}
        </Box>
      </Stack>
    </>
  );
}
