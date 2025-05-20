import React, { useEffect, useState } from 'react';
import { 
  Box,
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
  LinearProgress,
  Chip,
  ToggleButton,
  ToggleButtonGroup,
  useTheme,
  Fade,
} from '@mui/material';
import { styled } from '@mui/material/styles';

// Icons for various skills
import CodeIcon from '@mui/icons-material/Code';
import StorageIcon from '@mui/icons-material/Storage';
import DesktopWindowsIcon from '@mui/icons-material/DesktopWindows';
import DnsIcon from '@mui/icons-material/Dns';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import BuildIcon from '@mui/icons-material/Build';

// Import local JSON file
import localSkills from "../assets/portfolio.skills.json";

// Styled components
const SectionTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  marginBottom: theme.spacing(1),
  position: "relative",
}));

const SubTitle = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(4),
  color: theme.palette.text.secondary,
}));

const SkillCard = styled(Card)(({ theme }) => ({
  height: '100%',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  '&:hover': {
    transform: 'translateY(-8px)',
    boxShadow: theme.shadows[4],
  },
}));

const PriorityChip = styled(Chip)(({ theme, priority }) => {
  const priorityColors = {
    high: theme.palette.success.main,
    medium: theme.palette.info.main,
    low: theme.palette.warning.main,
  };
  
  return {
    backgroundColor: priorityColors[priority.toLowerCase()] || theme.palette.grey[500],
    color: theme.palette.common.white,
    fontWeight: 500,
  };
});

const FilterToggleButton = styled(ToggleButton)(({ theme }) => ({
  padding: theme.spacing(0.5, 2),
  '&.Mui-selected': {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    '&:hover': {
      backgroundColor: theme.palette.primary.dark,
    },
  },
}));

const Skills = () => {
  const theme = useTheme();
  const [skillsData, setSkillsData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [isInView, setIsInView] = useState(false);
  
  useEffect(() => {
    // Use local JSON data
    setSkillsData(localSkills);
    
    // Set in view after a small delay for animations
    const timer = setTimeout(() => setIsInView(true), 300);
    return () => clearTimeout(timer);
  }, []);

  // Extract unique categories from skills
  const categories = ['All', ...new Set(skillsData.map(skill => skill.category))];
  
  // Filter skills based on selected category
  const filteredSkills = selectedCategory === 'All' 
    ? skillsData 
    : skillsData.filter(skill => skill.category === selectedCategory);

  // Handle category change
  const handleCategoryChange = (event, newCategory) => {
    if (newCategory !== null) {
      setSelectedCategory(newCategory);
    }
  };

  // Get icon based on category
  const getCategoryIcon = (category) => {
    const iconProps = { sx: { fontSize: 28, color: theme.palette.primary.main } };
    
    switch(category) {
      case 'Frontend':
        return <DesktopWindowsIcon {...iconProps} />;
      case 'Backend':
        return <DnsIcon {...iconProps} />;
      case 'Database':
        return <StorageIcon {...iconProps} />;
      case 'Mobile':
        return <PhoneAndroidIcon {...iconProps} />;
      case 'DevOps':
        return <BuildIcon {...iconProps} />;
      default:
        return <CodeIcon {...iconProps} />;
    }
  };

  // Map priority to progress value
  const getPriorityValue = (priority) => {
    switch(priority.toUpperCase()) {
      case 'HIGH':
        return 90;
      case 'MEDIUM':
        return 70;
      case 'LOW':
        return 50;
      default:
        return 60;
    }
  };

  // Map priority to color
  const getPriorityColor = (priority) => {
    switch(priority.toUpperCase()) {
      case 'HIGH':
        return 'success';
      case 'MEDIUM':
        return 'info';
      case 'LOW':
        return 'warning';
      default:
        return 'primary';
    }
  };

  return (
    <Box sx={{ py: 8, bgcolor: theme.palette.background.default }}>
      <Container>
        <Fade in={isInView} timeout={800}>
          <Box sx={{ mb: 6, textAlign: 'center' }}>
            <SectionTitle variant="h3" gutterBottom>
              Technical Expertise
            </SectionTitle>
            <Box 
              sx={{ 
                width: 60, 
                height: 4, 
                bgcolor: theme.palette.primary.main, 
                mx: 'auto', 
                mb: 2 
              }} 
            />
            <SubTitle variant="h6">
              A showcase of my technical skills and proficiency levels
            </SubTitle>
          </Box>
        </Fade>

        {/* Category Filter Buttons */}
        <Box sx={{ display: 'flex', justifyContent: 'center', mb: 4 }}>
          <Fade in={isInView} timeout={1000}>
            <ToggleButtonGroup
              value={selectedCategory}
              exclusive
              onChange={handleCategoryChange}
              aria-label="skill categories"
              size="small"
              sx={{ flexWrap: 'wrap', justifyContent: 'center' }}
            >
              {categories.map((category, index) => (
                <FilterToggleButton key={index} value={category}>
                  {category}
                </FilterToggleButton>
              ))}
            </ToggleButtonGroup>
          </Fade>
        </Box>

        <Grid container spacing={3}>
          {filteredSkills.map((skill, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Fade 
                in={isInView} 
                style={{ 
                  transitionDelay: `${index * 100}ms`
                }}
                timeout={800}
              >
                <SkillCard>
                  <CardContent>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                      {getCategoryIcon(skill.category)}
                      <Typography 
                        variant="h6" 
                        component="div" 
                        sx={{ ml: 1, fontWeight: 600 }}
                      >
                        {skill.name}
                      </Typography>
                    </Box>
                    
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                      <Chip 
                        label={skill.category} 
                        size="small" 
                        variant="outlined"
                      />
                      <PriorityChip 
                        label={skill.priority} 
                        size="small"
                        priority={skill.priority.toLowerCase()}
                      />
                    </Box>
                    
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                      Proficiency Level
                    </Typography>
                    <LinearProgress
                      variant="determinate"
                      value={getPriorityValue(skill.priority)}
                      color={getPriorityColor(skill.priority)}
                      sx={{ 
                        height: 8, 
                        borderRadius: 4,
                        backgroundColor: theme.palette.grey[200]
                      }}
                    />
                  </CardContent>
                </SkillCard>
              </Fade>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Skills;