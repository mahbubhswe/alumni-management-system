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
              height:"100vh"
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
          <Container sx={{ marginTop: "50px" }}>
            <Paper
              sx={{
                marginX: { xs: "5px", sm: "50px", md: "100px" },
                paddingY: "50px",
                paddingX:{ xs: "5px", sm: "50px", md: "50px" }
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
