import React from "react";
import { Container, Typography, Grid } from "@mui/material";
import ProjectCard from "../components/ProjectCard";

const Projects = () => (
  <Container sx={{ mt: 5 }}>
    <Typography
      variant="h4"
      gutterBottom
      sx={{ fontWeight: "bold", color: "primary.main" }}
    >
      Projects
    </Typography>
    <Grid container spacing={3}>
      <Grid item xs={12} sm={6} md={4}>
        <ProjectCard
          title="Notes App"
          description="Create note/https://sanyukta-note-app.netlify.app/"
          image="/images/notes_app_project.png"
          github="https://github.com/SanyuktaYadav/notes-app"
          deployLink={"https://sanyukta-note-app.netlify.app/"}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <ProjectCard
          title="Greeting Card Maker"
          description="Create your own customizable greeting card, try one for yourself!"
          image="/images/greeting_card_maker_project.png"
          github="https://github.com/SanyuktaYadav/celebration-card-maker"
          deployLink="https://sanyukta-card-maker.netlify.app/"
        />
      </Grid>
    </Grid>
  </Container>
);

export default Projects;
