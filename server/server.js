const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config(); // Load environment variables from .env file

const app = express();
app.use(cors());

// Log the MongoDB URI to check if it is correctly loaded
console.log("MongoDB URI: ", process.env.MONGO_URI);
console.log("Server Port: ", process.env.PORT);

// MongoDB connection using the encrypted MONGO_URI from .env
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log("MongoDB connected successfully");
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });

// MongoDB Models
const Skill = mongoose.model("Skill", new mongoose.Schema({
  name: String,
  category: String,
  priority: String,
}));

// Create a Project model for projects data
const Project = mongoose.model("Project", new mongoose.Schema({
  title: String,
  date: String,
  imageUrl: String,
  description: String,
  techStack: [String],
  liveLink: String,
  repoLink: String
}));

// API endpoint to fetch skills
app.get("/api/skills", async (req, res) => {
  try {
    const programming_languages = await Skill.find();
    res.json({ programming_languages });
  } catch (error) {
    res.status(500).json({ message: "Error fetching skills" });
  }
});

// API endpoint to fetch projects
app.get("/api/projects", async (req, res) => {
  try {
    const projects = await Project.find(); // Fetch all projects from MongoDB
    res.json(projects); // Return the projects as JSON
  } catch (error) {
    res.status(500).json({ message: "Error fetching projects" });
  }
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
