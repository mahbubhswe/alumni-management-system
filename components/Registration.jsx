import {
  Button,
  Container,
  Paper,
  IconButton,
  Stack,
  TextField,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Divider,
  InputAdornment,
  startAdornment,
  Backdrop,
} from "@mui/material";
import React, { useState } from "react";
import NextLink from "next/link";
import NextImage from "next/image";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import axios from "axios";
import moment from "moment";
import CircularProgress from "@mui/material/CircularProgress";
import Swal from "sweetalert2";
const currentDate = moment(new Date()).format("YYYY-MM-DD");
export default function Login() {
  const [confirmPass, setConfirmPass] = useState();
  const [open, setOpen] = useState(false);
  const [show, setShow] = useState(false);
  const [nameValidation, setNameValidation] = useState();
  const [passValidation, setPassValidation] = useState();
  const [checkConPasValidation, setCheckConPasValidation] = useState();
  const [phoneValidation, setPhoneValidation] = useState();
  const [studentInfo, setStudentInfo] = useState({
    name: "",
    email: "",
    password: "",
    createdAt: currentDate,
  });

  const hideShowPassword = () => {
    setShow(!show);
  };
  function inputReset() {
    setNameValidation();
    setPassValidation();
    setCheckConPasValidation();
    setPhoneValidation();
  }
  const submitHanler = async (e) => {
    e.preventDefault();
    setOpen(true);
    inputReset();
    if (
      studentInfo.name.length < 3 ||
      studentInfo.password.length < 6 ||
      studentInfo.password != confirmPass
    ) {
      if (studentInfo.name.length < 3) {
        setNameValidation("Name must be at least 3 characters long");
      }
      if (studentInfo.password.length < 6) {
        setPassValidation("Password must be at least 6 characters long");
      }
      if (studentInfo.password != confirmPass) {
        setCheckConPasValidation("Confirm password not matched");
      }
    } else {
      inputReset();
      try {
        const { data } = await axios.post(`/api/alumni/register`, {
          ...studentInfo,
        });
        if (
          data ==
          "Sorry, this email address already exists with another account."
        ) {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: data,
          });
        } else {
          Swal.fire({
            icon: "success",
            title: "Success",
            text: data,
          });
        }
      } catch (error) {
        console.log(error.message);
      }
      e.target.reset();
    }
    setOpen(false);
  };

  return (
    <>
      <Container maxWidth="sm">
        <Paper
          sx={{ padding: "20px", my: "20px", border: "1px solid #ccc" }}
          elevation={0}
        >
          <Stack onSubmit={submitHanler} spacing={1} component="form">
            <Typography align="center" variant="bold" component="h1">
              Registration
            </Typography>

            <TextField
              fullWidth
              label="Name"
              type="text"
              placeholder="Name"
              size="small"
              required
              color="secondary"
              helperText="Type your full name and name should be 3 characters long"
              onChange={(e) =>
                setStudentInfo({ ...studentInfo, name: e.target.value })
              }
            ></TextField>
            <Typography color="error">
              {nameValidation ? nameValidation : null}
            </Typography>
            <TextField
              label="Email address"
              type="email"
              fullWidth
              placeholder="E-mail address"
              size="small"
              required
              color="secondary"
              helperText="Please provide a valid email address.Next need to verify"
              onChange={(e) =>
                setStudentInfo({ ...studentInfo, email: e.target.value })
              }
            ></TextField>

            <TextField
              fullWidth
              label="Password"
              type={show ? "text" : "password"}
              placeholder="Password"
              size="small"
              required
              color="secondary"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="start">
                    <IconButton onClick={hideShowPassword}>
                      {show ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              helperText="Password should be at least 6 characters long"
              onChange={(e) =>
                setStudentInfo({ ...studentInfo, password: e.target.value })
              }
            ></TextField>
            <Typography color="error">
              {passValidation ? passValidation : null}
            </Typography>
            <TextField
              fullWidth
              label="Re type password"
              type={show ? "text" : "password"}
              placeholder="Re type password"
              size="small"
              required
              color="secondary"
              helperText="Re type password currefully"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="start">
                    <IconButton onClick={hideShowPassword}>
                      {show ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              onChange={(e) => setConfirmPass(e.target.value)}
            ></TextField>
            <Typography color="error">
              {checkConPasValidation ? checkConPasValidation : null}
            </Typography>

            <Button
              type="submit"
              variant="contained"
              color="secondary"
              fullWidth
              disableFocusRipple={true}
            >
              Registration
            </Button>

            <Typography align="center" sx={{ padingY: "3px" }}>
              Already have an account?
              <NextLink href="/alumni/login" passHress>
                <a> Login</a>
              </NextLink>
            </Typography>
          </Stack>
        </Paper>
      </Container>

      <Backdrop open={open}>
        <CircularProgress color="inherit" />
      </Backdrop>
    </>
  );
}
