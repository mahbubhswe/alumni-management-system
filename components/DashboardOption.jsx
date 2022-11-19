import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemButton,
  Typography,
  Divider,
} from "@mui/material";
import LockResetIcon from "@mui/icons-material/LockReset";
import DashboardIcon from "@mui/icons-material/Dashboard";
import GroupIcon from "@mui/icons-material/Group";
import PollIcon from "@mui/icons-material/Poll";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
export default function Profile() {
  const router = useRouter();

  return (
    <>
      <Typography sx={{ textAlign: "center", padding: "13px" }}>
        <Image
          src="/img/profile.png"
          alt="Profile"
          width={100}
          height={100}
          quality={100}
        />
        <Divider>Admin</Divider>
      </Typography>

      <List dense={true} sx={{ width: "90%", marginX: "auto" }}>
        <ListItem disablePadding>
          <ListItemButton onClick={() => router.push("/dashboard")}>
            <ListItemIcon>
              <DashboardIcon />
            </ListItemIcon>
            <ListItemText>Dashboard</ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton
            onClick={() => router.push("/dashboard/manage-alumni")}
          >
            <ListItemIcon>
              <GroupIcon />
            </ListItemIcon>
            <ListItemText>Manage Alumni</ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton onClick={() => router.push("/dashboard/manage-poll")}>
            <ListItemIcon>
              <PollIcon />
            </ListItemIcon>
            <ListItemText>Manage Poll</ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton
            onClick={() => {
              router.push("/password-reset");
            }}
          >
            <ListItemIcon>
              <LockResetIcon sx={{ color: "green" }} />
            </ListItemIcon>
            <ListItemText sx={{ color: "green" }}>Change Password</ListItemText>
          </ListItemButton>
        </ListItem>
      </List>
    </>
  );
}
