import {
  Button,
  Container,
  Backdrop,
  CircularProgress,
  Stack,
  TextField,
  Typography,
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
  const [skill, setSkill] = useState({
    skill1: "",
    skill2: "",
    skill3: "",
    skill4: "",
    skill5: "",
    skill6: "",
    skill7: "",
  });

  const handelInput = (e) => {
    setSkill({ ...skill, [e.target.name]: e.target.value });
  };
  const handelSubmit = async (e) => {
    e.preventDefault();
    e.target.reset();
    setOpen(true);
    const apiRes = await axios.post(`/api/alumni/addSkill?id=${id}`, skill);
    setOpen(false);
    if (apiRes.data == "Your skill added successfully!") {
      Swal.fire("Success", apiRes.data, "success");
    } else {
      Swal.fire("Failed to add", "Try agin later", "error");
    }
  };
  return (
    <Container
      sx={{
        marginY: "20px",
        paddingX: {
          xs: "0px",
          sm: "0px",
          md: "100px",
        },
      }}
    >
      <Stack spacing={2} component="form" onSubmit={handelSubmit}>
        <Typography
          align="center"
          sx={{ color: "gray" }}
          variant="bold"
          component="h2"
        >
          Add Skills
        </Typography>
        <TextField
          label="Write a skill"
          type="text"
          placeholder="Write a skill"
          size="small"
          required
          fullWidth
          name="skill1"
          color="secondary"
          onChange={handelInput}
        ></TextField>
        <TextField
          label="Write a skill"
          type="text"
          placeholder="Write a skill"
          size="small"
          required
          name="skill2"
          fullWidth
          color="secondary"
          onChange={handelInput}
        ></TextField>
        <TextField
          label="Write a skill"
          type="text"
          placeholder="Write a skill"
          size="small"
          required
          name="skill3"
          fullWidth
          color="secondary"
          onChange={handelInput}
        ></TextField>
        <TextField
          label="Write a skill"
          type="text"
          placeholder="Write a skill"
          size="small"
          required
          fullWidth
          color="secondary"
          name="skill4"
          onChange={handelInput}
        ></TextField>
        <TextField
          label="Write a skill"
          type="text"
          placeholder="Write a skill"
          size="small"
          required
          fullWidth
          color="secondary"
          name="skill5"
          onChange={handelInput}
        ></TextField>
        <TextField
          label="Write a skil5"
          type="text"
          placeholder="Write a skill"
          size="small"
          required
          fullWidth
          color="secondary"
          name="skill6"
          onChange={handelInput}
        ></TextField>
        <TextField
          label="Write a skill"
          type="text"
          placeholder="Write a skill"
          size="small"
          required
          fullWidth
          color="secondary"
          name="skill7"
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
