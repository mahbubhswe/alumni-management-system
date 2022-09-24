import {
  Button,
  Stack,
  TextField,
  Typography,
  Backdrop,
  CircularProgress,
} from "@mui/material";
import React from "react";
import { useState } from "react";
import Swal from "sweetalert2";
import { useRouter } from "next/router";
import axios from "axios";
export default function UpdatePollForm({ data }) {
  const [open, setOpen] = useState(false);
  const [id, setID] = useState(data._id);
  const [title, setTitle] = useState(data.title);
  const [description, setDescription] = useState(data.description);
  const router = useRouter();
  //update pole
  const updatePole = (e) => {
    e.preventDefault();
    Swal.fire({
      icon: "question",
      title: "Are you sure?",
      text: "You want to update this pole",
      showCancelButton: true,
      reverseButtons: true,
    }).then(async (result) => {
      if (result.isConfirmed) {
        setOpen(true);
        e.target.reset();
        const { data } = await axios.put(`/api/admin/updatePoll?id=${id}`, {
          title: title,
          description: description,
        });
        setOpen(false);
        if (data == "Pole updated successfully") {
          Swal.fire({
            icon: "success",
            title: "Success",
            text: data,
          }).then((result) => {
            if (result.isConfirmed) {
              router.push("/dashboard/manage-poll");
            }
          });
        } else {
          Swal.fire({
            icon: "error",
            title: "Failed to update this pole",
            text: data,
          });
        }
      }
    });
  };
  return (
    <>
      <Stack component="form" spacing={2} onSubmit={updatePole}>
        <Typography
          sx={{ color: "gray" }}
          align="center"
          variant="bold"
          component="h1"
        >
          Create a new pole
        </Typography>
        <TextField
          type="text"
          label="Give a title"
          placeholder="Give a title"
          color="secondary"
          size="small"
          value={title}
          required
          onChange={(e) => setTitle(e.target.value)}
        />
        <TextField
          type="text"
          label="Write description"
          placeholder="Write description"
          color="secondary"
          size="small"
          required
          value={description}
          multiline
          rows={8}
          onChange={(e) => setDescription(e.target.value)}
        />
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Button
            type="button"
            variant="contained"
            color="error"
            size="small"
            onClick={() => router.push("/dashboard/manage-poll")}
          >
            Cancel
          </Button>
          <Button
            type="submit"
            variant="contained"
            color="secondary"
            size="small"
          >
           Upate
          </Button>
        </div>
      </Stack>
      <Backdrop open={open}>
        <CircularProgress />
      </Backdrop>
    </>
  );
}
