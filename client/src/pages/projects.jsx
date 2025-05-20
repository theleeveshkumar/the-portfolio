import React, { useEffect, useState } from "react";
import { 
  Box, 
  Typography, 
  Container, 
  Grid, 
  Card, 
  CardMedia, 
  CardContent, 
  CardActions, 
  Button, 
  Chip,
  IconButton,
  useTheme
} from "@mui/material";
import { styled } from "@mui/material/styles";
import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";

// Local JSON data (fallback)
import localProjects from "../assets/portfolio.projects.json";

// Styled components
const ProjectTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  marginBottom: theme.spacing(3),
  position: "relative",
  "&:after": {
    content: '""',
    position: "absolute",
    bottom: -10,
    left: 0,
    width: 60,
    height: 4,
    backgroundColor: theme.palette.primary.main,
  },
}));

const ProjectCard = ({ name, description, image, tags, githubUrl, liveUrl }) => {
  const theme = useTheme();
  
  return (
    <Card 
      elevation={2} 
      sx={{ 
        height: '100%',
        display: 'flex', 
        flexDirection: 'column',
        transition: 'transform 0.3s, box-shadow 0.3s',
        '&:hover': {
          transform: 'translateY(-8px)',
          boxShadow: theme.shadows[8],
        }
      }}
    >
      {image && (
        <CardMedia
          component="img"
          height="180"
          image={image}
          alt={name}
          sx={{ objectFit: "cover" }}
        />
      )}
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography variant="h6" component="div" gutterBottom fontWeight="600">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary" paragraph>
          {description}
        </Typography>
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5, mt: 2 }}>
          {tags && tags.map((tag, index) => (
            <Chip
              key={index}
              label={tag}
              size="small"
              variant="outlined"
              color="primary"
              sx={{ m: 0.5 }}
            />
          ))}
        </Box>
      </CardContent>
      <CardActions sx={{ justifyContent: "space-between", p: 2 }}>
        {githubUrl && (
          <IconButton 
            aria-label="GitHub Repository" 
            href={githubUrl} 
            target="_blank"
            rel="noreferrer"
            size="small"
          >
            <GitHubIcon />
          </IconButton>
        )}
        {liveUrl && (
          <Button 
            size="small" 
            endIcon={<LaunchIcon />}
            href={liveUrl}
            target="_blank"
            rel="noreferrer"
            variant="contained"
            color="primary"
          >
            Live Demo
          </Button>
        )}
      </CardActions>
    </Card>
  );
};

// Main Projects component
const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // Using local JSON for now
    setProjects(localProjects);
    
    // Commented out MongoDB fetch for future use
    /*
    fetch("http://localhost:5000/api/projects")
      .then(res => res.json())
      .then(data => setProjects(data))
      .catch(err => console.error("Failed to fetch from MongoDB:", err));
    */
  }, []);

  return (
    <Box sx={{ py: 8, bgcolor: "background.default" }}>
      <Container>
        <ProjectTitle variant="h3" gutterBottom align="left">
          My Projects
        </ProjectTitle>
        <Grid container spacing={4}>
          {projects.map((project, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <ProjectCard {...project} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Projects;