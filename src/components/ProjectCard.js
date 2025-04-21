import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
} from "@mui/material";

const ProjectCard = ({ title, description, image, github, deployLink }) => (
  <Card sx={{ maxWidth: 345 }}>
    <a href={deployLink} target="_blank" rel="noopener noreferrer">
      <CardMedia component="img" height="240" image={image} alt={title}   sx={{ borderRadius: '8px', objectFit: 'cover' }} />
    </a>
    <CardContent>
      <Typography gutterBottom variant="h5">
        {title}
      </Typography>
      <Typography variant="body2">{description}</Typography>
      <Button href={github} target="_blank" sx={{ mt: 1 }}>
        View Code
      </Button>
      <Button
        href={deployLink}
        target="_blank"
        rel="noopener noreferrer"
        sx={{ mt: 1 }}
      >
        Site Link
      </Button>
    </CardContent>
  </Card>
);

export default ProjectCard;
