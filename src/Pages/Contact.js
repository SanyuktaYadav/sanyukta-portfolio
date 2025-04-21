import React from "react";
import { Container, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const Contact = () => {
  const theme = useTheme();
  const primaryColor = theme.palette.primary.main;
  return (
    <Container sx={{ mt: 5 }}>
      <Typography
        variant="h4"
        gutterBottom
        sx={{ fontWeight: "bold", color: "primary.main" }}
      >
        Contact
      </Typography>
      <Typography>
        <b>Email:</b> sanyuktayadav77@gmail.com
      </Typography>
      <Typography>
        <b>Phone:</b> +91 7045375553
      </Typography>
      <Typography sx={{ marginY: 2 }}>
        <a
          href="https://www.linkedin.com/in/sanyuktayadav77/"
          style={{
            backgroundColor: "transparent",
            padding: 6,
            margin: 2,
            borderRadius: 8,
            border: "2px solid",
            borderColor: primaryColor,
            color: primaryColor,
          }}
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/SanyuktaYadav"
          style={{
            backgroundColor: "transparent",
            padding: 6,
            margin: 2,
            borderRadius: 8,
            border: "2px solid",
            borderColor: primaryColor,
            color: primaryColor,
          }}
        >
          GitHub
        </a>
        <a
          href="https://leetcode.com/u/sanyuktayadav77/"
          style={{
            backgroundColor: "transparent",
            padding: 6,
            margin: 2,
            borderRadius: 8,
            border: "2px solid",
            borderColor: primaryColor,
            color: primaryColor,
          }}
        >
          Leetcode
        </a>
      </Typography>
    </Container>
  );
};
export default Contact;
