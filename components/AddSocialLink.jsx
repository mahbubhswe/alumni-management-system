import {
  Button,
  Container,
  Stack,
  TextField,
  Typography,
  Backdrop,
  CircularProgress,
} from "@mui/material";
import axios from "axios";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import React from "react";
import { useState } from "react";
import Swal from "sweetalert2";

function AddSocialLink({ id }) {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const [socialLinks, setSocialLinks] = useState({
    facebook: "",
    linkedin: "",
    twitter: "",
    github: "",
  });

  const handelInput = (e) => {
    setSocialLinks({ ...socialLinks, [e.target.name]: e.target.value });
  };

  const handelSubmit = async (e) => {
    e.preventDefault();
    e.target.reset();
    setOpen(true);
    const apiRes = await axios.post(
      `/api/alumni/addSocialLink?id=${id}`,
      socialLinks
    );
    setOpen(false);
    if (apiRes.data == "Your social links added successfully!") {
      Swal.fire("Success", apiRes.data, "success");
    } else {
      Swal.fire("Failed to add", "Try agin later", "error");
    }
  };
  return (
    <Container
      sx={{
        marginY: "20px",
       
      }}
      maxWidth="sm"
    >
      <Stack
        spacing={2}
        component="form"
        onSubmit={handelSubmit}
        sx={{ background: "#FFFFFF",p:"20px",borderRadius:"12px" }}
      >
        <Typography
          align="center"
          sx={{ color: "gray" }}
          variant="bold"
          component="h2"
        >
          Add Social Links
        </Typography>
        <TextField
          label="Facebook Profile Link"
          type="text"
          placeholder="Facebook link"
          size="small"
          required
          fullWidth
          name="facebook"
          color="secondary"
          onChange={handelInput}
        ></TextField>
        <TextField
          label="Linkedin Profile Link"
          type="text"
          placeholder="Linkedin link"
          size="small"
          required
          fullWidth
          color="secondary"
          name="linkedin"
          onChange={handelInput}
        ></TextField>
        <TextField
          label="Twitter Profile Link"
          type="text"
          placeholder="Twitter link"
          size="small"
          required
          fullWidth
          name="twitter"
          color="secondary"
          onChange={handelInput}
        ></TextField>
        <TextField
          label="Github Profile Link"
          type="text"
          name="github"
          placeholder="Github link"
          size="small"
          required
          fullWidth
          color="secondary"
          onChange={handelInput}
        ></TextField>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Button
            type="button"
            variant="contained"
            color="error"
            size="small"
            onClick={() => router.push("/alumni/profile")}
          >
            Cancel
          </Button>
          <Button
            type="submit"
            variant="contained"
            color="secondary"
            size="small"
          >
            Add
          </Button>
        </div>
      </Stack>
      <Backdrop open={open}>
        <CircularProgress color="inherit" />
      </Backdrop>
    </Container>
  );
}
export default dynamic(() => Promise.resolve(AddSocialLink), {
  ssr: false,
});
