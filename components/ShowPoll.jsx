import {
  Stack,
  TextField,
  Typography,
  Button,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Table,
  Backdrop,
  CircularProgress,
  IconButton,
  ButtonGroup,
} from "@mui/material";
import React from "react";
import { useState } from "react";
import { useRouter } from "next/router";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import AddIcon from "@mui/icons-material/Add";
import axios from "axios";
import Swal from "sweetalert2";
export default function ShowPole({ data }) {
  const [open, setOpen] = useState(false);
  const [poleList, setPoleList] = useState(data);
  const router = useRouter();
  //filter
  async function searchPole(str) {
    if (str == "") {
      setPoleList(data);
    } else {
      setPoleList(data.filter((item) => item.title == str));
    }
  }

  //delete pole
  const deletePoll = (id) => {
    Swal.fire({
      icon: "question",
      title: "Are you sure?",
      text: "You want to dalete this pole",
      showCancelButton: true,
      reverseButtons: true,
    }).then(async (result) => {
      if (result.isConfirmed) {
        setOpen(true);
        const { data } = await axios.delete(`/api/admin/deletePoll?id=${id}`);
        setOpen(false);
        if (data == "Pole has been deleted successfully") {
          Swal.fire({
            icon: "success",
            title: "Success",
            text: data,
          }).then((result) => {
            if (result.isConfirmed) {
              router.reload(window.location.pathname);
            }
          });
        } else {
          Swal.fire({
            icon: "error",
            title: "Failed to delete pole",
            text: data,
          });
        }
      }
    });
  };
  return (
    <>
      <Typography
        sx={{ color: "gray", mb: "10px" }}
        align="center"
        variant="bold"
        component="h1"
      >
        Manage poll list
      </Typography>
      <Stack direction={{ xs: "column", sm: "column", md: "row" }} spacing={2}>
        <TextField
          type="search"
          label="Search a pole"
          placeholder="Search by title"
          color="secondary"
          size="small"
          sx={{ width: { xs: "350px", sm: "400px", md: "600px" } }}
          onChange={(e) => searchPole(e.target.value)}
        />
        <Button
          type="button"
          disableFocusRipple={true}
          variant="contained"
          color="secondary"
          size="small"
          startIcon={<AddIcon />}
          onClick={() => router.push("/dashboard/manage-poll/create")}
        >
          Create pole
        </Button>
      </Stack>

      <TableContainer
        sx={{
          border: "1px solid #ccc",
          marginTop: "25px",
          borderRadius: "7px",
        }}
      >
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Title</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {poleList.map((item) => {
              return (
                <TableRow key={item._id}>
                  <TableCell>{item.title}</TableCell>
                  <TableCell>{item.description}</TableCell>
                  <TableCell sx={{width:"100px"}}>{item.createdAt}</TableCell>
                  <TableCell>
                    <ButtonGroup>
                      <IconButton onClick={() => deletePoll(item._id)}>
                        <DeleteIcon color="error" />
                      </IconButton>
                      <IconButton
                        onClick={() =>
                          router.push(
                            `/dashboard/manage-poll/update?id=${item._id}`
                          )
                        }
                      >
                        <EditIcon color="secondary" />
                      </IconButton>
                    </ButtonGroup>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <Backdrop open={open}>
        <CircularProgress />
      </Backdrop>
    </>
  );
}
