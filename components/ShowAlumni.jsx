import React, { useMemo, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import axios from "axios";
import { useRouter } from "next/router";
import {
  AppBar,
  Backdrop,
  CircularProgress,
  Dialog,
  IconButton,
  Slide,
  Button,
  Toolbar,
  Typography,
  TextField,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import DetailsIcon from "@mui/icons-material/Details";
import DeleteIcon from "@mui/icons-material/Delete";
import Swal from "sweetalert2";
import SendIcon from "@mui/icons-material/Send";
import ShowAlumniDetails from "../components/ShowAlumniDetails";
import CloseIcon from "@mui/icons-material/Close";
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
export default function ShowAlumni({ data }) {
  const [alumniList, setAlumniLIst] = useState(data);
  const [alumni, setAlumni] = useState();
  const [open, setOpen] = useState(false);
  const [showDailog, setShowDailog] = useState(false);
  const router = useRouter();
  const columns = useMemo(
    () => [
      { field: "name", headerName: "Name", width: "200" },
      {
        field: "email",
        headerName: "Send email",
        width: "150",
        renderCell: (params) => {
          return (
            <Button
              href={"mailto:" + params.row.email}
              size="small"
              endIcon={<SendIcon />}
              variant="contained"
              color="secondary"
              component="a"
            >
              Send Email
            </Button>
          );
        },
      },
      { field: "phone", headerName: "Phone", width: "100" },
      { field: "vrstyName", headerName: "Versity", width: "300" },
      { field: "dep", headerName: "Department", width: "100" },
      {
        field: "id",
        headerName: "Details",
        width: "100",
        renderCell: (params) => {
          return (
            <IconButton
              variant="contained"
              sx={{ color: "#73C9A7" }}
              onClick={() => {
                setAlumni(params.row);
                setShowDailog(true);
              }}
            >
              <DetailsIcon />
            </IconButton>
          );
        },
      },
      {
        field: "_id",
        headerName: "Action",
        width: "100",
        renderCell: (params) => {
          return (
            <IconButton
              variant="contained"
              sx={{ color: "#E15963" }}
              onClick={() => deleteAccount(params.row.email)}
            >
              <DeleteIcon />
            </IconButton>
          );
        },
      },
    ],
    [alumniList]
  );

  //delete Account
  async function deleteAccount(email) {
    Swal.fire({
      icon: "question",
      title: "Are you sure?",
      text: "Want to delete this account?",
      showCancelButton: true,
      reverseButtons: true,
    }).then(async (result) => {
      if (result.isConfirmed) {
        setOpen(true);
        const { data } = await axios.delete(
          `/api/alumni/deleteAccount?email=${email}`
        );
        setOpen(false);
        if (data == "Account has been deleted successfully") {
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
            title: "Failed to delete account",
            text: data,
          });
        }
      }
    });
  }

  //filter decord by phone
  function searchAlumni(phone) {
    if (phone == "") {
      setAlumniLIst(data);
    } else {
      setAlumniLIst(data.filter((item) => item.phone == phone));
    }
  }

  return (
    <>
      <Typography
        sx={{ color: "gray", mb: "10px" }}
        align="center"
        variant="bold"
        component="h1"
      >
        Manage Alumni
      </Typography>

      <TextField
        type="search"
        label="Search"
        placeholder="Search by phone"
        color="secondary"
        size="small"
        fullWidth
        endIcon={<SearchIcon />}
        onChange={(e) => searchAlumni(e.target.value)}
      />
      <br></br>
      <br></br>
      <div style={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={alumniList}
          columns={columns}
          getRowId={(row) => row._id}
          pageSize={5}
          rowsPerPageOptions={[5]}
        />
      </div>
      {/* //show details */}
      <Dialog
        fullScreen
        open={showDailog}
        onClose={() => setShowDailog(!showDailog)}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: "relative", background: "#0D1013" }}>
          <Toolbar>
            <Typography
              sx={{ ml: 2, flex: 1 }}
              variant="h6"
              component="div"
              align="center"
            >
              Check Alumni Details
            </Typography>
            <IconButton
              edge="start"
              color="inherit"
              onClick={() => setShowDailog(false)}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
          </Toolbar>
        </AppBar>

        <ShowAlumniDetails alumni={alumni} />
      </Dialog>
      <Backdrop open={open}>
        <CircularProgress />
      </Backdrop>
    </>
  );
}
