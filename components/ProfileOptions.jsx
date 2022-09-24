import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemButton,
  Backdrop,
  CircularProgress,
  Typography,
  Divider,
  Badge,
} from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import EditIcon from "@mui/icons-material/Edit";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import DeleteIcon from "@mui/icons-material/Delete";
import LockResetIcon from "@mui/icons-material/LockReset";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { useLocalStorage, deleteFromStorage } from "@rehooks/local-storage";
import Swal from "sweetalert2";
import axios from "axios";
import { useState } from "react";
export default function Profile() {
  const [open, setOpen] = useState(false);
  const [userInfo] = useLocalStorage("userInfo");
  const router = useRouter();

  //delete account
  const deleteMyAccount = () => {
    Swal.fire({
      icon: "question",
      title: "Are you sure?",
      text: "You want to dalete your account",
      showCancelButton: true,
      reverseButtons: true,
    }).then(async (result) => {
      if (result.isConfirmed) {
        setOpen(true);
        const { data } = await axios.delete(
          `/api/alumni/deleteAccount?email=${userInfo.email}`,
          {
            headers: {
              authorization: `Bearer ${userInfo.token}`,
            },
          }
        );
        setOpen(false);
        if (data == "Account has been deleted successfully") {
          Swal.fire({
            icon: "success",
            title: "Success",
            text: data,
          }).then((result) => {
            if (result.isConfirmed) {
              deleteFromStorage("userInfo");
              router.reload(window.location.pathname);
            }
          });
        } else {
          Swal.fire({
            icon: "error",
            title: "Failed to delete account",
            text: data,
          });
        }
      }
    });
  };
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
        <Divider>{userInfo ? userInfo.name : null}</Divider>
      </Typography>

      <List dense={true} sx={{ width: "90%", marginX: "auto" }}>
        <ListItem disablePadding>
          <ListItemButton onClick={() => router.push("/alumni/profile")}>
            <ListItemIcon>
              <AccountCircleIcon />
            </ListItemIcon>
            <ListItemText>Profile</ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton onClick={() => router.push("/alumni/profile/update")}>
            <ListItemIcon>
              <EditIcon />
            </ListItemIcon>
            <ListItemText>Profile Update</ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton onClick={() => router.push("/alumni/profile/poll")}>
            <ListItemIcon>
              <Badge badgeContent={4} color="secondary">
                <NotificationsNoneIcon />
              </Badge>
            </ListItemIcon>
            <ListItemText>Check Poll</ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton onClick={() => router.push("/alumni/add-skills")}>
            <ListItemIcon>
              <AddCircleIcon />
            </ListItemIcon>
            <ListItemText>Add Skill</ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton onClick={() => router.push("/alumni/add-social-media-links")}>
            <ListItemIcon>
              <AddCircleIcon />
            </ListItemIcon>
            <ListItemText>Add Social Link</ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton onClick={() => router.push("/password-reset")}>
            <ListItemIcon>
              <LockResetIcon />
            </ListItemIcon>
            <ListItemText>Change Password</ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton sx={{ color: "red" }} onClick={deleteMyAccount}>
            <ListItemIcon>
              <DeleteIcon color="error" />
            </ListItemIcon>
            <ListItemText>Delete Account</ListItemText>
          </ListItemButton>
        </ListItem>
      </List>
      <Backdrop open={open}>
        <CircularProgress />
      </Backdrop>
    </>
  );
}
