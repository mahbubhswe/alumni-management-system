import { Stack, Box, Container, Paper } from "@mui/material";
import React from "react";
import Head from "next/head";
import DashboardOption from "../components/DashboardOption";
import dynamin from "next/dynamic";
function Dashboard({ children, pageTitle }) {
  return (
    <>
      <Head>
        <title>
          {pageTitle ? "Alumni System | " + pageTitle : "Dashboard"}
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
            <DashboardOption />
          </Paper>
        </Box>
        <Box
          sx={{
            flexGrow: 1,
            minHeight: "100vh",
            marginBottom: "100px",
          }}
        >
          <Container sx={{ marginTop: "10px" }}>
            <Paper
              sx={{
                mx: "20px",
                p: "20px",
              }}
            >
              {children}
            </Paper>
          </Container>
        </Box>
      </Stack>
    </>
  );
}
export default dynamin(() => Promise.resolve(Dashboard), {
  ssr: false,
});
