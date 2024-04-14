import { Avatar, Box, Button, Stack, Typography } from "@mui/material";
import React from "react";
import avatarImg from "../images/avatar-tauya.jpg";

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
        Tauya Mtowodzwa
      </Typography>

      <Typography sx={{ color: "hsl(75, 94%, 57%)", fontSize: "0.9rem" }}>
        Harare, Zimbabwe
      </Typography>

      <Typography
        sx={{ color: "#fff", fontWeight: 400, fontSize: "0.7rem", mt: 2.5 }}
      >
        "Frontend developer and avid reader."
      </Typography>

      <Stack direction={"column"} gap={1} mt={2.5} mb={3}>
        {[
          { name: "Github", link: "https://github.com/tauya2003" },
          {
            name: "Frontend Mentor",
            link: "https://www.frontendmentor.io/profile/Tauya2003",
          },
          {
            name: "LinkedIn",
            link: "http://www.linkedin.com/in/tauyanashe-mtowodzwa/",
          },
          { name: "Twitter", link: "https://twitter.com/ayuat2003" },
          { name: "Instagram", link: "https://www.instagram.com/tau.ya_/" },
        ].map((item, index) => (
          <Button
            key={index}
            onClick={() => {
              window.open(item.link);
            }}
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
            {item.name}
          </Button>
        ))}
      </Stack>
    </Box>
  );
};

export default Card;
