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
  Button
} from '@mui/material';
import { 
  Person, 
  Email, 
  Phone, 
  Language, 
  LinkedIn, 
  GitHub,
  LocationOn,
  Circle,
  Download
} from '@mui/icons-material';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#2c3e50',
    },
    secondary: {
      main: '#3498db',
    },
  },
  typography: {
    h1: {
      fontSize: '2rem',
      fontWeight: 600,
    },
    h2: {
      fontSize: '1.5rem',
      fontWeight: 600,
      marginBottom: '0.5rem',
    },
    h3: {
      fontSize: '1.2rem',
      fontWeight: 500,
    },
    body1: {
      fontSize: '0.95rem',
    },
  },
});

// Function to handle PDF download
const handleDownloadPDF = () => {
  // In a real application, you would generate or fetch a PDF here
  // For this example, we'll just create a download link to a placeholder
  const link = document.createElement('a');
  link.href = "data:application/pdf;base64,JVBERi0xLjcKJeLjz9MKNSAwIG9iago8PCAvVHlwZSAvWFJlZiAvTGVuZ3RoIDEwIC9GaWx0ZXIgL0ZsYXRlRGVjb2RlIC9EZWNvZGVQYXJtcyA8PCAvQ29sdW1ucyA0IC9QcmVkaWN0b3IgMTIgPj4gL1cgWyAxIDIgMSBdIC9JbmRleCBbIDQgMzAgXSAvSW5mbyAyMyAwIFIgL1Jvb3QgMjUgMCBSIC9TaXplIDM0IC9QcmV2IDAKL0lEIFs8YjA1MTMyODRkODBkMDlhYmI0MWE0NDMyMzNhNTJiZmE+IDxiMDUxMzI4NGQ4MGQwOWFiYjQxYTQ0MzIzM2E1MmJmYT5dID4+CnN0cmVhbQp4nGNiZOBnYGLgOAkkmBj5GIQYwCCISQAJMDKJMTiCWSCWENM2BgYmRjYglbtDQusTGNiZJBkYD7lzcTMzMTAwMAIAKQ0FXQplbmRzdHJlYW0KZW5kb2JqCnN0YXJ0eHJlZgoyMTUKJSVFT0YK";
  link.download = "LeeveshKumar_Resume.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

const Resume = () => {
  return (
    <ThemeProvider theme={theme}>
      {/* Added margin-top to account for static header */}
      <Box sx={{ mt: '88px' }}>
        <Container maxWidth="md" sx={{ py: 4 }}>
          <Paper elevation={3} sx={{ p: { xs: 2, sm: 4 }, borderRadius: 2 }}>
          {/* Header Section */}
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
                >
                  <GitHub fontSize="small" />
                  <Typography variant="body2">github.com/theleeveshkumar</Typography>
                </Link>
              </Grid>
            </Grid>
          </Box>

          {/* Summary Section */}
          <Box sx={{ mb: 4 }}>
            <Typography variant="h2" color="primary">
              Summary
            </Typography>
            <Divider sx={{ mb: 2, borderColor: 'secondary.main' }} />
            <Typography variant="body1">
              Passionate and self-driven Full-Stack Web Developer skilled in building scalable and responsive applications using
              the MERN stack (MongoDB, Express.js, React.js, Node.js). Experienced in designing user-centric interfaces with
              React, managing backend APIs, and deploying apps using modern CI/CD pipelines. Strong foundation in data
              structures, algorithms, and software engineering principles. Adept at collaborating in Agile teams and
              continuously learning emerging web technologies and AI/ML concepts.
            </Typography>
          </Box>

          {/* Education Section */}
          <Box sx={{ mb: 4 }}>
            <Typography variant="h2" color="primary">
              Education
            </Typography>
            <Divider sx={{ mb: 2, borderColor: 'secondary.main' }} />
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
          </Box>

          {/* Experience Section */}
          <Box sx={{ mb: 4 }}>
            <Typography variant="h2" color="primary">
              Experience
            </Typography>
            <Divider sx={{ mb: 2, borderColor: 'secondary.main' }} />
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
          </Box>

          {/* Projects Section */}
          <Box sx={{ mb: 4 }}>
            <Typography variant="h2" color="primary">
              Projects
            </Typography>
            <Divider sx={{ mb: 2, borderColor: 'secondary.main' }} />
            
            <Box sx={{ mb: 2 }}>
              <Typography variant="h3" gutterBottom>
                Full-Stack Portfolio Website (MERN Stack)
              </Typography>
              <List dense>
                <ListItem disablePadding>
                  <ListItemIcon sx={{ minWidth: 24 }}>
                    <Circle sx={{ fontSize: 8 }} />
                  </ListItemIcon>
                  <ListItemText primary="Developed a responsive portfolio website with React.js and CSS modules, showcasing projects and skills." />
                </ListItem>
                <ListItem disablePadding>
                  <ListItemIcon sx={{ minWidth: 24 }}>
                    <Circle sx={{ fontSize: 8 }} />
                  </ListItemIcon>
                  <ListItemText primary="Built RESTful backend APIs with Node.js and Express for contact form handling." />
                </ListItem>
                <ListItem disablePadding>
                  <ListItemIcon sx={{ minWidth: 24 }}>
                    <Circle sx={{ fontSize: 8 }} />
                  </ListItemIcon>
                  <ListItemText primary="Implemented continuous deployment pipeline on Vercel ensuring seamless updates." />
                </ListItem>
              </List>
            </Box>
            
            <Box>
              <Typography variant="h3" gutterBottom>
                Globia — Interactive Country Explorer
              </Typography>
              <List dense>
                <ListItem disablePadding>
                  <ListItemIcon sx={{ minWidth: 24 }}>
                    <Circle sx={{ fontSize: 8 }} />
                  </ListItemIcon>
                  <ListItemText primary="Built a React SPA consuming REST Countries API to display detailed country information dynamically." />
                </ListItem>
                <ListItem disablePadding>
                  <ListItemIcon sx={{ minWidth: 24 }}>
                    <Circle sx={{ fontSize: 8 }} />
                  </ListItemIcon>
                  <ListItemText primary="Enhanced UI/UX with Material-UI components and Framer Motion animations for smooth interactions." />
                </ListItem>
                <ListItem disablePadding>
                  <ListItemIcon sx={{ minWidth: 24 }}>
                    <Circle sx={{ fontSize: 8 }} />
                  </ListItemIcon>
                  <ListItemText primary="Implemented search, filter, and error handling features with mobile-first responsive design." />
                </ListItem>
              </List>
            </Box>
          </Box>

          {/* Skills Section */}
          <Box sx={{ mb: 4 }}>
            <Typography variant="h2" color="primary">
              Skills
            </Typography>
            <Divider sx={{ mb: 2, borderColor: 'secondary.main' }} />
            
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Typography variant="h3" gutterBottom>
                  Programming Languages:
                </Typography>
                <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap sx={{ mb: 2 }}>
                  {['JavaScript (ES6+)', 'TypeScript', 'Python', 'C++', 'Java', 'SQL', 'HTML5', 'CSS3'].map((skill) => (
                    <Chip key={skill} label={skill} size="small" sx={{ m: 0.5 }} />
                  ))}
                </Stack>
              </Grid>
              
              <Grid item xs={12}>
                <Typography variant="h3" gutterBottom>
                  Web Development:
                </Typography>
                <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap sx={{ mb: 2 }}>
                  {['React.js', 'Redux', 'Node.js', 'Express.js', 'MongoDB', 'RESTful APIs', 'Material-UI', 'Framer Motion', 'Bootstrap', 'EJS'].map((skill) => (
                    <Chip key={skill} label={skill} size="small" sx={{ m: 0.5 }} />
                  ))}
                </Stack>
              </Grid>
              
              <Grid item xs={12}>
                <Typography variant="h3" gutterBottom>
                  Tools & Platforms:
                </Typography>
                <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap sx={{ mb: 2 }}>
                  {['Git', 'GitHub', 'VS Code', 'Vercel', 'Netlify', 'Postman', 'Chrome DevTools', 'npm', 'CI/CD pipelines'].map((skill) => (
                    <Chip key={skill} label={skill} size="small" sx={{ m: 0.5 }} />
                  ))}
                </Stack>
              </Grid>
              
              <Grid item xs={12}>
                <Typography variant="h3" gutterBottom>
                  Soft Skills:
                </Typography>
                <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap sx={{ mb: 2 }}>
                  {['Problem Solving', 'Collaboration', 'Adaptability', 'Time Management', 'Communication', 'Continuous Learning'].map((skill) => (
                    <Chip key={skill} label={skill} size="small" sx={{ m: 0.5 }} />
                  ))}
                </Stack>
              </Grid>
            </Grid>
          </Box>

          {/* Certifications Section */}
          <Box>
            <Typography variant="h2" color="primary">
              Certifications
            </Typography>
            <Divider sx={{ mb: 2, borderColor: 'secondary.main' }} />
            <List dense>
              {[
                'AWS Academy Cloud Foundations — AWS Academy',
                'Generative AI for Beginners — Coursera',
                'Problem Solving (Basic) — HackerRank',
                'Java Programming — HackerRank',
                'Python for Everybody — Coursera'
              ].map((cert, index) => (
                <ListItem key={index} disablePadding>
                  <ListItemIcon sx={{ minWidth: 24 }}>
                    <Circle sx={{ fontSize: 8 }} />
                  </ListItemIcon>
                  <ListItemText primary={cert} />
                </ListItem>
              ))}
            </List>
          </Box>
        </Paper>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default Resume;