import React from "react";
import { Globe, Github } from "lucide-react";
import { styled } from "@mui/material/styles";
import { Box, Typography, Chip, Button } from "@mui/material";
import { motion } from "framer-motion";

// Glassmorphic styled card
const GlassCard = styled(motion.div)(({ theme }) => ({
  background: "rgba(255, 255, 255, 0.08)",
  backdropFilter: "blur(8px)",
  borderRadius: "16px",
  border: "1px solid rgba(255, 255, 255, 0.15)",
  boxShadow: "0px 4px 20px rgba(0, 188, 212, 0.15)",
  padding: theme.spacing(3),
  color: "#fff",
  maxWidth: 600,
  height: 500,
  width: "100%",
  margin: "auto",
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(2),
  transition: "transform 0.3s ease, box-shadow 0.3s ease",
  "&:hover": {
    transform: "translateY(-6px)",
    boxShadow: "0 6px 24px rgba(0, 188, 212, 0.25)",
  },
}));

const ProjectImage = styled("img")(({ theme }) => ({
  width: "100%",
  objectFit: "cover",
  borderRadius: "12px",
  height: "100px", 

  [theme.breakpoints.up("sm")]: {
    height: "200px",
  },
}));

const ProjectHeader = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

const ProjectButton = styled(Button)(({ theme }) => ({
  textTransform: "none",
  color: "#90caf9",
  borderColor: "rgba(255, 255, 255, 0.2)",
  "&:hover": {
    backgroundColor: "rgba(0, 188, 212, 0.15)",
    borderColor: "rgba(255, 255, 255, 0.3)",
  },
}));

const ProjectCard = ({
  title,
  date,
  imageUrl,
  description,
  techStack,
  liveLink,
  repoLink,
}) => {
  return (
    <GlassCard
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      {imageUrl && <ProjectImage src={imageUrl} alt={`${title} preview`} />}

      <ProjectHeader>
        <Typography variant="h6" fontWeight="100">
          {title}
        </Typography>
        <Typography variant="caption" sx={{ opacity: 0.7 }}>
          {date}
        </Typography>
      </ProjectHeader>

      <Typography
        variant="body2"
        sx={{ color: "rgba(255, 255, 255, 0.8)", whiteSpace: "pre-line" }}
      >
        {description}
      </Typography>

      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
        {techStack?.map((tech, index) => (
          <Chip
            key={index}
            label={tech}
            size="small"
            variant="outlined"
            color="primary"
          />
        ))}
      </Box>

      <Box sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}>
        {liveLink && (
          <ProjectButton
            variant="outlined"
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            startIcon={<Globe size={18} />}
          >
            Website
          </ProjectButton>
        )}
        {repoLink && (
          <ProjectButton
            variant="outlined"
            href={repoLink}
            target="_blank"
            rel="noopener noreferrer"
            startIcon={<Github size={18} />}
          >
            Source
          </ProjectButton>
        )}
      </Box>
    </GlassCard>
  );
};

export default ProjectCard;
