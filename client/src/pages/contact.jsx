import React from "react";
import { Box, Typography, Chip, Button, Stack, useTheme } from "@mui/material";
import { styled } from "@mui/material/styles";
import { motion } from "framer-motion";
import contactIcon from "../assets/contact.svg";
import mailIcon from "../assets/mail.svg";

const GlassCard = styled(motion.div)(({ theme }) => ({
  background: "rgba(255, 255, 255, 0.08)",
  backdropFilter: "blur(8px)",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  border: "1px solid rgba(255, 255, 255, 0.12)",
  borderRadius: "12px",
  border: "1px solid rgba(255, 255, 255, 0.12)",
  padding: theme.spacing(4),
  color: "#fff",
  boxShadow: "0px 4px 20px rgba(0, 188, 212, 0.15)",
  maxWidth: 800,
  margin: "56px auto 0 auto",
}));

const EmailBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(2),
  background: "rgba(255, 255, 255, 0.05)",
  backdropFilter: "blur(15px)",
  padding: theme.spacing(2),
  borderRadius: 10,
  border: "1px solid rgba(255, 255, 255, 0.08)",
  marginTop: theme.spacing(3),
}));

const ContactButton = styled(Button)(({ theme }) => ({
  backgroundColor: "rgba(255, 255, 255, 0.1)",
  borderRadius: 20,
  color: "#90caf9",
  fontWeight: 600,
  textTransform: "none",
  "&:hover": {
    backgroundColor: "rgba(0, 188, 212, 0.2)",
  },
}));

const Contact = () => {
  return (
    <GlassCard
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <Box display="flex" alignItems="center" gap={2} mb={3}>
        <img src={contactIcon} alt="Contact Icon" width={40} height={40} />
        <Typography variant="h4" sx={{ color: "#00bcd4", fontWeight: 600 }}>
          Let&apos;s Connect
        </Typography>
      </Box>

      <EmailBox>
        <img src={mailIcon} alt="Mail Icon" width={28} height={28} />
        <Box>
          <Typography variant="body1">
            <a
              href="mailto:leeveshkumar24@gmail.com"
              style={{ color: "#90caf9", textDecoration: "none" }}
            >
              Personal Email
            </a>
            <br />
            <a
              href="mailto:leeveshkumar2022@vitbhopal.ac.in"
              style={{ color: "#90caf9", textDecoration: "none" }}
            >
              Offical College Email
            </a>
          </Typography>
        </Box>
      </EmailBox>

      <Typography
        variant="body2"
        sx={{ mt: 3, mb: 2, color: "rgba(255,255,255,0.8)", textAlign: "center", fontSize: "0.9rem" }}
      >
        I&apos;m always open to connecting with passionate minds, collaborators,
        or anyone curious about my work.
        <br />
        Whether you want to discuss a project, opportunity, or just say hi —
        feel free to reach out!
      </Typography>

      <Stack direction="row"  flexWrap="wrap" justifyContent="center" gap={2}>
        <ContactButton
          variant="contained"
          component="a"
          href="https://x.com/kumar_leevesh"
          target="_blank"
          rel="noreferrer"
        >
          Twitter
        </ContactButton>
        <ContactButton
          variant="contained"
          component="a"
          href="https://www.linkedin.com/in/leevesh-kumar/"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </ContactButton>
        <ContactButton
          variant="contained"
          component="a"
          href="https://leetcode.com/u/leevesh/"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </ContactButton>
        <ContactButton
          variant="contained"
          component="a"
          href="https://github.com/theleeveshkumar/"
          target="_blank"
          rel="noreferrer"
        >
          Leetcode
        </ContactButton>
      </Stack>

      <Typography
        variant="body2"
        sx={{ mt: 3, color: "rgba(255,255,255,0.8)" }}
      >
        Interested in collaborating? Let&apos;s work together to bring your
        vision to life.
      </Typography>
    </GlassCard>
  );
};

export default Contact;
