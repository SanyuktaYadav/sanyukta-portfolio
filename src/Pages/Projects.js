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
          title="Food Recipe App"
          description="Search and view your favorite recipes with videos. Built using React and TheMealDB API."
          image="https://via.placeholder.com/300"
          github="https://github.com/yourusername/food-recipe-app"
        />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <ProjectCard
          title="Music Player"
          description="Scroll and play your favorite songs. Built using React."
          image="https://via.placeholder.com/300"
          github="https://github.com/yourusername/music-player"
        />
      </Grid>
    </Grid>
  </Container>
);

export default Projects;
