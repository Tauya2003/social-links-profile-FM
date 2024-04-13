import React from "react";
import { Box } from "@mui/material";
import Card from "../components/Card";

const Home = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        bgcolor: "hsl(0, 0%, 8%)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Card />
    </Box>
  );
};

export default Home;
