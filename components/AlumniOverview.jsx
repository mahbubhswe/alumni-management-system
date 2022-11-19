import { Typography } from "@mui/material";
import React from "react";
import { Chart } from "react-google-charts";

export default function ViewChart({ data }) {
  const chartData = [
    ["Alumni", "Join"],
    ["Total", data.totalAlumni],
    ["Today", data.joinToday],
  ];

  const options = {
    is3D: true,
  };

  return (
    <>
      <Typography
        variant="bold"
        component="div"
        sx={{
          fontSize: "25px",
          fontWeight: 700,
          textAlign: "center",
          mt: "25px",
        }}
      >
        Alumni Overview
      </Typography>
      <Chart
        chartType="PieChart"
        data={chartData}
        options={options}
        height="350px"
        legendToggle
      />
    </>
  );
}
