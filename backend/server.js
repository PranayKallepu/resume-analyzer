const express = require("express");
const cors = require("cors");
const multer = require("multer");
const dotenv = require("dotenv");
const path = require("path");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// PostgreSQL connection
const db = require("./db");

// Routes
const uploadRoutes = require("./routes/uploadRoutes");
const resumeRoutes = require("./routes/resumeRoutes");

app.use("/api/upload", uploadRoutes);
app.use("/api/resumes", resumeRoutes);

// Root test
app.get("/", (req, res) => {
  res.send("✅ Resume Analyzer Backend Running");
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
