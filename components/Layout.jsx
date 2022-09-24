import Head from "next/head";
import React from "react";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import { Stack, Typography, Button } from "@mui/material";
export default function MainLayout({ children, pageTitle }) {
  return (
    <>
      <Head>
        <title>
          {pageTitle
            ? "Alumni System | " + pageTitle
            : "Wellcome to alumni system"}
        </title>
      </Head>
      <Stack
        direction="row"
        style={{
          backgroundColor: "#2E3094",
          color: "#ffffff",
          paddingRight: "20px",
        }}
      >
        <Typography flexGrow={1}></Typography>
        <Button
          href="mailto:projit@diu.edi.bd"
          startIcon={<EmailIcon />}
          sx={{ color: "#ffffff", textTransform: "lowercase" }}
        >
          porijit35-2711@diu.edu.bd
        </Button>
        <Button
          href="tel:+8801733791787"
          startIcon={<PhoneIcon />}
          sx={{ color: "#ffffff" }}
        >
          +8801733791787
        </Button>
      </Stack>
      <main>{children}</main>
    </>
  );
}
