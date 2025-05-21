import React from "react";
import JavascriptIcon from "@mui/icons-material/Javascript";
import HtmlIcon from "@mui/icons-material/Html";
import CssIcon from "@mui/icons-material/Css";
import CodeIcon from "@mui/icons-material/Code";
import StorageIcon from "@mui/icons-material/Storage";
import CloudIcon from "@mui/icons-material/Cloud";
import WebIcon from "@mui/icons-material/Web";
import ApiIcon from "@mui/icons-material/Api";
import TerminalIcon from "@mui/icons-material/Terminal";
import DataObjectIcon from "@mui/icons-material/DataObject";
import IntegrationInstructionsIcon from "@mui/icons-material/IntegrationInstructions";
import MemoryIcon from "@mui/icons-material/Memory";
// Add more as needed
import {
  Box,
  Typography,
  Card,
  CardContent,
  Chip,
  LinearProgress,
} from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledCard = styled(Card)(({ theme }) => ({
  width: 301,
  height: 160,
  transition: "transform 0.3s ease, box-shadow 0.3s ease",
  backgroundColor: "rgba(255, 255, 255, 0.08)",
  backdropFilter: "blur(8px)",
  borderRadius: "12px",
  border: "1px solid rgba(255, 255, 255, 0.12)",
  "&:hover": {
    transform: "translateY(-8px)",
    boxShadow: "0px 8px 25px rgba(0, 188, 212, 0.3)",
  },
}));

const StyledCardContent = styled(CardContent)(({ theme }) => ({
  padding: theme.spacing(1)
}));

const SkillName = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  fontSize: "1.15rem",
  color: "#fff",
  marginLeft: theme.spacing(1)
}));



const PriorityChip = styled(Chip)(({ theme, priority }) => {
  const priorityColors = {
    high: "rgba(76, 175, 80, 0.8)",
    medium: "rgba(33, 150, 243, 0.8)",
    low: "rgba(255, 152, 0, 0.8)",
  };

  return {
    backgroundColor:
      priorityColors[priority.toLowerCase()] || "rgba(158, 158, 158, 0.8)",
    color: "#fff",
    borderRadius: "20px",
    fontWeight: 500,
    fontSize: "0.75rem",
  };
});

const StyledLinearProgress = styled(LinearProgress)(({ theme, color }) => {
  const progressColors = {
    success: "#4caf50",
    info: "#2196f3",
    warning: "#ff9800",
    primary: "#00bcd4",
  };

  return {
    height: 8,
    borderRadius: 4,
    backgroundColor: "rgba(255, 255, 255, 0.08)",
    "& .MuiLinearProgress-bar": {
      backgroundColor: progressColors[color] || "#00bcd4",
    },
  };
});

const SkillLogo = styled("img")(({ theme }) => ({
  width: 28,
  height: 28,
  objectFit: "contain",
}));

const SkillCard = ({ skill }) => {
  const getPriorityValue = (priority) => {
    switch (priority.toUpperCase()) {
      case "HIGH":
        return 90;
      case "MEDIUM":
        return 70;
      case "LOW":
        return 50;
      default:
        return 60;
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority.toUpperCase()) {
      case "HIGH":
        return "success";
      case "MEDIUM":
        return "info";
      case "LOW":
        return "warning";
      default:
        return "primary";
    }
  };

  const getSkillIcon = (skillName) => {
    const iconMapping = {
      'javascript': <JavascriptIcon sx={{ color: '#00bcd4' }} />,
      'typescript': <CodeIcon sx={{ color: '#00bcd4' }} />,
      'react': <WebIcon sx={{ color: '#00bcd4' }} />,
      'angular': <WebIcon sx={{ color: '#00bcd4' }} />,
      'vue': <WebIcon sx={{ color: '#00bcd4' }} />,
      'html': <HtmlIcon sx={{ color: '#00bcd4' }} />,
      'css': <CssIcon sx={{ color: '#00bcd4' }} />,
      'node.js': <TerminalIcon sx={{ color: '#00bcd4' }} />,
      'express': <ApiIcon sx={{ color: '#00bcd4' }} />,
      'mongodb': <StorageIcon sx={{ color: '#00bcd4' }} />,
      'mysql': <StorageIcon sx={{ color: '#00bcd4' }} />,
      'postgresql': <StorageIcon sx={{ color: '#00bcd4' }} />,
      'aws': <CloudIcon sx={{ color: '#00bcd4' }} />,
      'docker': <CodeIcon sx={{ color: '#00bcd4' }} />,
      'kubernetes': <CodeIcon sx={{ color: '#00bcd4' }} />,
      'python': <CodeIcon sx={{ color: '#00bcd4' }} />,
      'java': <IntegrationInstructionsIcon sx={{ color: '#00bcd4' }} />,
      'c#': <CodeIcon sx={{ color: '#00bcd4' }} />,
      'c++': <CodeIcon sx={{ color: '#00bcd4' }} />,
      'go': <CodeIcon sx={{ color: '#00bcd4' }} />,
      'ruby': <CodeIcon sx={{ color: '#00bcd4' }} />,
      'php': <CodeIcon sx={{ color: '#00bcd4' }} />,
      // Add more mappings as needed
      'git': <DataObjectIcon sx={{ color: '#00bcd4' }} />,
      'graphql': <ApiIcon sx={{ color: '#00bcd4' }} />,
      'redis': <MemoryIcon sx={{ color: '#00bcd4' }} />,
      'firebase': <StorageIcon sx={{ color: '#00bcd4' }} />,
    };
    const normalizedName = skillName.toLowerCase();
    return iconMapping[normalizedName] || <CodeIcon sx={{ color: '#00bcd4' }} />;
  };

  return (
    <StyledCard>
      <StyledCardContent>
        <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 40,
              height: 40,
              borderRadius: "50%",
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              marginRight: 2,
            }}
          >
            {getSkillIcon(skill.name)}
          </Box>
          <SkillName>{skill.name}</SkillName>
        </Box>

        <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
          <PriorityChip
            label={skill.priority}
            size="small"
            priority={skill.priority.toLowerCase()}
          />
        </Box>

        <Typography
          variant="body2"
          sx={{ mb: 1, color: "rgba(255, 255, 255, 0.7)" }}
        >
          Proficiency Level
        </Typography>
        <StyledLinearProgress
          variant="determinate"
          value={getPriorityValue(skill.priority)}
          color={getPriorityColor(skill.priority)}
        />
      </StyledCardContent>
    </StyledCard>
  );
};

export default SkillCard;