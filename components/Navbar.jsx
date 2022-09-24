import {
  AppBar,
  Button,
  IconButton,
  Stack,
  Toolbar,
  Drawer,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemButton,
  Alert,
} from "@mui/material";
import dynamic from "next/dynamic";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import EditIcon from "@mui/icons-material/Edit";
import LockResetIcon from "@mui/icons-material/LockReset";
import React, { useState, useContext } from "react";
import { useRouter } from "next/router";
import LoginIcon from "@mui/icons-material/Login";
import { contextStore } from "../utils/Store";
import Swal from "sweetalert2";
import MenuIcon from "@mui/icons-material/Menu";
import LogoutIcon from "@mui/icons-material/Logout";
import { useLocalStorage } from "@rehooks/local-storage";
import CloseIcon from "@mui/icons-material/Close";
import Image from "next/image";
function Navbar() {
  const [show, setShow] = useState(false);
  const [userInfo] = useLocalStorage("userInfo");
  const { dispatch } = useContext(contextStore);
  const router = useRouter();
  //logout
  const userLogOut = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to logout now.",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.value) {
        dispatch({ type: "USER_LOGOUT" });
        router.push("/");
      }
    });
  };

  return (
    <>
      <AppBar position="sticky" className="navBgColor">
        <Toolbar>
          <Typography
            sx={{ cursor: "pointer" }}
            onClick={() => router.push("/")}
          >
            <Image
              src="/img/logo.png"
              alt="logo"
              height={50}
              width={50}
              quality={100}
            />
          </Typography>
          <Typography flexGrow={1}></Typography>
          <Button
            sx={{
              color: "#FFFFFF",
              textTransform: "none",
              display: { xs: "none", sm: "none", md: "block" },
            }}
          >
            <p>{userInfo ? (userInfo.name ? userInfo.name : null) : null}</p>
          </Button>

          {userInfo ? (
            <IconButton
              sx={{
                display: { xs: "none", sm: "none", md: "block" },
                color: "red",
              }}
              variant="outlined"
              onClick={() => userLogOut()}
            >
              <LogoutIcon />
            </IconButton>
          ) : (
            <IconButton
              onClick={() => router.push("/alumni/login")}
              sx={{
                color: "#115D56",
                display: { xs: "none", sm: "none", md: "block" },
              }}
              variant="outlined"
            >
              <LoginIcon />
            </IconButton>
          )}

          <IconButton
            sx={{ display: { xs: "block", sm: "block", md: "none" } }}
            variant="outlined"
            onClick={() => setShow(true)}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer open={show} onClose={() => setShow(false)}>
        <Stack sx={{ padding: "20px", width: "100vw" }} spacing={1}>
          <Button
            onClick={() => setShow(false)}
            type="button"
            sx={{
              width: "5px",
              marginLeft: "auto",
              color: "black",
              border: "1px dotted #ccc",
            }}
          >
            <CloseIcon></CloseIcon>
          </Button>

          <Stack spacing={1} sx={{ paddingX: "50px" }}>
            <Typography align="center">
              {userInfo ? (userInfo.name ? userInfo.name : null) : null}
            </Typography>

            {userInfo ? (
              userInfo.isAdmin ? (
                <List dense={true} sx={{ width: "90%", marginX: "auto" }}>
                  <ListItem disablePadding>
                    <ListItemButton
                      onClick={() => {
                        setShow(false);
                        router.push("/dashboard/manage-alumni");
                      }}
                    >
                      <ListItemIcon>
                        <AccountCircleIcon />
                      </ListItemIcon>
                      <ListItemText>Manage Alumni</ListItemText>
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton
                      onClick={() => {
                        setShow(false);
                        router.push("/dashboard/manage-poll");
                      }}
                    >
                      <ListItemIcon>
                        <EditIcon />
                      </ListItemIcon>
                      <ListItemText>Manage poll</ListItemText>
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton
                      onClick={() => {
                        setShow(false);
                        router.push("/password-reset");
                      }}
                    >
                      <ListItemIcon>
                        <LockResetIcon />
                      </ListItemIcon>
                      <ListItemText>Change Password</ListItemText>
                    </ListItemButton>
                  </ListItem>
                </List>
              ) : (
                <List dense={true} sx={{ width: "90%", marginX: "auto" }}>
                  <ListItem disablePadding>
                    <ListItemButton
                      onClick={() => {
                        setShow(false);
                        router.push("/alumni/profile");
                      }}
                    >
                      <ListItemIcon>
                        <AccountCircleIcon />
                      </ListItemIcon>
                      <ListItemText>Profile</ListItemText>
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton
                      onClick={() => {
                        setShow(false);
                        router.push("/alumni/profile/update");
                      }}
                    >
                      <ListItemIcon>
                        <EditIcon />
                      </ListItemIcon>
                      <ListItemText>Profile Update</ListItemText>
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton
                      onClick={() => {
                        setShow(false);
                        router.push("/alumni/add-skills");
                      }}
                    >
                      <ListItemIcon>
                        <AddCircleIcon />
                      </ListItemIcon>
                      <ListItemText>Add Skill</ListItemText>
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton
                      onClick={() => {
                        setShow(false);
                        router.push("/alumni/add-social-media-links");
                      }}
                    >
                      <ListItemIcon>
                        <AddCircleIcon />
                      </ListItemIcon>
                      <ListItemText>Add Social Link</ListItemText>
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton
                      onClick={() => {
                        setShow(false);
                        router.push("/password-reset");
                      }}
                    >
                      <ListItemIcon>
                        <LockResetIcon />
                      </ListItemIcon>
                      <ListItemText>Change Password</ListItemText>
                    </ListItemButton>
                  </ListItem>
                </List>
              )
            ) : null}

            <List dense={true}>
              {userInfo ? (
                <ListItem disablePadding>
                  <ListItemButton
                    sx={{ color: "red" }}
                    onClick={() => {
                      setShow(false);
                      userLogOut();
                    }}
                  >
                    <ListItemIcon sx={{ color: "red" }}>
                      <LogoutIcon />
                    </ListItemIcon>
                    <ListItemText>Logout</ListItemText>
                  </ListItemButton>
                </ListItem>
              ) : (
                <ListItem disablePadding>
                  <ListItemButton
                    sx={{ color: "green" }}
                    onClick={() => {
                      setShow(false);
                      router.push("/alumni/login");
                    }}
                  >
                    <ListItemIcon sx={{ color: "green" }}>
                      <LoginIcon />
                    </ListItemIcon>
                    <ListItemText>Login</ListItemText>
                  </ListItemButton>
                </ListItem>
              )}
            </List>
          </Stack>
        </Stack>
      </Drawer>
    </>
  );
}

export default dynamic(() => Promise.resolve(Navbar), {
  ssr: false,
});
