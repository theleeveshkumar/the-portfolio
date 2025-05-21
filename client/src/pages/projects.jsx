import React, { useEffect, useState } from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  useTheme,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import ProjectCard from "../components/projectCard";
import projectData from "../assets/portfolio.projects.json"; // your local JSON

// Styled Title
const SectionTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  marginBottom: theme.spacing(4),
  position: "relative",
  "&::after": {
    content: '""',
    position: "absolute",
    bottom: -8,
    left: 0,
    width: 50,
    height: 4,
    backgroundColor: theme.palette.primary.main,
  },
}));

const Projects = () => {
  const theme = useTheme();
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setProjects(projectData);
  }, []);

  return (
    <Box
      sx={{
        py: 10,
        minHeight: "100vh",
        background: "linear-gradient(160deg, #0f2027, #203a43, #2c5364)",
        color: "#fff",
      }}
    >
      <Container>
        <SectionTitle variant="h4">My Projects</SectionTitle>
        <Grid container spacing={4}>
          {projects.map((project, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <ProjectCard
                title={project.title}
                description={project.description}
                imageUrl={project.imageUrl}
                tags={project.tags}
                date={project.date}
                techStack={project.techStack}
                repoLink={project.repoLink}
                liveLink={project.liveLink}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Projects;
