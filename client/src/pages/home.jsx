import React from "react";
import {
  Box,
  Typography,
  Button,
  Container,
  Grid,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import waitingIcon from "../assets/waiting.svg";
import { Link as RouterLink } from "react-router-dom";

// MUI Icons
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import RedditIcon from "@mui/icons-material/Reddit";
import WhatsAppIcon from "@mui/icons-material/WhatsApp"; 
import TelegramIcon from "@mui/icons-material/Telegram";
import CodeIcon from "@mui/icons-material/Code";

// Styled Components
const HeroSection = styled(Box)(({ theme }) => ({
  padding: theme.spacing(10, 0),
  minHeight: "calc(100vh - 56px)",
  display: "flex",
  alignItems: "center",
  background: "linear-gradient(160deg, #0f2027, #203a43, #2c5364)",
  color: "#fff",
  position: "relative",
}));

const HeroTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  marginBottom: theme.spacing(1.5),
  fontSize: "2.8rem",
  background: "linear-gradient(to right, #00bcd4, #2196f3)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
}));

const HeroSubtitle = styled(Typography)(({ theme }) => ({
  fontWeight: 500,
  fontSize: "1.5rem",
  color: "#90caf9",
  marginBottom: theme.spacing(2),
}));

const HeroObjective = styled(Typography)(({ theme }) => ({
  maxWidth: "700px",
  fontSize: "1.125rem",
  lineHeight: 1.7,
  color: "#cfd8dc",
  marginTop: theme.spacing(2),
  marginBottom: theme.spacing(4),
}));

const HeroImage = styled("img")(({ theme }) => ({
  width: "100%",
  maxWidth: "400px",
  animation: "float 3s ease-in-out infinite",
  "@keyframes float": {
    "0%": { transform: "translateY(0px)" },
    "50%": { transform: "translateY(-15px)" },
    "100%": { transform: "translateY(0px)" },
  },
}));

const ResumeButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(2),
  padding: theme.spacing(1.2, 5),
  fontSize: "1rem",
  borderRadius: "30px",
  backgroundColor: "#00bcd4",
  color: "#fff",
  fontWeight: 600,
  transition: "all 0.3s ease",
  "&:hover": {
    backgroundColor: "#0097a7",
    boxShadow: "0px 4px 15px rgba(0,188,212,0.4)",
  },
}));

const SocialBar = styled(Box)(({ theme }) => ({
  position: "fixed",
  top: "50%",
  right: "10%",
  transform: "translateY(-50%)",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: theme.spacing(2),
  zIndex: 1000,
  [theme.breakpoints.down("sm")]: {
    display: "none",
  },
}));

const Home = () => {
  return (
    <>
      <SocialBar>
        <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
          <GitHubIcon sx={{ color: "#90caf9", "&:hover": { color: "#fff" }, fontSize: 28 }} />
        </a>
        <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
          <LinkedInIcon sx={{ color: "#90caf9", "&:hover": { color: "#fff" }, fontSize: 28 }} />
        </a>
        <a href="https://twitter.com/yourhandle" target="_blank" rel="noopener noreferrer">
          <TwitterIcon sx={{ color: "#90caf9", "&:hover": { color: "#fff" }, fontSize: 28 }} />
        </a>
        <a href="https://instagram.com/yourprofile" target="_blank" rel="noopener noreferrer">
          <InstagramIcon sx={{ color: "#90caf9", "&:hover": { color: "#fff" }, fontSize: 28 }} />
        </a>
        <a href="https://facebook.com/yourprofile" target="_blank" rel="noopener noreferrer">
          <FacebookIcon sx={{ color: "#90caf9", "&:hover": { color: "#fff" }, fontSize: 28 }} />
        </a>
        <a href="https://reddit.com/user/yourusername" target="_blank" rel="noopener noreferrer">
          <RedditIcon sx={{ color: "#90caf9", "&:hover": { color: "#fff" }, fontSize: 28 }} />
        </a>
        <a href="https://leetcode.com/yourprofile" target="_blank" rel="noopener noreferrer">
          <CodeIcon sx={{ color: "#90caf9", "&:hover": { color: "#fff" }, fontSize: 28 }} />
        </a>
        <a href="https://t.me/yourusername" target="_blank" rel="noopener noreferrer">
          <TelegramIcon sx={{ color: "#90caf9", "&:hover": { color: "#fff" }, fontSize: 28 }} />
        </a>
        <a href="https://wa.me/yourphonenumber" target="_blank" rel="noopener noreferrer">
          <WhatsAppIcon sx={{ color: "#90caf9", "&:hover": { color: "#fff" }, fontSize: 28 }} />
        </a>
        <a href="mailto:youremail@example.com">
          <EmailIcon sx={{ color: "#90caf9", "&:hover": { color: "#fff" }, fontSize: 28 }} />
        </a>
      </SocialBar>
      <HeroSection>
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={7}>
              <Box>
                <HeroTitle variant="h2">Leevesh Kumar</HeroTitle>
                <HeroSubtitle variant="h4">Software Developer</HeroSubtitle>
                <HeroObjective variant="body1">
                  I am a passionate software developer with a keen interest in
                  exploring new technologies and building innovative solutions.
                </HeroObjective>
                <ResumeButton
                  variant="contained"
                  component={RouterLink}
                  to="/resume"
                >
                  View CV
                </ResumeButton>
              </Box>
            </Grid>

            <Grid item xs={12} md={5}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <HeroImage
                  src={waitingIcon}
                  alt="Developer Illustration"
                />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </HeroSection>
    </>
  );
};

export default Home;