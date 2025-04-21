import React from "react";
import { Card, CardContent, CardMedia, Typography, Button } from "@mui/material";

const ProjectCard = ({ title, description, image, github }) => (
  <Card sx={{ maxWidth: 345 }}>
    <CardMedia component="img" height="140" image={image} alt={title} />
    <CardContent>
      <Typography gutterBottom variant="h5">{title}</Typography>
      <Typography variant="body2">{description}</Typography>
      <Button href={github} target="_blank" sx={{ mt: 1 }}>View Code</Button>
    </CardContent>
  </Card>
);

export default ProjectCard;
