import React from "react";
import { Container, Typography, Box, List, ListItem } from "@mui/material";

const Pill = ({ value }) => {
  return (
    <Box
      sx={{
        backgroundColor: "primary.light",
        color: "primary.contrastText",
        px: 2,
        py: 0.5,
        borderRadius: "20px",
        fontWeight: 800,
        fontSize: "0.9rem",
        boxShadow: 1,
      }}
    >
      {value}
    </Box>
  );
};

const About = () => {
  return (
    <Container sx={{ mt: 5 }}>
      {/* About Me */}
      <Typography
        variant="h4"
        gutterBottom
        sx={{ fontWeight: "bold", color: "primary.main" }}
      >
        About Me
      </Typography>

      <Typography variant="body1" sx={{ fontSize: "1.1rem", lineHeight: 1.7 }}>
        I am a <strong>skilled full stack developer</strong> with over{" "}
        <strong>3.5 years</strong> of experience. I specialize in{" "}
        <strong>React.js</strong> and <strong>Node.js</strong>, and love
        crafting clean, interactive user interfaces.
        <br />I am great at <strong>reading</strong> and{" "}
        <strong>writing</strong> clean, scalable code.
      </Typography>

      {/* Skills */}
      <Typography
        variant="h4"
        gutterBottom
        sx={{ fontWeight: "bold", color: "primary.main", mt: 4 }}
      >
        My Skills
      </Typography>

      {/* Languages */}
      <Box sx={{ mb: 1 }}>
        <Typography variant="h6" sx={{ fontWeight: 600 }}>
          Languages
        </Typography>
        <List sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
          {["JavaScript", "Java", "Python"].map((skill) => (
            <ListItem key={skill} disablePadding sx={{ width: "auto" }}>
              <Pill value={skill} />
            </ListItem>
          ))}
        </List>
      </Box>

      {/* Web Development */}
      <Box sx={{ mb: 1 }}>
        <Typography variant="h6" sx={{ fontWeight: 600 }}>
          Frontend
        </Typography>
        <List sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
          {["React.js", "Ember.js", "HTML", "CSS"].map((skill) => (
            <ListItem key={skill} disablePadding sx={{ width: "auto" }}>
              <Pill value={skill} />
            </ListItem>
          ))}
        </List>
      </Box>

      {/* Dev Tools */}
      <Box sx={{ mb: 1 }}>
        <Typography variant="h6" sx={{ fontWeight: 600 }}>
          Dev Tools
        </Typography>
        <List sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
          {["VS Code", "Git", "GitHub"].map((skill) => (
            <ListItem key={skill} disablePadding sx={{ width: "auto" }}>
              <Pill value={skill} />
            </ListItem>
          ))}
        </List>
      </Box>

      {/* Core Skills */}
      <Box>
        <Typography variant="h6" sx={{ fontWeight: 600 }}>
          Core Skills
        </Typography>
        <List sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
          {[
            "Object Oriented Programming",
            "Data Structures",
            "Problem Solving",
          ].map((skill) => (
            <ListItem key={skill} disablePadding sx={{ width: "auto" }}>
              <Pill value={skill} />
            </ListItem>
          ))}
        </List>
      </Box>
    </Container>
  );
};

export default About;
