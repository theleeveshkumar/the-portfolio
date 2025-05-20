import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Box,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import CodeIcon from "@mui/icons-material/Code";
import WorkIcon from "@mui/icons-material/Work";
import ContactMailIcon from "@mui/icons-material/ContactMail";

const navItems = [
  { key: "home", label: "Home", to: "/", icon: <HomeIcon /> },
  { key: "skills", label: "Skills", to: "/skills", icon: <CodeIcon /> },
  { key: "projects", label: "Projects", to: "/projects", icon: <WorkIcon /> },
  { key: "contact", label: "Contact", to: "/contact", icon: <ContactMailIcon /> },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: isScrolled ? "#121212" : "transparent",
          backdropFilter: "blur(10px)",
          boxShadow: isScrolled ? "0 2px 10px rgba(0,0,0,0.3)" : "none",
          transition: "all 0.3s ease-in-out",
        }}
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Typography
            variant="h6"
            component="a"
            href="/"
            sx={{
              color: "white",
              textDecoration: "none",
              fontWeight: 600,
              fontFamily: "'Montserrat', sans-serif",
              letterSpacing: "0.8px",
            }}
          >
            leeveshkumarweb
          </Typography>

          {/* Desktop Nav */}
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 3 }}>
            {navItems.map(({ key, label, to, icon }) => (
              <NavLink
                key={key}
                to={to}
                style={({ isActive }) => ({
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  textDecoration: "none",
                  color: isActive ? "#00BCD4" : "white",
                  fontWeight: isActive ? 600 : 400,
                  transition: "0.2s",
                })}
              >
                {icon}
                {label}
              </NavLink>
            ))}
          </Box>

          {/* Mobile Menu Icon */}
          <IconButton
            edge="end"
            color="inherit"
            onClick={toggleMenu}
            sx={{ display: { md: "none" } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer anchor="right" open={menuOpen} onClose={toggleMenu} PaperProps={{ sx: { backgroundColor: "#1c1c1c", color: "#fff" } }}>
        <Box sx={{ width: 250, paddingTop: 4 }}>
          <List>
            {navItems.map(({ key, label, to, icon }) => (
              <ListItemButton
                key={key}
                component={NavLink}
                to={to}
                onClick={toggleMenu}
                sx={{
                  color: "inherit",
                  "&.active": {
                    backgroundColor: "#2a2a2a",
                    fontWeight: "bold",
                  },
                }}
              >
                <ListItemIcon sx={{ color: "#00BCD4" }}>{icon}</ListItemIcon>
                <ListItemText primary={label} />
              </ListItemButton>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default Header;
