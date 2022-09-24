import {
  Backdrop,
  Button,
  CircularProgress,
  Container,
  Paper,
  Stack,
  Step,
  StepContent,
  StepLabel,
  TextField,
  Typography,
  Stepper,
} from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import Layout from "../../components/Layout";
export default function Index() {
  const [code, setCode] = useState(Math.floor(100000 + Math.random() * 900000));
  const [email, setEmail] = useState();
  const [newPassword, setNewPassword] = useState();
  const [open, setOpen] = useState(false);
  const [apiRes, setApiRes] = useState();
  const [apiResErr, setApiResErr] = useState();
  const [inputCode, setInputCode] = useState();
  const [checkCode, setCheckCode] = useState();
  const [activeStep, setActiveStep] = useState(0);
  const [passChangeCon, setPassChangeCon] = useState();
  //send code
  const sendVerificationCode = async (e) => {
    e.preventDefault();
    setOpen(true);
    const { data } = await axios.post(
      `/api/alumni/sendVerificationCode?email=${email}&code=${code}`
    );
    if (data == "Sorry, no account found with this email address") {
      setApiResErr(data);
    } else {
      setApiRes(data);
      setActiveStep(1);
    }
    setOpen(false);
  };

  //verify code
  const verificationCode = (e) => {
    e.preventDefault();
    if (code == inputCode) {
      setActiveStep(2);
    } else {
      setApiRes();
      setCheckCode("You have inputed invalid code");
    }
  };

  //change password
  const changePassword = async (e) => {
    e.preventDefault();
    setOpen(true);
    setActiveStep(3);
    try {
      const { data } = await axios.put(
        `/api/alumni/resetPassword?email=${email}&password=${newPassword}`
      );
      setPassChangeCon(data);
    } catch (error) {
      console.log(error.message);
    }
    setOpen(false);
  };
  return (
    <>
      <Layout pageTitle="password reset">
        <Container sx={{ mt: "50px" }}>
          <Paper
            variant="outlined"
            sx={{
              width: { xs: "100%", sm: "90%", md: "50%" },
              marginX: "auto",
              p: "20px",
            }}
          >
            <Stepper activeStep={activeStep} orientation="vertical">
              <Step>
                <StepLabel>Send code</StepLabel>
                <StepContent>
                  <Stack
                    spacing={1}
                    component="form"
                    onSubmit={sendVerificationCode}
                  >
                    <Typography align="center" color="error">
                      {apiResErr ? apiResErr : null}
                    </Typography>
                    <TextField
                      type="email"
                      size="small"
                      color="secondary"
                      label="Enter email address"
                      variant="outlined"
                      placeholder="Enter email address"
                      required
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <Button
                      disabled={email ? false : true}
                      color="secondary"
                      variant="contained"
                      type="submit"
                    >
                      Send code
                    </Button>
                  </Stack>
                </StepContent>
              </Step>
              <Step>
                <StepLabel>Veryfication code</StepLabel>
                <StepContent>
                  <Stack
                    spacing={1}
                    component="form"
                    onSubmit={verificationCode}
                  >
                    <Typography align="center" color="secondary">
                      {apiRes ? apiRes : null}
                    </Typography>
                    <Typography align="center" color="error">
                      {checkCode ? checkCode : null}
                    </Typography>
                    <TextField
                      type="text"
                      size="small"
                      color="secondary"
                      label="Enter code"
                      variant="outlined"
                      placeholder="Type verification code"
                      required
                      onChange={(e) => setInputCode(e.target.value)}
                    />
                    <Button
                      disabled={inputCode ? false : true}
                      color="secondary"
                      variant="contained"
                      type="submit"
                    >
                      Verify code
                    </Button>
                  </Stack>
                </StepContent>
              </Step>
              <Step>
                <StepLabel>Change password</StepLabel>
                <StepContent>
                  <Stack spacing={1} component="form" onSubmit={changePassword}>
                    <TextField
                      type="text"
                      size="small"
                      color="secondary"
                      label="Enter new password"
                      variant="outlined"
                      placeholder="Enter new password"
                      required
                      onChange={(e) => setNewPassword(e.target.value)}
                    />
                    <Button
                      disabled={newPassword ? false : true}
                      color="secondary"
                      variant="contained"
                      type="submit"
                    >
                      Change password
                    </Button>
                  </Stack>
                </StepContent>
              </Step>
            </Stepper>
            <Typography color="secondary" align="center">
              {passChangeCon ? passChangeCon : null}
            </Typography>
          </Paper>
        </Container>
      </Layout>
      <Backdrop open={open}>
        <CircularProgress sx={{ color: "#115D56" }} />
      </Backdrop>
    </>
  );
}
