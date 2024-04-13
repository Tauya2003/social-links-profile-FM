import { Avatar, Box, Button, Stack, Typography } from "@mui/material";
import React from "react";
import avatarImg from "../images/avatar-jessica.jpeg";

const Card = () => {
  return (
    <Box
      sx={{
        width: 300,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        bgcolor: "hsl(0, 0%, 12%)",
        borderRadius: 3,
      }}
    >
      <Avatar src={avatarImg} sx={{ width: 75, height: 75, mt: 3 }} />

      <Typography
        sx={{ color: "#fff", fontSize: "1.5rem", mt: 3, fontWeight: 700 }}
      >
        Jessica Randall
      </Typography>

      <Typography sx={{ color: "hsl(75, 94%, 57%)", fontSize: "0.9rem" }}>
        London, United States
      </Typography>

      <Typography
        sx={{ color: "#fff", fontWeight: 400, fontSize: "0.7rem", mt: 2.5 }}
      >
        "Frontend developer and avid reader."
      </Typography>

      <Stack direction={"column"} gap={1} mt={2.5} mb={3}>
        {["Github", "Frontend Mentor", "LinkedIn", "Twitter", "Instagram"].map(
          (item, index) => (
            <Button
              key={index}
              sx={{
                textTransform: "initial",
                color: "#fff",
                bgcolor: "hsl(0, 0%, 20%)",
                width: 250,

                "&:hover": {
                  bgcolor: "hsl(75, 94%, 57%)",
                  color: "hsl(0, 0%, 8%)",
                },
              }}
            >
              {item}
            </Button>
          )
        )}
      </Stack>
    </Box>
  );
};

export default Card;
