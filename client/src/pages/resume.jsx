import React from 'react';
import {
  Container,
  Box,
  Typography,
  Paper,
  Grid,
  Divider,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Link,
  Stack,
  Chip,
} from '@mui/material';
import {
  LocationOn,
  Email,
  Phone,
  Language,
  LinkedIn,
  GitHub,
  Circle,
} from '@mui/icons-material';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#00bcd4',  // bright cyan like HeroTitle gradient start
    },
    secondary: {
      main: '#2196f3',  // blue like HeroTitle gradient end
    },
    text: {
      primary: '#fff',      // white text (like HeroSection)
      secondary: '#90caf9', // light blue for subtitles
    },
    background: {
      default: '#0f2027', // dark background similar to HeroSection gradient start
      paper: '#203a43',   // mid-tone background like HeroSection
    },
  },
  typography: {
    h1: {
      fontSize: '2.8rem',  // bigger font size like HeroTitle
      fontWeight: 700,
      background: 'linear-gradient(to right, #00bcd4, #2196f3)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
    },
    h2: {
      fontSize: '1.5rem',
      fontWeight: 500,
      color: '#90caf9',
      marginBottom: '16px',
    },
    h3: {
      fontSize: '1.2rem',
      fontWeight: 500,
      color: '#90caf9',
    },
    body1: {
      fontSize: '0.95rem',
      color: '#fff',
    },
  },
});

const Header = () => (
  <Box sx={{ textAlign: 'center', mb: 4 }}>
    <Typography variant="h1" color="primary" gutterBottom>
      Leevesh Kumar
    </Typography>
    <Grid container spacing={1} justifyContent="center" sx={{ mb: 1 }}>
      <Grid item>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
          <LocationOn fontSize="small" color="action" />
          <Typography variant="body2">Bhilai</Typography>
        </Box>
      </Grid>
      <Grid item>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
          <Email fontSize="small" color="action" />
          <Typography variant="body2">leeveshkumar24@gmail.com</Typography>
        </Box>
      </Grid>
      <Grid item>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
          <Phone fontSize="small" color="action" />
          <Typography variant="body2">+91 62678 87648</Typography>
        </Box>
      </Grid>
    </Grid>
    <Grid container spacing={2} justifyContent="center">
      <Grid item>
        <Link
          href="https://theleeveshkumar.vercel.app"
          underline="hover"
          color="secondary"
          sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Language fontSize="small" />
          <Typography variant="body2">theleeveshkumar.vercel.app</Typography>
        </Link>
      </Grid>
      <Grid item>
        <Link
          href="https://linkedin.com/in/leevesh-kumar"
          underline="hover"
          color="secondary"
          sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedIn fontSize="small" />
          <Typography variant="body2">linkedin.com/in/leevesh-kumar</Typography>
        </Link>
      </Grid>
      <Grid item>
        <Link
          href="https://github.com/theleeveshkumar"
          underline="hover"
          color="secondary"
          sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHub fontSize="small" />
          <Typography variant="body2">github.com/theleeveshkumar</Typography>
        </Link>
      </Grid>
    </Grid>
  </Box>
);

const Summary = () => (
  <Section title="Summary">
    <Typography variant="body1">
      Passionate and self-driven Full-Stack Web Developer skilled in building scalable and responsive
      applications using the MERN stack (MongoDB, Express.js, React.js, Node.js). Experienced in designing
      user-centric interfaces with React, managing backend APIs, and deploying apps using modern CI/CD pipelines.
      Strong foundation in data structures, algorithms, and software engineering principles. Adept at
      collaborating in Agile teams and continuously learning emerging web technologies and AI/ML concepts.
    </Typography>
  </Section>
);

const Education = () => (
  <Section title="Education">
    <Typography variant="h3" gutterBottom>
      Vellore Institute of Technology, B.Tech in Computer Science
    </Typography>
    <List dense>
      <ListItem disablePadding>
        <ListItemIcon sx={{ minWidth: 24 }}>
          <Circle sx={{ fontSize: 8 }} />
        </ListItemIcon>
        <ListItemText primary="CGPA: 8.2/10 (Till 6th Semester)" />
      </ListItem>
      <ListItem disablePadding>
        <ListItemIcon sx={{ minWidth: 24 }}>
          <Circle sx={{ fontSize: 8 }} />
        </ListItemIcon>
        <ListItemText primary="Relevant Coursework: Data Structures, Algorithms, Operating Systems, Computer Networks, Web Development, DBMS" />
      </ListItem>
    </List>
  </Section>
);

const Experience = () => (
  <Section title="Experience">
    <Typography variant="h3" gutterBottom>
      Core Team Member
    </Typography>
    <Typography variant="body1" gutterBottom>
      Freelancing Club, VIT Bhopal
    </Typography>
    <List dense>
      <ListItem disablePadding>
        <ListItemIcon sx={{ minWidth: 24 }}>
          <Circle sx={{ fontSize: 8 }} />
        </ListItemIcon>
        <ListItemText primary="Collaborated with peers on frontend and backend development for multiple web projects using React.js and Node.js." />
      </ListItem>
      <ListItem disablePadding>
        <ListItemIcon sx={{ minWidth: 24 }}>
          <Circle sx={{ fontSize: 8 }} />
        </ListItemIcon>
        <ListItemText primary="Assisted in organizing technical workshops focused on freelancing, web technologies, and career development." />
      </ListItem>
      <ListItem disablePadding>
        <ListItemIcon sx={{ minWidth: 24 }}>
          <Circle sx={{ fontSize: 8 }} />
        </ListItemIcon>
        <ListItemText primary="Contributed to code reviews, debugging, and enhancing UI/UX to improve user experience." />
      </ListItem>
    </List>
  </Section>
);

const Projects = () => (
  <Section title="Projects">
    <Project
      title="Full-Stack Portfolio Website (MERN Stack)"
      items={[
        'Developed a responsive portfolio website with React.js and CSS modules, showcasing projects and skills.',
        'Built RESTful backend APIs with Node.js and Express for contact form handling.',
        'Implemented continuous deployment pipeline on Vercel ensuring seamless updates.',
      ]}
    />
    <Project
      title="Globia — Interactive Country Explorer"
      items={[
        'Built a React SPA consuming REST Countries API to display detailed country information dynamically.',
        'Enhanced UI/UX with Material-UI components and Framer Motion animations for smooth interactions.',
        'Implemented search, filter, and error handling features with mobile-first responsive design.',
      ]}
    />
  </Section>
);

const Project = ({ title, items }) => (
  <Box sx={{ mb: 2 }}>
    <Typography variant="h3" gutterBottom>
      {title}
    </Typography>
    <List dense>
      {items.map((text, idx) => (
        <ListItem key={idx} disablePadding>
          <ListItemIcon sx={{ minWidth: 24 }}>
            <Circle sx={{ fontSize: 8 }} />
          </ListItemIcon>
          <ListItemText primary={text} />
        </ListItem>
      ))}
    </List>
  </Box>
);

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages:',
      skills: ['JavaScript (ES6+)', 'TypeScript', 'Python', 'C++', 'Java', 'SQL', 'HTML5', 'CSS3'],
    },
    {
      title: 'Web Development:',
      skills: ['React.js', 'Redux', 'Node.js', 'Express.js', 'MongoDB', 'RESTful APIs', 'Material-UI', 'Framer Motion', 'Bootstrap', 'EJS'],
    },
    {
      title: 'Tools & Platforms:',
      skills: ['Git', 'GitHub', 'VS Code', 'Vercel', 'Netlify', 'Postman', 'Chrome DevTools', 'npm', 'CI/CD pipelines'],
    },
    {
      title: 'Soft Skills:',
      skills: ['Problem Solving', 'Collaboration', 'Adaptability', 'Time Management', 'Communication', 'Continuous Learning'],
    },
  ];

  return (
    <Section title="Skills">
      <Grid container spacing={2}>
        {skillCategories.map(({ title, skills }, idx) => (
          <Grid item xs={12} key={idx}>
            <Typography variant="h3" gutterBottom>
              {title}
            </Typography>
            <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap sx={{ mb: 2 }}>
              {skills.map((skill) => (
                <Chip key={skill} label={skill} size="small" sx={{ m: 0.5 }} />
              ))}
            </Stack>
          </Grid>
        ))}
      </Grid>
    </Section>
  );
};

const Certifications = () => {
  const certs = [
    'AWS Academy Cloud Foundations — AWS Academy',
    'Generative AI for Beginners — Coursera',
    'Problem Solving (Basic) — HackerRank',
    'Java Programming — HackerRank',
    'Python for Everybody — Coursera',
  ];

  return (
    <Section title="Certifications">
      <List dense>
        {certs.map((cert, idx) => (
          <ListItem key={idx} disablePadding>
            <ListItemIcon sx={{ minWidth: 24 }}>
              <Circle sx={{ fontSize: 8 }} />
            </ListItemIcon>
            <ListItemText primary={cert} />
          </ListItem>
        ))}
      </List>
    </Section>
  );
};

const Section = ({ title, children }) => (
  <Box sx={{ mb: 4 }}>
    <Typography variant="h2" color="primary">
      {title}
    </Typography>
    <Divider sx={{ mb: 2, borderColor: 'secondary.main' }} />
    {children}
  </Box>
);

const Resume = () => (
  <ThemeProvider theme={theme}>
    <Box sx={{ mt: '88px' }}>
      <Container maxWidth="md" sx={{ py: 4 }}>
        <Paper elevation={3} sx={{ p: { xs: 2, sm: 4 }, borderRadius: 2 }}>
          <Header />
          <Summary />
          <Education />
          <Experience />
          <Projects />
          <Skills />
          <Certifications />
        </Paper>
      </Container>
    </Box>
  </ThemeProvider>
);

export default Resume;
