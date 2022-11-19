import {
  Button,
  Paper,
  Stack,
  TextField,
  Box,
  Backdrop,
  CircularProgress,
  Typography,
} from "@mui/material";
import React, { useContext, useState } from "react";
import NextLink from "next/link";
import NextImage from "next/image";
import VisibilityIcon from "@mui/icons-material/VisibilityOff";
import { useRouter } from "next/router";
import { contextStore } from "../utils/Store";
import dynamic from "next/dynamic";
import axios from "axios";
function Login() {
  const [open, setOpen] = useState(false);
  const [apiRes, setApiRes] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const { dispatch } = useContext(contextStore);
  const router = useRouter();
  //login
  const submitHanler = async (e) => {
    e.preventDefault();
    setOpen(true);
    e.target.reset();
    try {
      const { data } = await axios.post(
        `/api/alumni/login?email=${email}&password=${password}`
      );
      if (email.localeCompare(data.email) === 0) {
        dispatch({ type: "USER_LOGIN", payload: data });
        if (data.isAdmin) {
          return router.push("/dashboard");
        } else {
          return router.push("/alumni/profile");
        }
      }
      setApiRes(data);
    } catch (error) {
      console.log(error.message);
    }
    setOpen(false);
  };

  return (
    <>
      <Stack direction="row" spacing={1} sx={{ marginTop: "50px" }}>
        <Box
          sx={{
            display: {
              xs: "none",
              sm: "none",
              md: "block",
              lg: "block",
              xl: "block",
            },
            width: "50%",
          }}
        >
          <Typography
            style={{
              height: "400px",
              display: "grid",
              placeContent: "center",
            }}
          >
            <NextImage
              src="/img/alumni.png"
              alt="alumni pic"
              width={400}
              height={400}
            />
          </Typography>
        </Box>
        <Box
          sx={{
            flexGrow: 1,
            height: "400px",
            display: "grid",
            placeContent: "center",
          }}
        >
          <Paper sx={{ padding: "20px" }} elevation={2}>
            <Stack onSubmit={submitHanler} spacing={1} component="form">
              <NextImage
                src="/img/logo.png"
                alt="logo"
                width={300}
                height={100}
              />
              <Typography align="center" variant="bold" component="h1">
                Sign in
              </Typography>
              <Typography color="error" align="center">
                {apiRes ? apiRes : null}
              </Typography>
              <TextField
                label="Email address"
                type="email"
                placeholder="E-mail address"
                size="small"
                required
                fullWidth
                color="secondary"
                onChange={(e) => setEmail(e.target.value)}
              ></TextField>
              <TextField
                label="Password"
                type="password"
                placeholder="Password"
                size="small"
                required
                fullWidth
                color="secondary"
                InputProps={{
                  endAdornment: <VisibilityIcon />,
                }}
                onChange={(e) => setPassword(e.target.value)}
              ></TextField>
              <Typography align="center">
                admin@alumni.com | admin123
              </Typography>
              <Box style={{ textAlign: "center" }}>
                <Button
                  type="submit"
                  variant="contained"
                  color="secondary"
                  fullWidth
                  disableFocusRipple={true}
                >
                  Login
                </Button>
              </Box>
              <Typography>
                <NextLink href="/password-reset" passHress>
                  <a>Forgot password?</a>
                </NextLink>
              </Typography>
              <Typography>
                <NextLink href="/alumni/registration" passHress>
                  <a style={{ color: "green" }}> Register now</a>
                </NextLink>
              </Typography>
            </Stack>
          </Paper>
        </Box>
      </Stack>

      <Backdrop open={open}>
        <CircularProgress color="inherit" />
      </Backdrop>
    </>
  );
}
export default dynamic(() => Promise.resolve(Login), {
  ssr: false,
});
