import { Container, Divider, Paper, Button, Typography } from "@mui/material";
import React from "react";
import { useState } from "react";
import PollIcon from "@mui/icons-material/Poll";
import axios from "axios";
import dynamic from "next/dynamic";
import useLocalStorage from "@rehooks/local-storage";
import Swal from "sweetalert2";
function Poll({ data }) {
  const [poleList, setPoleList] = useState(data);
  const [userInfo] = useLocalStorage("userInfo");

  const giveVote =async (id, str) => {
   
    try {
      const { data } =await axios.post(`/api/alumni/giveVote?id=${id}`, {
        name: userInfo.name,
        email: userInfo.email,
        vote: str,
      });
   
        Swal.fire({
          icon: "success",
          title: "Success",
          text:data,
          showConfirmButton: false,
          timer: 2000,
        });
      
      console.log(data);
    } catch (error) {
      console.log(error.message);
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
      {poleList.map((item) => {
        return (
          <Paper key={item._id} sx={{ p: "20px", mb: "25px" }}>
            <Typography sx={{ fontSize: "18px", mb: "7px" }}>
              <PollIcon /> {item.title}
            </Typography>

            <Typography sx={{ mb: "5px" }}>{item.description}</Typography>
            <Divider sx={{ my: "10px" }}></Divider>
            <Typography align="right" color="secondary" component="div">
              <Button onClick={()=>giveVote(item._id, "no")}>No</Button>
              <Button onClick={()=> giveVote(item._id, "yes")}>Yes</Button>
            </Typography>
          </Paper>
        );
      })}
    </Container>
  );
}
export default dynamic(() => Promise.resolve(Poll), {
  ssr: false,
});
