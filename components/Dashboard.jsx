import {
  Avatar,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Paper,
  Stack,
} from "@mui/material";
import Image from "next/image";
import React from "react";
import AlumniOverview from "./AlumniOverview";
export default function Dashboard({ data }) {
  return (
    <>
      <Stack
        direction={{ xs: "column", sm: "row", md: "row" }}
        spacing={3}
        justifyContent="center"
        alignItems="center"
      >
        <Paper className="dashboardItem">
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <Image
                  src="/img/altPic.jpg"
                  alt="photo"
                  width={100}
                  height={100}
                  quality={100}
                />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Total Alumni" secondary={data.totalAlumni} />
          </ListItem>
        </Paper>
        <Paper className="dashboardItem">
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <Image
                  src="/img/profile.png"
                  alt="photo"
                  width={100}
                  height={100}
                  quality={100}
                />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Join Today" secondary={data.joinToday} />
          </ListItem>
        </Paper>
        <Paper className="dashboardItem">
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <Image
                  src="/img/job.png"
                  alt="photo"
                  width={100}
                  height={100}
                  quality={100}
                />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Job Post" secondary={798} />
          </ListItem>
        </Paper>
      </Stack>
      <br></br>
      <AlumniOverview data={data} />
    </>
  );
}
