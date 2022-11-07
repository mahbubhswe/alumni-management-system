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
    id: "",
    email: "",
    password: "",
    phone: "",
    address: "",
    gander: "",
    maritalStatus: "",
    dateOfBirth: "",
    dep: "",
    batch: "",
    vrstyName: "",
    passingYear: "",
    cgpa: "",
    favoritSubject: "",
    expOrFra: "",
    currentJob: "",
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
      studentInfo.password != confirmPass ||
      studentInfo.phone.length < 11
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
      if (studentInfo.phone.length < 11) {
        setPhoneValidation(
          "Contact number should be at least 11 characters long"
        );
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
      <Container maxWidth="md">
        <Paper
          sx={{ padding: "20px", my: "20px", border: "1px solid #ccc" }}
          elevation={0}
        >
          <Stack onSubmit={submitHanler} spacing={2} component="form">
            {/* <Typography align="center">
              <NextImage
                src="/img/logo.png"
                alt="logo"
                width={100}
                height={100}
              />
            </Typography> */}

            <Typography align="center" variant="bold" component="h1">
              Registration
            </Typography>
            <Divider textAlign="left">Login Information</Divider>

            <TextField
              label="Email address"
              type="email"
              placeholder="E-mail address"
              size="small"
              required
              color="secondary"
              helperText="Please provide a valid email address.Next need to verify"
              onChange={(e) =>
                setStudentInfo({ ...studentInfo, email: e.target.value })
              }
            ></TextField>
            <Stack
              direction={{ xs: "column", sm: "row", md: "row" }}
              spacing={1}
            >
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
              </Typography>{" "}
            </Stack>
            <Divider textAlign="left">Personal Information</Divider>
            <Stack
              direction={{ xs: "column", sm: "row", md: "row" }}
              spacing={1}
            >
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
                fullWidth
                label="Mobile/Phone"
                type="tel"
                placeholder="Mobile/Phone"
                size="small"
                required
                color="secondary"
                helperText="Provide a valid phone number"
                onChange={(e) =>
                  setStudentInfo({ ...studentInfo, phone: e.target.value })
                }
              ></TextField>
              <Typography color="error">
                {phoneValidation ? phoneValidation : null}
              </Typography>
            </Stack>

            <FormControl size="small" color="secondary" required>
              <InputLabel>Select gander</InputLabel>
              <Select
                required
                value={studentInfo.gander}
                onChange={(e) =>
                  setStudentInfo({ ...studentInfo, gander: e.target.value })
                }
              >
                <MenuItem value="male">Male</MenuItem>
                <MenuItem value="female">Female</MenuItem>
              </Select>
            </FormControl>

            <FormControl size="small" color="secondary" required>
              <InputLabel>Select</InputLabel>
              <Select
                required
                value={studentInfo.maritalStatus}
                onChange={(e) =>
                  setStudentInfo({
                    ...studentInfo,
                    maritalStatus: e.target.value,
                  })
                }
              >
                <MenuItem value="married">Married</MenuItem>
                <MenuItem value="unmarried">Unmarried</MenuItem>
              </Select>
            </FormControl>

            <Stack
              direction={{ xs: "column", sm: "row", md: "row" }}
              spacing={1}
            >
              <TextField
                fullWidth
                label="Date of Birth"
                type="date"
                placeholder="Date of Birth"
                size="small"
                required
                color="secondary"
                onChange={(e) =>
                  setStudentInfo({
                    ...studentInfo,
                    dateOfBirth: e.target.value,
                  })
                }
              ></TextField>
              <TextField
                fullWidth
                label="Address"
                type="text"
                placeholder="Address"
                size="small"
                required
                color="secondary"
                helperText="Type your full address"
                onChange={(e) =>
                  setStudentInfo({ ...studentInfo, address: e.target.value })
                }
              ></TextField>
            </Stack>
            <Divider textAlign="left">Educational Information</Divider>

            <FormControl size="small" color="secondary" required>
              <InputLabel>Select versity</InputLabel>
              <Select
                value={studentInfo.vrstyName}
                onChange={(e) =>
                  setStudentInfo({
                    ...studentInfo,
                    vrstyName: e.target.value,
                  })
                }
              >
                <MenuItem value="Daffodil International University">
                  Daffodil International University
                </MenuItem>
                <MenuItem value="East West University">
                  East West University
                </MenuItem>
                <MenuItem value="North South University">
                  North South University
                </MenuItem>
                <MenuItem value="American International University-Bangladesh">
                  American International University-Bangladesh
                </MenuItem>
                <MenuItem value="East West University">
                  East West University
                </MenuItem>
                <MenuItem value="Asian University of Bangladesh">
                  Asian University of Bangladesh
                </MenuItem>
                <MenuItem value="BRAC University">BRAC University</MenuItem>
                <MenuItem value="Stamford University Bangladesh">
                  Stamford University Bangladesh
                </MenuItem>
                <MenuItem value="Eastern University">
                  Eastern University
                </MenuItem>
                <MenuItem value="Independent University, Bangladesh">
                  Independent University, Bangladesh
                </MenuItem>
                <MenuItem value="Dhaka International University">
                  Dhaka International University
                </MenuItem>
                <MenuItem value="Southeast University">
                  Southeast University
                </MenuItem>
              </Select>
            </FormControl>
            <FormControl size="small" color="secondary" required>
              <InputLabel>Department</InputLabel>
              <Select
                required
                value={studentInfo.dep}
                onChange={(e) =>
                  setStudentInfo({ ...studentInfo, dep: e.target.value })
                }
              >
                <MenuItem value="swe">SWE</MenuItem>
                <MenuItem value="cse">CSE</MenuItem>
                <MenuItem value="is">IS</MenuItem>
                <MenuItem value="eee">EEE</MenuItem>
              </Select>
            </FormControl>
            <Stack
              direction={{ xs: "column", sm: "row", md: "row" }}
              spacing={1}
            >
              <TextField
                fullWidth
                label="Student ID"
                type="text"
                placeholder="Student Id"
                size="small"
                required
                color="secondary"
                helperText="Provide valid student ID"
                onChange={(e) =>
                  setStudentInfo({ ...studentInfo, id: e.target.value })
                }
              ></TextField>

              <TextField
                fullWidth
                label="Batch"
                type="number"
                placeholder="Batch"
                size="small"
                required
                color="secondary"
                onChange={(e) =>
                  setStudentInfo({ ...studentInfo, batch: e.target.value })
                }
              ></TextField>
            </Stack>
            <Stack
              direction={{ xs: "column", sm: "row", md: "row" }}
              spacing={1}
            >
              <TextField
                fullWidth
                label="Year of Passing"
                type="text"
                placeholder="Year of Passing"
                size="small"
                required
                color="secondary"
                onChange={(e) =>
                  setStudentInfo({
                    ...studentInfo,
                    passingYear: e.target.value,
                  })
                }
              ></TextField>

              <TextField
                fullWidth
                label="CGPA"
                type="text"
                placeholder="CGPA"
                size="small"
                required
                color="secondary"
                onChange={(e) =>
                  setStudentInfo({ ...studentInfo, cgpa: e.target.value })
                }
              ></TextField>
            </Stack>
            <TextField
              label="Favorite subject"
              type="text"
              placeholder="Favorite subject"
              size="small"
              required
              color="secondary"
              onChange={(e) =>
                setStudentInfo({
                  ...studentInfo,
                  favoritSubject: e.target.value,
                })
              }
            ></TextField>

            <Divider textAlign="left">Professional Information</Divider>
            <TextField
              label="Professional title"
              type="text"
              placeholder="Profession title"
              size="small"
              required
              color="secondary"
              onChange={(e) =>
                setStudentInfo({
                  ...studentInfo,
                  professionalTitle: e.target.value,
                })
              }
            ></TextField>
            <TextField
              label="Job Experience/Frasher"
              type="text"
              placeholder="01/02 year or Frasher"
              size="small"
              color="secondary"
              required
              helperText="Give details information if you have any job experience"
              multiline
              rows={4}
              onChange={(e) =>
                setStudentInfo({ ...studentInfo, expOrFra: e.target.value })
              }
            ></TextField>
            <TextField
              label="Currently where are you working?"
              type="text"
              placeholder="Company name"
              size="small"
              color="secondary"
              helperText="Give details information where you are working? Office location etc"
              multiline
              rows={4}
              onChange={(e) =>
                setStudentInfo({ ...studentInfo, currentJob: e.target.value })
              }
            ></TextField>

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
