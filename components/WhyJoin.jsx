import {
  Box,
  Container,
  Stack,
  Typography,
  ListItem,
  List,
  ListItemIcon,
  ListItemText,
  Divider,
} from "@mui/material";
import React from "react";
import NextImage from "next/image";
import AdjustIcon from "@mui/icons-material/Adjust";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Fade from "react-reveal/Fade";
export default function WhyJoin() {
  return (
    <Box sx={{ backgroundColor: "#F3ECEA"}}>
      <Container>
        <Typography
          sx={{ color: "#BB3D6E" }}
          pt={7}
          align="center"
          variant="bold"
          component="h1"
        >
          Why Join With Us?
        </Typography>
        <Divider>
          <AdjustIcon fontSize="3" />
          <AdjustIcon fontSize="3" />
          <AdjustIcon fontSize="3" />
        </Divider>
        <Stack direction={{ xs: "column", sm: "row", md: "row" }}>
          <Box
            sx={{
              height: "500px",
              width: { xs: "100%", sm: "50%", md: "50%" },
              display: "grid",
              placeContent: "center",
            }}
          >
            <NextImage
              src="/img/joinUs.png"
              alt="alumni pic"
              width={400}
              height={400}
            />
          </Box>
          <Box
            sx={{
              height: "500px",
              width: { xs: "100%", sm: "50%", md: "50%" },
              display: "grid",
              placeContent: "center",
            }}
          >
            <List>
              <Fade bottom delay={100} duration={1000}>
                <ListItem>
                  <ListItemIcon>
                    <CheckCircleIcon sx={{ color: "#21335C" }} />
                  </ListItemIcon>
                  <ListItemText
                    primary="Alumni Events"
                    secondary="In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content."
                  />
                </ListItem>
              </Fade>
              <Fade bottom delay={200} duration={2000}>
                <ListItem>
                  <ListItemIcon>
                    <CheckCircleIcon sx={{ color: "#21335C" }} />
                  </ListItemIcon>
                  <ListItemText
                    primary="Networking Opportunities"
                    secondary="In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content."
                  />
                </ListItem>
              </Fade>
              <Fade bottom delay={300} duration={3000}>
                <ListItem>
                  <ListItemIcon>
                    <CheckCircleIcon sx={{ color: "#21335C" }} />
                  </ListItemIcon>
                  <ListItemText
                    primary="Career Services"
                    secondary="In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content."
                  />
                </ListItem>
              </Fade>
            </List>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}
