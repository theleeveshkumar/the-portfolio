import React, { useEffect, useState } from "react";
import { Box, Typography, Container, Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import SkillCard from "../components/SkillsCard";

import localSkills from "../assets/portfolio.skills.json";

const SkillsSection = styled(Box)(({ theme }) => ({
  padding: theme.spacing(10, 0),
  minHeight: "calc(100vh - 56px)",
  background: "linear-gradient(160deg, #0f2027, #203a43, #2c5364)",
  color: "#fff",
  position: "relative",
}));

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

const SubTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 500,
  fontSize: "1.25rem",
  color: "#90caf9",
  marginBottom: theme.spacing(4),
  textAlign: "center",
}));

const Skills = () => {
  const [skillsData, setSkillsData] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setSkillsData(localSkills);
    const timer = setTimeout(() => setIsLoaded(true), 300);
    return () => clearTimeout(timer);
  }, []);

  const fadeInAnimation = {
    opacity: isLoaded ? 1 : 0,
    transform: isLoaded ? "translateY(0)" : "translateY(20px)",
    transition: "opacity 0.6s ease, transform 0.6s ease",
  };

  const staggeredFadeInAnimation = (index) => ({
    opacity: isLoaded ? 1 : 0,
    transform: isLoaded ? "translateY(0)" : "translateY(20px)",
    transition: `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${
      index * 0.1
    }s`,
  });

  return (
    <SkillsSection>
      <Container maxWidth="lg" sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", minHeight: "100vh" }}>
        <Box sx={{ mb: 6, ...fadeInAnimation, width: "100%" }}>
          <SectionTitle variant="h4">Technical Expertise</SectionTitle>
          <SubTitle variant="h6">
            A showcase of my technical skills and proficiency levels
          </SubTitle>
        </Box>

        <Grid
          container
          spacing={3}
          sx={{
            ...fadeInAnimation,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {skillsData.map((skill, index) => (
            <Grid item xs={12} sm={6} md={4} key={index} sx={{ display: "flex", justifyContent: "center" }}>
              <Box sx={{ ...staggeredFadeInAnimation(index), width: "100%" }}>
                <SkillCard skill={skill} />
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </SkillsSection>
  );
};

export default Skills;
