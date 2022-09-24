import {
  Button,
  Container,
  Paper,
  Stack,
  TextField,
  Box,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Divider,
  Backdrop,
} from "@mui/material";
import React, { useState } from "react";
import axios from "axios";
import CircularProgress from "@mui/material/CircularProgress";
import useLocalStorage from "@rehooks/local-storage";
import useSWR from "swr";
import { FadeLoader } from "react-spinners";
import Swal from "sweetalert2";
const getProfileInfo = (url) => axios.get(url).then((res) => res.data);
export default function UpdateProfile() {
  const [userInfo] = useLocalStorage("userInfo");
  const { data, error } = useSWR(
    `/api/alumni/getProfileInfo?email=${userInfo.email}`,
    getProfileInfo
  );
  const [open, setOpen] = useState(false);
  const [nameValidation, setNameValidation] = useState();
  const [phoneValidation, setPhoneValidation] = useState();
  const [studentInfo, setStudentInfo] = useState({
    name: data ? data.name : null,
    phone: data ? data.phone : null,
    address: data ? data.address : null,
    gander: data ? data.gander : null,
    maritalStatus: data ? data.maritalStatus : null,
    dateOfBirth: data ? data.dateOfBirth : null,
    dep: data ? data.dep : null,
    batch: data ? data.batch : null,
    vrstyName: data ? data.vrstyName : null,
    passingYear: data ? data.passingYear : null,
    cgpa: data ? data.cgpa : null,
    favoritSubject: data ? data.favoritSubject : null,
    professionalTitle: data ? data.professionalTitle : null,
    expOrFra: data ? data.expOrFra : null,
    currentJob: data ? data.currentJob : null,
  });
  const id = data ? data._id : null
  //client side data fatchin
  if (!data) {
    return (
      <div style={{ height: "100%", display: "grid", placeContent: "center" }}>
        <FadeLoader />
      </div>
    );
  }
  //update
  const submitHanler = async (e) => {
    e.preventDefault();
    if (studentInfo.name.length < 3 || studentInfo.phone.length < 11) {
      if (studentInfo.name.length < 3) {
        setNameValidation("Name must be at least 3 characters long");
      }
      if (studentInfo.phone.length < 11) {
        setPhoneValidation(
          "Contact number should be at least 11 characters long"
        );
      }
    } else {
      Swal.fire({
        title: "Are you sure?",
        text: "Do you want to update now.",
        icon: "question",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes",
      }).then(async (result) => {
        if (result.value) {
          setOpen(true);
          const { data } = await axios.put(
            `/api/alumni/updateProfile?id=${id}`,
            {
              ...studentInfo,
            }
          );
          setOpen(false);
          if (data == "Profile updated successfully") {
            Swal.fire({
              title: "Profile updated",
              text: "Profile updated successfully",
              icon: "success",
              confirmButtonColor: "#3085d6",
              confirmButtonText: "Ok",
            });
          } else {
            Swal.fire({
              title: "Failed to updated",
              text: "Sorry, we couldn't update your profile",
              icon: "error",
              confirmButtonColor: "#3085d6",
              confirmButtonText: "Ok",
            });
          }
        }
      });
    }
  };

  return (
    <>
      <Container
        sx={{
          marginY: "20px",
          paddingX: {
            xs: "0px",
            sm: "0px",
            md: "100px"
          },
        }}
      >
        <Paper sx={{ padding: "30px" }} variant="outlined">
          <Stack onSubmit={submitHanler} spacing={2} component="form">
            <Typography align="center" variant="bold" component="h1">
              Update your profile
            </Typography>

            <Divider textAlign="left">Personal Information</Divider>
            <TextField
              label="Name"
              type="text"
              placeholder="Name"
              size="small"
              required
              color="secondary"
              value={studentInfo.name}
              helperText="Type your full name and name should be 3 characters long"
              onChange={(e) =>
                setStudentInfo({ ...studentInfo, name: e.target.value })
              }
            ></TextField>
            <Typography color="error">
              {nameValidation ? nameValidation : null}
            </Typography>
            <TextField
              label="Mobile/Phone"
              type="tel"
              placeholder="Mobile/Phone"
              size="small"
              required
              color="secondary"
              value={studentInfo.phone}
              helperText="Provide a valid phone number"
              onChange={(e) =>
                setStudentInfo({ ...studentInfo, phone: e.target.value })
              }
            ></TextField>
            <Typography color="error">
              {phoneValidation ? phoneValidation : null}
            </Typography>
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

            <TextField
              label="Date of Birth"
              type="date"
              placeholder="Date of Birth"
              size="small"
              required
              value={studentInfo.dateOfBirth}
              color="secondary"
              onChange={(e) =>
                setStudentInfo({ ...studentInfo, dateOfBirth: e.target.value })
              }
            ></TextField>
            <TextField
              label="Address"
              type="text"
              placeholder="Address"
              size="small"
              required
              value={studentInfo.address}
              color="secondary"
              helperText="Type your full address"
              onChange={(e) =>
                setStudentInfo({ ...studentInfo, address: e.target.value })
              }
            ></TextField>
            <Divider textAlign="left">Educational Information</Divider>
            <FormControl size="small" color="secondary" required>
              <InputLabel>Select versity</InputLabel>
              <Select
                value={studentInfo.vrstyName}
                onChange={(e) =>
                  setStudentInfo({ ...studentInfo, vrstyName: e.target.value })
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
            <TextField
              label="Batch"
              type="number"
              placeholder="Batch"
              size="small"
              required
              color="secondary"
              value={studentInfo.batch}
              onChange={(e) =>
                setStudentInfo({ ...studentInfo, batch: e.target.value })
              }
            ></TextField>
            <TextField
              label="Year of Passing"
              type="text"
              placeholder="Year of Passing"
              size="small"
              required
              value={studentInfo.passingYear}
              color="secondary"
              onChange={(e) =>
                setStudentInfo({ ...studentInfo, passingYear: e.target.value })
              }
            ></TextField>

            <TextField
              label="CGPA"
              type="text"
              placeholder="CGPA"
              size="small"
              required
              value={studentInfo.cgpa}
              color="secondary"
              onChange={(e) =>
                setStudentInfo({ ...studentInfo, cgpa: e.target.value })
              }
            ></TextField>
            <TextField
              label="Favorite subject"
              type="text"
              placeholder="Favorite subject"
              size="small"
              required
              value={studentInfo.favoritSubject}
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
              value={studentInfo.professionalTitle}
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
              value={studentInfo.expOrFra}
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
              value={studentInfo.currentJob}
              color="secondary"
              helperText="Give details information where you are working? Office location etc"
              multiline
              rows={4}
              onChange={(e) =>
                setStudentInfo({ ...studentInfo, currentJob: e.target.value })
              }
            ></TextField>
            <Box style={{ textAlign: "center" }}>
              <Button
                type="submit"
                variant="contained"
                color="secondary"
                fullWidth
                disableFocusRipple={true}
              >
                Update now
              </Button>
            </Box>
          </Stack>
        </Paper>
      </Container>

      <Backdrop open={open}>
        <CircularProgress color="inherit" />
      </Backdrop>
    </>
  );
}
