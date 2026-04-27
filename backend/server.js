const announcementRoutes = require("./routes/announcementRoutes");
const paymentRoutes = require("./routes/paymentRoutes");
const packRoutes = require("./routes/packRoutes");
const messageRoutes = require("./routes/messageRoutes");
const studentProfileRoutes = require("./routes/StudentProfileRoutes");
const express = require("express");
const cors = require("cors");
require("dotenv").config();

const authRoutes = require("./routes/authRoutes");
const teacherRoutes = require("./routes/teacherRoutes");
const studentRoutes = require("./routes/studentRoutes");
const trialRoutes = require("./routes/trialRoutes");
const reviewRoutes = require("./routes/reviewRoutes");


const app = express();
const PORT = process.env.PORT || 5000;


app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "API NOVADEMY en ligne" });
});

app.use("/api/announcements", announcementRoutes);
app.use("/api/payments", paymentRoutes);
app.use("/api/packs", packRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/teachers", teacherRoutes);
app.use("/api/students", studentRoutes);
app.use("/api/trials", trialRoutes);
app.use("/api/student-profile", studentProfileRoutes);
app.use("/api/reviews", reviewRoutes);
app.listen(PORT, () => {
  console.log(`Serveur backend démarré sur http://localhost:${PORT}`);
});